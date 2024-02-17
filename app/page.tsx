import Footer from '@/components/Footer';
import HomeSection from '@/components/Home';
import Skills from '@/components/Skills';
import Sobre from '@/components/Sobre';

export default function Home() {

  return (
    <div  className="bg-[#243634] w-full">
        <HomeSection/>
        <Sobre/>
        <Skills/>
        <Footer/>
    </div>
  );
}
