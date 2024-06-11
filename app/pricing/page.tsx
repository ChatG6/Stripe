import { plans } from "../config/plans";
export default function Page() {
  return (
    <section className="page">
      <h1>Pricing Page</h1>
      <section className="content">
        <ul className="plans">
          {plans.map((plan) => (
            <li key={plan.id}>
              <h1>{plan.name}</h1>
              <h4>{plan.price}</h4>
              {plan.note && <p className="note">{plan.note}</p>}
              <div className="features">
                {plan.features.map((f, i) => (
                  <p className="av_fet" key={i}>
                    + {f}
                  </p>
                ))}
                {plan.not_av &&
                  plan.not_av.map((n, i) => (
                    <p className="not_av_fet" key={i}>
                      - {n}
                    </p>
                  ))}
              </div>
                {plan.id > 0 && <a className="subs_btn" href={`/products/${plan.id}`}>Subscribe</a>}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
