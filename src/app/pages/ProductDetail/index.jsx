import React from "react";
import { HeroProductDetail } from "../../components/HeroProductDetail";
import { LandingPageNavigation } from "../../components/Header/LandingPageNavigation";
import { DescriptionSection } from "../../components/Description";
import { RelatedProduct } from "../../components/RelatedProduct";
import { Footer } from "../../components/Footer";

export const ProductDetail = () => {
    return (
        <div>
            <LandingPageNavigation />
            <HeroProductDetail />
            <DescriptionSection />
            <RelatedProduct />
            <Footer />
        </div>
    )
}