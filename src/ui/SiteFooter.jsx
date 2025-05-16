function SiteFooter() {
  return (
    <footer className="footer footer-tablet site-padding">
      <img src="/images/logo.svg" className="md:justify-self-start " />
      <nav className="py-4 md:order-1 md:justify-self-start">
        <ul className="links">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
      <ul className="flex gap-5 md:justify-self-end">
        <li>
          <img src="/images/icon-facebook.svg" />
        </li>
        <li>
          <img src="/images/icon-twitter.svg" />
        </li>
        <li>
          <img src="/images/icon-pinterest.svg" />
        </li>
        <li>
          <img src="/images/icon-instagram.svg" />
        </li>
      </ul>
      <p className="text-(--grey) md:order-2 md:justify-self-end">
        © 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}

export default SiteFooter;
