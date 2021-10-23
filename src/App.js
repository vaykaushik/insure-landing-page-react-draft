// Components Components

import Header from './components/Header/Header';

import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';

import Footer from './components/Footer/Footer';

// Main Stylesheet

import './sass/modules/styles.scss';

function App() {
  return (
    <>
      <Header/>
        <SectionOne/>
        <SectionTwo/>
      <Footer/>
    </>
  );
}

export default App;
