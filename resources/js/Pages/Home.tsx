import Catalog from "@/Components/Catalog";
import Footer from "@/Components/Footer";
import About from "@/Components/Home/About";
import BeforeAfter from "@/Components/Home/BeforeAfter";
import Contact from "@/Components/Home/Contact";
import Features from "@/Components/Home/Features";
import Gallery from "@/Components/Home/Gallery";
import Landing from "@/Components/Home/Landing";
import WhatYouLearn from "@/Components/Home/WhatYouLearn";
import { Course, Package, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    courses,
    packages,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    courses: Course[];
    packages: Package[];
}>) {
    return (
        <>
            <Head title="Home" />
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Explore a world of creativity and expression through our engaging courses in image coloring and retouching. Join us today to enhance your artistic skills and unleash your creativity with the help of professional instructors and advanced tools."
                />
            </Head>
            <Landing />
            <Catalog courses={courses} packages={packages} />
            <Features />
            {/* <WhatYouLearn /> */}
            <BeforeAfter />
            <Gallery />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

Welcome.layout = null;
