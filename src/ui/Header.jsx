import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const content = ["about", "careers", "events", "products", "support"];

function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia(`(max-width: 768px)`);
    setIsMobile(mediaWatcher.matches);

    function updateIsMobile(e) {
      setIsMobile(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsMobile);
    return () => mediaWatcher.removeEventListener("change", updateIsMobile);
  }, []);

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
