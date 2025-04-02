import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CartItem } from '@/lib/types';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { items, customerEmail, customerName } = await req.json();
    const total = calculateTotal(items);

    // Log order details (can be replaced with database insertion)
    console.log('Order received:', {
      customerName,
      customerEmail,
      items,
      total,
      date: new Date().toISOString(),
    });

    // Send confirmation email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: customerEmail,
        subject: 'Order Confirmation - Elegance Events',
        // You can create a more detailed HTML email template later
        text: `Dear ${customerName},\n\nThank you for your order!\n\nOrder Summary:\n${items
          .map((item) => `- ${item.name} (x${item.quantity})`)
          .join(
            '\n'
          )}\n\nTotal: $${total}\n\nWe will be in touch shortly to confirm details.\n\nBest regards,\nThe Elegance Events Team`,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Decide if you want to return an error to the user if email fails
      // For now, we log the error but still return success for the order processing
    }

    return NextResponse.json({ message: 'Order processed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Order processing error:', error);
    return NextResponse.json({ message: 'Failed to process order' }, { status: 500 });
  }
}

function calculateTotal(items: CartItem[]) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return (subtotal * 1.1).toFixed(2); // Including 10% service fee
}
