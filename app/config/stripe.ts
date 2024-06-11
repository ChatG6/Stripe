import Stripe from "stripe"
export const strip_creds = {
'publishable_key':'pk_test_51PPYe8RpJQ1z9BQJtrIhpVA5EsCRghvVEahtdFNAiNm0f4ZEwkNx6Z5chlioPqHV8Wha7UgrOjNAZnyjEVZcZbes00F12H3LUR',
  'secret_key':'sk_test_51PPYe8RpJQ1z9BQJ5oxfQZmz8vVz57KgJeOLkiPcokPdtCm1BZeqJttk6eXrp4XCjbHtlTTm1LZS6swLZSyaTGsO002LA4TMJC',
}

export const stripe = new Stripe(strip_creds.secret_key);