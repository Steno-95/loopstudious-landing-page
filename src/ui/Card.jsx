function Card({ title, imgSrc }) {
  return (
    <article className="card grid grid-cols-2">
      <picture className="col-start-1 col-end-3 row-start-1 bg-gradient-to-r from-gray-950/70 to-transparent">
        <source
          srcSet={`/images/desktop/image-${imgSrc}.jpg`}
          media="(min-width: 48rem)"
        />
        <img
          src={`/images/mobile/image-${imgSrc}.jpg`}
          alt="photo of deep earth"
        />
      </picture>
      <div className="col-start-1 col-end-3 row-start-1 bg-gradient-to-r from-(--black)/50 to-transparent"></div>
      <h2 className="text-(--white) text-[2.2rem] uppercase font-light col-start-1 col-end-1 row-start-1 place-content-end pl-5 pb-3 h-full">
        {title}
      </h2>
    </article>
  );
}

export default Card;
