import React from "react";
import { HomePage } from "../Landing";
import { ProductPage } from "../Product";

export default function AllPages() {
    return (
        <div>
            <HomePage />
            <ProductPage />
        </div>
    )
}