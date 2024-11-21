import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Services } from '../components/Services/Services';
import { NewCars } from '../components/NewCars/NewCars';
import { FeaturedCars } from '../components/FeaturedCars/FeaturedCars';
import { Reviews } from '../components/Reviews/Reviews';
import { Footer } from '../components/Footer/Footer';

const Admin = () => {
    return (
        <>
            <Hero />
            <Services />
            <NewCars />
            <FeaturedCars />
            <Reviews />
            <Footer />
        </>
    );
}
export default Admin;