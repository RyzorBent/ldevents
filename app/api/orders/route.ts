import { NextResponse } from "next/server";
import { CartItem } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const { items, customerEmail, customerName } = await req.json();

    // Here you would typically integrate with your email service provider
    // For demo purposes, we'll just log the order details
    console.log("Order received:", {
      customerName,
      customerEmail,
      items,
      total: calculateTotal(items),
      date: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Order processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order processing error:", error);
    return NextResponse.json(
      { message: "Failed to process order" },
      { status: 500 }
    );
  }
}

function calculateTotal(items: CartItem[]) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (subtotal * 1.1).toFixed(2); // Including 10% service fee
}