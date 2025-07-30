
import ContactUs from './components/contact/ContactUs';
import Explore from './components/explore/Explore'
import Hero from './components/hero/Hero'
import Team from './components/team/Team'
import Trusted from './components/trusted/Trusted'


function App() {


  return (
    <>
      <Hero />
      <Trusted />
      <div className="bg-[#FFFAF5]">
        <Explore />
      </div>
      <Team />
      <div className=" bg-[#101010]">
        <ContactUs />
      </div>
    </>
  );
}

export default App
