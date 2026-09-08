import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hero } from './HeroSection';
import './hero.css';

export const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <section id="system" className="demoTarget">
        <span>#SYSTEM SECTION (DEMO PLACEHOLDER)</span>
      </section>
      <section id="about" className="demoTarget demoTargetAlt">
        <span>#ABOUT SECTION (DEMO PLACEHOLDER)</span>
      </section>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
