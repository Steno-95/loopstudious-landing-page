function Card({ title, imgSrc }) {
  return (
    <article className="card">
      <picture className="card-picture">
        <source
          srcSet={`/images/desktop/image-${imgSrc}.jpg`}
          media="(min-width: 48rem)"
        />
        <img
          src={`/images/mobile/image-${imgSrc}.jpg`}
          alt="photo of deep earth"
        />
      </picture>
      <div className="card-filter"></div>
      <h2 className="card-tag">{title}</h2>
    </article>
  );
}

export default Card;
