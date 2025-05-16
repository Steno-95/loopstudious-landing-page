import Card from "../../ui/Card";

const content = [
  { title: "Deep Earth", img: "deep-earth" },
  { title: "Night arcade", img: "night-arcade" },
  { title: "Soccer team VR", img: "soccer-team" },
  { title: "The Grid", img: "grid" },
  { title: "From up above VR", img: "from-above" },
  { title: "Pocket borealis", img: "pocket-borealis" },
  { title: "The curiosity", img: "curiosity" },
  { title: "Make it fisheye", img: "fisheye" },
];
function CreationSection() {
  return (
    <section className="p-8 grid grid-cols-1 justify-items-center gap-10">
      <h2 className="row-start-1 uppercase text-[2.5rem]">Our creations</h2>
      <button className="order-2 uppercase text-[1.5rem] border-2 w-fit py-3 px-15 tracking-widest">
        See all
      </button>
      <div className="gallery grid grid-cols-1 gap-8">
        {content.map((item) => (
          <Card title={item.title} imgSrc={item.img} key={item.img} />
        ))}
      </div>
    </section>
  );
}

export default CreationSection;
