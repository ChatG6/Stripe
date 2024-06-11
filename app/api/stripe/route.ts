import { stripe } from "@/app/config/stripe";

async function Handler(req: Request) {
  try {
    const { client_id, priceId } = await req.json();
    const subscription = await stripe.subscriptions.create({
      customer: client_id,
      currency:'USD',
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      metadata: {},
      expand:['latest_inovice.payment_intent']
    });
    if(subscription.status != 'active'){
      return Response.json({msg:'Subsicription Added'},{status:200})
    }
    return Response.json({msg:'Subsicription Failed'},{status:400})

  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}
export { Handler as POST };
