import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SpliteForm/SpliteForm';

const stripePromise = loadStripe('pk_test_51IeACND77kKUbfU35RK5GJfhHq8l2Djj2fQipWDMW1ZuQfA02rdXGY8uNZFWWVJHLw6fouUGIdV6Tt6dPTVNjb5P004Rr4zWmy');


const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
     <SimpleCardForm></SimpleCardForm>
    </Elements>
    );
};

export default ProcessPayment;