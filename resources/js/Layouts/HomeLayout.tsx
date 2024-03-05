import Navbar from "@/Components/Navbar";
import useStatus from "@/Hooks/useStatus";
import { Head } from "@inertiajs/react";
import { Footer } from "antd/es/layout/layout";
import React, { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
    useStatus();
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-secondary-800">
                <Navbar />
            </div>
            {children}
            <Footer style={{ textAlign: "center",marginTop:'1rem' }}>
                KM Retouch ©{new Date().getFullYear()} Created by Eng. Habib
                Gamal
            </Footer>
        </>
    );
}
