import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';
import './index.css';

// Calendly widget injection
function injectCalendly() {
  if (!document.getElementById('calendly-widget-script')) {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    link.id = 'calendly-widget-style';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.id = 'calendly-widget-script';
    script.onload = function () {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/luchomoreira-uy/30min',
          text: 'Meet me!',
          color: '#007bff',
          textColor: '#ffffff',
        });
      }
    };
    document.body.appendChild(script);
  }
}

injectCalendly();

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
