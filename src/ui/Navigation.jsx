import Logo from "./Logo";
import NavigationList from "./NavigationList";

function Navigation({ isShowing, onClick, content, screenSize }) {
  return (
    <nav className="navigation" aria-label="navigation">
      <Logo />
      {!screenSize && <NavigationList content={content} />}
      {screenSize && (
        <button
          type="button"
          aria-label="hamburger menu"
          className="nav-btn"
          onClick={() => onClick((show) => !show)}
        >
          {!isShowing && (
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          )}
        </button>
      )}
    </nav>
  );
}

export default Navigation;
