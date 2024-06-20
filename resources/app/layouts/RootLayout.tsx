import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function RootLayout(props: { children?: ReactNode }) {
    return (
        <main className="">
            <Header />
            {props.children}
            <Outlet />
        </main>
    );
}