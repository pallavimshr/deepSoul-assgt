import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        <Content />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
