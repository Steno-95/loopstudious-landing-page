import Card from "../Card/Card";

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
    <section className="gallery-section site-padding ">
      <h2 className="gallery-title">Our creations</h2>
      <button className="gallery-button" type="button">
        See all
      </button>
      <div className="gallery ">
        {content.map((item) => (
          <Card title={item.title} imgSrc={item.img} key={item.img} />
        ))}
      </div>
    </section>
  );
}

export default CreationSection;
