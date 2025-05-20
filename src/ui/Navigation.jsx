import NavigationList from "./NavigationList";

function Navigation({ isShowing, onClick, content, screenSize }) {
  return (
    <nav className="navigation">
      <figure className="lg:w-full">
        <img src="/images/logo.svg" />
      </figure>
      {!screenSize && <NavigationList content={content} />}
      {screenSize && (
        <button className="nav-btn" onClick={() => onClick((show) => !show)}>
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
