import React from "react";
import { LandingPageNavigation } from "../../components/Header/LandingPageNavigation";
import { HeroSection } from "../../components/Hero";

export const HomePage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroSection />
        </div>
    )
}