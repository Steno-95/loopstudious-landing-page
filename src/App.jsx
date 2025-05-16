import CreationSection from "./components/CreationSection/CreationSection";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import Header from "./ui/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="">
        <InteractiveSection />
        <CreationSection />
      </main>
      <footer className="bg-(--black) text-(--white) grid grid-cols-1 items-center justify-items-center gap-5 py-15">
        <img src="/images/logo.svg" />
        <nav className="py-4">
          <ul className="flex flex-col gap-5">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <ul className="flex gap-5">
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
        <p className="text-(--grey)">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
