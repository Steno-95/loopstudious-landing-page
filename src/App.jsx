import CreationSection from "./components/CreationSection/CreationSection";
import InteractiveSection from "./components/InteractiveSection/InteractiveSection";
import Header from "./ui/Header";
import SiteFooter from "./components/SiteFooter/SiteFooter";

function App() {
  return (
    <div>
      <Header />
      <main className="">
        <InteractiveSection />
        <CreationSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
