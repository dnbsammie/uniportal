import React from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/variables.css';
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/*" element={<App />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
)
