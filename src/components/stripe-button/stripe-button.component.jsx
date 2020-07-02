import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // stripe wants the transaction in cents
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51H0Z4NBGy9uk80ea2z8XDsznO7x5QfPgNvSoCLb2ZJBkGaGjfVaP45wON3vWsIPr92imbiHcd3qNCtpM9ZMJ05Xq009uLis7E8"

    return (
        <StripeChekout />
    )
}