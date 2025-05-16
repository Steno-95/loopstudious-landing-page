function InteractivePicture() {
  return (
    <picture>
      <source
        srcSet="/images/desktop/image-interactive.jpg"
        media="(min-width: 48rem)"
      />
      <img
        src="/images/mobile/image-interactive.jpg"
        alt="image of a guy using a VR headset"
        className="w-fit objecet-center"
      />
    </picture>
  );
}

export default InteractivePicture;
