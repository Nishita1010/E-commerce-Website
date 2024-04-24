// import "./App.css";
import Header from "./components/Views/Header/Header";
import { Footer } from "./components/Views/Footer/Footer";

// import Body from "./components/Views/Body/Body";
import { Error_Page } from "./components/Views/Error_Page/Error_Page";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        {/* <Body /> */}
        <Error_Page />
        <Footer />
      </>
    </div>
  );
}

export default App;
