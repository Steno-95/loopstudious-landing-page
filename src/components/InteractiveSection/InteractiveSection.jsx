import InteractivePicture from "./InteractivePicture";
import InteractiveTextBox from "./InteractiveTextBox";

function InteractiveSection() {
  return (
    <section className="flex flex-col min-h-screen px-5 items-center justify-around ">
      <InteractivePicture />
      <InteractiveTextBox />
    </section>
  );
}

export default InteractiveSection;
