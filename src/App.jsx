import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Questions from './components/FAQ/Questions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CurrentStatus from './components/CurrentStatus';
import Location from './components/location/Location';
import LoadingScreen from './components/LoadingScreen';
import WhyUs from './components/whyUs/WhyUs';
import Home from './components/Home';
import Faculty from './components/faculty/Faculty';
import Courses from './components/courses/Courses';

function App() {
    const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 200); // Add a small delay for smooth transition
        };

        // Listen to the window load event to detect when 90% of content is loaded
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const toggleLocationPopup = () => {
        setIsLocationPopupOpen(!isLocationPopupOpen);
    };

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="app">
                    <Header toggleLocationPopup={toggleLocationPopup} />
                    <Home id="home" />
                    <WhyUs id="why-us" />
                    <Faculty id="faculty" />
                    <Courses id="courses" />
                    <CurrentStatus />
                    <Questions id="knowledge-center" />
                    <ContactUs id="contact-us" />
                    <Footer />
                    {isLocationPopupOpen && <Location closePopup={toggleLocationPopup} />}
                </div>
            )}
        </>
    );
}

export default App;
