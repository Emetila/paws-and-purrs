import React from "react";
import { LandingPageNavigation } from "../../../components/Header/LandingPageNavigation";
import { RelatedProduct } from "../../../components/RelatedProduct";
import { Footer } from "../../../components/Footer";
import { Cart } from "../../../components/Cart/Cart/cart";

export const CartPage = () => {
    return (
        <div>
            <LandingPageNavigation />
            <Cart/>
            <RelatedProduct />
            <Footer />
        </div>
    )
}