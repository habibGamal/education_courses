import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import useStatus from "@/Hooks/useStatus";
import { Head } from "@inertiajs/react";
import React, { PropsWithChildren, useEffect } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
    useStatus();

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-secondary-800">
                <Navbar />
            </div>
            {children}
            <Footer />
        </>
    );
}
