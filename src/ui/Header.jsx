function Header() {
  return (
    <header className="bg-[url(/images/mobile/image-hero.jpg)] lg:bg-[url(/images/desktop/image-hero.jpg)] min-h-screen px-5 bg-top py-8 flex flex-col bg-no-repeat bg-cover">
      <nav className="flex justify-between">
        <figure>
          <img src="/images/logo.svg" />
        </figure>
        {window.innerWidth >= 768 && (
          <ul className="flex text-(--white) gap-3">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        )}
        {window.innerWidth < 768 && (
          <img src="/images/icon-hamburger.svg" className="size-7" />
        )}
      </nav>
      <div className="min-h-svh place-content-center">
        <h1 className="text-(--white) uppercase text-[2.5rem] p-8 border-2">
          Immersive experiences that deliver
        </h1>
      </div>
    </header>
  );
}

export default Header;
