function CardPicture({ imgSrc }) {
  return (
    <picture className="card-picture">
      <source
        srcSet={`/images/desktop/image-${imgSrc}.jpg`}
        media="(min-width: 48rem)"
      />
      <img
        src={`/images/mobile/image-${imgSrc}.jpg`}
        alt="photo of deep earth"
        className="w-full"
      />
    </picture>
  );
}

export default CardPicture;
