import { Link, Head } from "@inertiajs/react";
import { Course, PageProps } from "@/types";
import Navbar from "@/Components/Navbar";
import { Typography } from "antd";
import CourseCard from "@/Components/CourseCard";
import SectionTitle from "@/Components/SectionTitle";
import About from "@/Components/About";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Catalog from "@/Components/Catalog";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    courses,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    courses: Course[];
}>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gradient">
                <Navbar />
                <div className="flex flex-col items-center pt-12 gap-2 relative arrows-container z-[1] px-4 md:px-0">
                    <div className="w-[80%] xl:w-[70%] justify-between absolute top-1/3 arrows z-[-1] hidden lg:flex">
                        <div className="flex flex-col gap-12">
                            <img
                                src="/assets/white_arrow.svg"
                                alt="arrow"
                                className="w-20 r-arrow mx-4"
                            />
                            <img
                                src="/assets/ps_logo.png"
                                alt="arrow"
                                className="w-20"
                            />
                        </div>
                        <div className="flex flex-col gap-12">
                            <img
                                src="/assets/lr_logo.png"
                                alt="arrow"
                                className="w-20 mx-4"
                            />
                            <img
                                src="/assets/white_arrow.svg"
                                alt="arrow"
                                className="w-20 l-arrow"
                            />
                        </div>
                    </div>
                    <Typography.Title
                        className="text-2xl text-center !text-white"
                        level={1}
                    >
                        Master the Art of Coloring
                    </Typography.Title>
                    <Typography.Text className="text-xl text-[#DBD5C4] max-w-[600px] text-center">
                        Take your photos to the next level with our retouching
                        courses. Learn the secrets of enhancing images, bringing
                        out their true beauty ✨
                    </Typography.Text>
                    <Link
                        href={route("browse.courses.index")}
                        className="bg-primary-400 text-lg hover:cursor-pointer transition-colors hover:bg-primary-600 hover:text-white text-white font-bold py-2 px-4 rounded mt-4 w-fit border-none"
                    >
                        Enroll Now!
                    </Link>
                    <div className="flex -mb-4 justify-center mt-16 w-2/3 md:w-1/2">
                        <img
                            className="w-full h-[12rem] md:h-[24rem] object-cover rounded-2xl hero-shadow"
                            src="/assets/hero.jpg"
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
            <Catalog courses={courses} />
            <Features />

            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="lg:pr-8 lg:pt-4">
                            <h2 className="text-base font-semibold leading-7 text-primary-600">
                                Gallery
                            </h2>
                            <SectionTitle
                                title={
                                    <>
                                        My {""}
                                        <span className="down-mark-line">
                                            Works
                                        </span>
                                    </>
                                }
                            />
                            <div className="columns-1 md:columns-2 xl:columns-3 gap-7  mt-16">
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div
                                        className=" break-inside-avoid mb-8"
                                        key={i}
                                    >
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={`/assets/gallery/${i + 1}.jpg`}
                                            alt="Gallery image"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Footer />
        </>
    );
}

Welcome.layout = null;
