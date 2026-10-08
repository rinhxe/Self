import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import ScrollReveal from './components/ScrollReveal';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <ScrollReveal><Main/></ScrollReveal>
        <ScrollReveal><Expertise/></ScrollReveal>
        <ScrollReveal><Timeline/></ScrollReveal>
        <ScrollReveal><Project/></ScrollReveal>
        <ScrollReveal><Contact/></ScrollReveal>
        <Footer />
    </div>
    );
}

export default App;