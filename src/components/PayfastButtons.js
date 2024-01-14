import React, { useState } from 'react';
import '../styles/global.css';

export default function PayfastButtons() {
  const [amount, setAmount] = useState(null);

  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSetAmount = (e) => {
    setAmount(e.target.value);
  };

  const donationAmounts = [100, 200, 250, 300, 350, 400, 450, 500];
  const donationButtons = donationAmounts.map((amount) => {
    return (
      <button
        type='input'
        class='btn btn-primary'
        value={amount}
        style={{
          width: '50px',
          padding: '10px 2px',
          marginRight: '5px',
        }}
        onClick={handleSetAmount}
      >
        R{amount}
      </button>
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      <form
        name='PayFastPayNowForm'
        action='https://www.payfast.co.za/eng/process'
        method='post'
      >
        <input required type='hidden' name='cmd' value='_paynow' />
        <input
          required
          type='hidden'
          name='receiver'
          pattern='[0-9]'
          value='10146776'
        />
        <input
          type='hidden'
          name='return_url'
          value='https://www.diroboto.co.za/'
        />
        <input
          type='hidden'
          name='cancel_url'
          value='https://www.diroboto.co.za/donate'
        />
        <input
          type='hidden'
          name='notify_url'
          value='https://www.diroboto.co.za/notify'
        />
        <input required type='hidden' name='amount' value={amount} />
        <input
          required
          type='hidden'
          name='item_name'
          maxlength='255'
          value='Donate'
        />
        <table>
          <tr>
            <td style={{ display: 'flex', flexDirection: 'column' }}>
              <tr>{donationButtons.slice(0, 4).map((b) => b)}</tr>
              <tr>{donationButtons.slice(4, 8).map((b) => b)}</tr>
              <input
                type='text'
                value={amount}
                placeholder='Custom Amount'
                onChange={handleOnChange}
                style={{
                  marginRight: '5px',
                  backgroundColor: '#cacbcc',
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '18px',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  outline: 'none',
                  height: '45px',
                  marginTop: '20px',
                }}
              />
              <button type='submit' className='btn btn-primary'>
                Donate
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
