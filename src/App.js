import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import ScrollToTopButton from "./components/scrollToTopButton";

function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Content />
      </main>

      <Footer />

      
      <ScrollToTopButton />
    </div>
  );
}

export default App;
