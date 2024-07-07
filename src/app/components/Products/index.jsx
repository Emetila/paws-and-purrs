import React from "react";
import { SideSection } from "../SideList";
import style from './style.module.css';

export const ProductSection = () => {
    return (
        <>
            <aside className={style.container}>
                <SideSection />
            </aside>

            <article>
                <h1>Main area</h1>
            </article>
        </>
    )
}