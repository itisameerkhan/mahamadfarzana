import About from "../../Components/About/About";
import Hero from "../../Components/Hero/Hero";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
