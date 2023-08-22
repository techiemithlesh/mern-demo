import React from 'react'
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ContactUs from '../components/Contactus';
import Testimonial from '../components/Testimonial';
import Testimonials from '../components/Testimonials';
import { useDarkMode } from '../context/DarkModeContext';

const Home = () => {
    const {darkMode,  toggleDarkMode} = useDarkMode();
    return (
        <Layout>
        <Hero/>
        <Services darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Testimonials darkMode={darkMode}/>
        <ContactUs darkMode={darkMode}/>
        </Layout>
    )
}

export default Home
