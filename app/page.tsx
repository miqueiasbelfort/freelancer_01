import Footer from '@/components/Footer';
import HomeSection from '@/components/Home';
import Skills from '@/components/Skills';
import Sobre from '@/components/Sobre';
import Location from '@/components/Location';

export default function Home() {

  return (
    <div  className="bg-[#243634] w-full">
        <HomeSection/>
        <Sobre/>
        <Skills/>
        <Location/>
        <Footer/>
    </div>
  );
}
