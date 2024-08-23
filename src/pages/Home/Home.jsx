import Hero from "../../sections/Hero/Hero";
import ViewByCategories from "../../sections/View/ViewByCategories";
import Intro from "../../sections/Intro/Intro";
import Kitchens from "../../sections/Kitchens/Kitchens";
import Poster from "../../sections/Poster/Poster";

function Home() {
  return (
    <>
      <Hero />
      <ViewByCategories />
      <Poster />
      <Intro />
      <div className="container">
        <hr />
      </div>
      <Kitchens />
    </>
  );
}

export default Home;
