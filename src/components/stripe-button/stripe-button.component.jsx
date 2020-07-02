import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // stripe wants the transaction in cents
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51H0Z4NBGy9uk80ea2z8XDsznO7x5QfPgNvSoCLb2ZJBkGaGjfVaP45wON3vWsIPr92imbiHcd3qNCtpM9ZMJ05Xq009uLis7E8'
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;