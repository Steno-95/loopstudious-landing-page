import InteractivePicture from "./InteractivePicture";
import InteractiveTextBox from "./InteractiveTextBox";

function InteractiveSection() {
  return (
    // <section className="interactive-section site-padding relative">
    <section className="flex flex-col gap-10 2xl:gap-15 2xl:flex-row items-center  site-padding relative xl:max-w-[80rem] 2xl:mx-auto">
      {/* <InteractivePicture /> */}
      {/* <InteractiveTextBox /> */}
      <picture className="lg:self-start">
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
      <article className="flex flex-col min-h-fit text-center gap-8 lg:bg-(--white) lg:py-8 lg:pl-8 lg:absolute lg:-bottom-[2rem] lg:right-[3rem]  lg:w-[20rem] xl:w-[25rem] lg:text-start  xl:gap-3 xl:right-[6rem] 2xl:static 2xl:p-0 2xl:text-center">
        <h2 className="textbox-title">The leader in interactive VR</h2>
        <p className="textbox-text">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}

export default InteractiveSection;
