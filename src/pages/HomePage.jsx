import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import JobSection from '../components/JobSection';
import Footer from '../components/Footer';





const HomePage = () => {
    return (
        <>
            <Hero />
            <Section />
            <JobSection isHome = {true} />
            <Footer />
        </>
    )
}

export default HomePage