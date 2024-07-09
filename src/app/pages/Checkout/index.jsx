import React from "react";
import { CheckoutHeader } from "../../components/Header/Checkout/Navigation";
import { Footer } from "../../components/Footer";
import { CheckoutSection } from "../../components/CheckoutBody";

export const CheckoutPage = () => {
    return (
        <div>
            <CheckoutHeader />
            <CheckoutSection />
            <Footer />
        </div>
    )
}