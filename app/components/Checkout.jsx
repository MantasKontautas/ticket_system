import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

export const createCheckOutSession = async (item) => {
    const stripe = await stripePromise;
    const checkoutSession = await fetch('/api/create-stripe-session', {
        method: 'POST',
        body: JSON.stringify(item)
    });
    const data = await checkoutSession.json();
   
    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };