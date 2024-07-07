import React from "react";
import { LandingPageNavigation } from "../../components/Header/LandingPageNavigation";
import { Hero } from "../../components/HeroProduct";
import { ProductSection } from "../../components/Products";
import { Footer } from "../../components/Footer";

export const ProductPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <Hero />
            <ProductSection />
            <Footer />
        </div>
    )
}