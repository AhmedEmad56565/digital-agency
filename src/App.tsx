import { useEffect } from 'react';

import {
  Header,
  Hero,
  View,
  Explore,
  Blogs,
  Footer,
  Testimonials,
} from './components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <View />
      <Explore />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
