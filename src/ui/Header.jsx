import { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import useMobile from "../hooks/useMobile";

const content = ["about", "careers", "events", "products", "support"];

function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const isMobile = useMobile();

  return (
    <header className="header header-medias relative">
      <Navigation
        isShowing={isShowing}
        onClick={setIsShowing}
        content={content}
        screenSize={isMobile}
      />
      <div className="hero-box">
        <h1 className="hero-text">Immersive experiences that deliver</h1>
      </div>
      {isShowing && isMobile && <MobileNav setIsShowing={setIsShowing} />}
    </header>
  );
}

export default Header;
