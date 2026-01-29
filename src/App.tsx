import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { AboutAndSkills } from "./components/AboutAndSkills";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <AboutAndSkills />
      <Contact />
    </Layout>
  );
};


export default App;

