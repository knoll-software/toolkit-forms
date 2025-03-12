import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../../src/index.css'; // Path to your main CSS file with Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
