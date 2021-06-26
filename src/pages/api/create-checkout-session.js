const stripe = require("stripe")(
  "sk_test_51J6iO2SEAkhsly7VI8TZRI8V607ZC9s8KA6sZ9N0vQS5Fg0tBvVroJEYTMo6WnbqqBy6AuawxEOFBhtp39fFwweO00gDRjf7ut"
);
export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    quantity: 1,
    description: item.description,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    mode: "payment",
    shipping_rates: ["shr_1J6jM0SEAkhsly7VrIw9VfvX"],
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
