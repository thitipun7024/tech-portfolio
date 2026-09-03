type Props = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
};

export default function PageHero({ eyebrow, title, accent, description }: Props) {
  return (
    <section className="page-hero reveal">
      <div className="eyebrow"><span />{eyebrow}</div>
      <h1>{title} <span className="gradient-text">{accent}</span></h1>
      <p>{description}</p>
    </section>
  );
}
