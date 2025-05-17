const content = ["facebook", "twitter", "pinterest", "instagram"];

function SiteFooterLogos() {
  return (
    <ul className="flex gap-5 md:justify-self-end">
      {content.map((item) => (
        <li key={item} className="mb-2">
          <a href="" aria-labelledby="img">
            <img src={`/images/icon-${item}.svg`} alt={`${item} icon`} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SiteFooterLogos;
