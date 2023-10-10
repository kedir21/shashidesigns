
import Navbar from "./components/Navbar/Navbar";
import Home1 from "./components/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Teams from "./components/Teams/Teams";
import Footer from "./components/Footer/Footer";
import Gallary from "./components/Gallary/Gallary";
import Contact from "./components/Contact/Contact";

export default function Home() {

  return (
  <>
 <Navbar />
 <Home1 />
 <About />
 <Services />
 <Gallary />
 <Teams />
 <Testimonials />
 <Contact />
 <Footer />
 </>
  )
}
