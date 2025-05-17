function InteractivePicture() {
  return (
    // <div className="interactive-picture bg-[url(/images/mobile/image-interactive.jpg)] md:bg-[url-(url(/images/desktop/image-interactive.jpg)] w-full min-h-[18rem] md:h-full bg-no-repeat bg-cover "></div>
    <picture className="interactive-picture">
      <source
        srcSet="/images/desktop/image-interactive.jpg"
        media="(min-width: 48rem)"
      />
      <img
        src="/images/mobile/image-interactive.jpg"
        alt="image of a guy using a VR headset"
        className="w-fit"
      />
    </picture>
  );
}

export default InteractivePicture;
