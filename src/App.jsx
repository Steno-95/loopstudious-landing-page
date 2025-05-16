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
      <footer>
        <nav>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
