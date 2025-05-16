function Footer() {
  return (
    <footer className="text-center text-[.7rem] mt-10 min-w-[fit] ">
      Challenge by{" "}
      <a
        className="text-(--primary-cyan) hover:text-(--primary-cyan)/80 focus:text-(--primary)"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-(--primary-cyan) hover:text-(--primary-cyan)/80 focus:text-(--primary)"
        href="https://github.com/Steno-95"
        title="The link will redirect to the github of Stefano Lezzi"
      >
        Stefano Lezzi
      </a>
      .
    </footer>
  );
}

export default Footer;
