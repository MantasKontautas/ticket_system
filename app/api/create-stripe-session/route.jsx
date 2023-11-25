import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const item = await req.json();

  const redirectURL = process.env.NEXT_PUBLIC_URL;

  const transformedItem = {
    price_data: {
      currency: "eur",
      product_data: {
        name: item.title,
      },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: redirectURL + "/paid?status=success",
    cancel_url: redirectURL + "/failed?status=cancel",
    metadata: {
      images: item.image,
    },
  });
  return NextResponse.json({ id: session.id });
}
