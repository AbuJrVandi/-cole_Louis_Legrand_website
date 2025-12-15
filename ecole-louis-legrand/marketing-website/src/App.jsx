import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OssdCurriculum from './pages/OSSD-Curriculum';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import FeesScholarships from './pages/Fees-Scholarships';
import NewsBlog from './pages/News-Blog';
import Contact from './pages/Contact';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="App min-h-screen bg-gray-50">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/ossd-curriculum" element={<OssdCurriculum />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/admissions" element={<Admissions />} />
                        <Route path="/fees-scholarships" element={<FeesScholarships />} />
                        <Route path="/news-blog" element={<NewsBlog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
