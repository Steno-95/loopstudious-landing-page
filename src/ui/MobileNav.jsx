import Logo from "./Logo";

function MobileNav({ setIsShowing }) {
  return (
    <div className="fixed top-1/2 left-1/2 w-screen h-screen bg-black/90 -translate-[50%] grid grid-rows-[min-content_1fr] items-center p-10 text-white just">
      <div className="flex justify-between items-center">
        <Logo />
        <button
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
          <a>About</a>
        </li>
        <li>careers</li>
        <li>events</li>
        <li>products</li>
        <li>support</li>
      </ul>
    </div>
  );
}

export default MobileNav;
