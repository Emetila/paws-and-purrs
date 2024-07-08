import React from "react";
import { CartSection } from "../../../components/Cart";
import { LandingPageNavigation } from "../../../components/Header/LandingPageNavigation";

export const CartPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <CartSection />
        </div>
    )
}