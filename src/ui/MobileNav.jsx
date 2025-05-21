import Logo from "./Logo";

function MobileNav({ setIsShowing }) {
  return (
    <nav aria-label="mobile menu navigation" className="mobile-links">
      <div className="flex justify-between items-center">
        <Logo />
        <button
          type="button"
          aria-label="cross icon on a button to close  the menu"
          className="nav-btn"
          onClick={() => setIsShowing((show) => !show)}
        >
          <svg className="size-6" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ul className="mobile-nav">
        <li>
          <a>about</a>
        </li>
        <li>
          <a>careers</a>
        </li>
        <li>
          <a>events</a>
        </li>
        <li>
          <a>products</a>
        </li>
        <li>
          <a>support</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
