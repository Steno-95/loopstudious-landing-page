const content = ["facebook", "twitter", "pinterest", "instagram"];

function SiteFooterLogos() {
  return (
    <ul className="flex gap-5 md:justify-self-end">
      {content.map((item) => (
        <li key={item}>
          <img src={`/images/icon-${item}.svg`} alt={`${item} icon`} />
        </li>
      ))}
    </ul>
  );
}

export default SiteFooterLogos;
