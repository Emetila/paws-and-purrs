import React from "react";
import { LandingPageNavigation } from "../../components/Header/LandingPageNavigation";
import { HeroSection } from "../../components/Hero";
import { FeaturedProduct } from "../../components/Featured";
import { BrowseSection } from "../../components/Browse";

export const HomePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroSection />
            <FeaturedProduct />
            <BrowseSection />
        </div>
    )
}