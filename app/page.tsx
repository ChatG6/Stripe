import axios from "axios";
import { strip_creds, stripe } from "./config/stripe";
import "./main.css";

export default async function Home() {
  
    const resp = axios.post('/stripe',{client_id:'5343246546',priceId:''})
    console.log(resp)
  return (
    <main>
      <h1>Stripe</h1>
    </main>
  );
}
