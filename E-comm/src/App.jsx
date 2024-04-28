import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Newsletter from "./components/Newsletter/Newsletter.jsx";

function App() {
  return (
    <>
      <div className="w-full max-w-[] mx-auto min-h-[100vh]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
