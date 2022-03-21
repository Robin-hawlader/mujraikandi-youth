import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Pages/Shared/Navigation";
import Banner from "./Pages/Home/Banner";
import RegisterBanner from "./Pages/Home/RegisterBanner";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <RegisterBanner></RegisterBanner>
    </div>
  );
}

export default App;
