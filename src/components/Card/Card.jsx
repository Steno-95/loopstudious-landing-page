import CardFilter from "./CardFilter";
import CardPicture from "./CardPicture";
import CardTag from "./CardTag";

function Card({ title, imgSrc }) {
  return (
    <article className="card">
      <CardPicture imgSrc={imgSrc} />
      <CardFilter />
      <CardTag title={title} />
    </article>
  );
}

export default Card;
