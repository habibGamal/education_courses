import {
    BookOpenIcon,
    CheckBadgeIcon,
    ServerIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import SectionTitle from "./SectionTitle";

const features = [
    {
        name: "Teaching Philosophy.",
        description:
            "I believe in the power of art to express, connect, and transform. In my classes, you'll not only learn techniques but also discover the joy of self-expression.",
        icon: AcademicCapIcon,
    },
    {
        name: "Practical Wisdom.",
        description:
            "Benefit from my practical insights, gained through years of hands-on experience.",
        icon: BookOpenIcon,
    },
    {
        name: "Target.",
        description:
            "Every lesson is an opportunity to explore, create, and find your unique artistic voice.",
        icon: CheckBadgeIcon,
    },
];

export default function About() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2
                                id="about"
                                className="text-base font-semibold leading-7 text-primary-600"
                            >
                                About Us
                            </h2>
                            <SectionTitle
                                title={
                                    <>
                                        Who{" "}
                                        <span className="down-mark-line">
                                            we are
                                        </span>
                                    </>
                                }
                            />
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At the core of this website,{" "}
                                <a
                                    className="underline"
                                    target="_blank"
                                    href="https://www.instagram.com/kerolos.m_amdoh/"
                                >
                                    kyrillos Mamdouh
                                </a>{" "}
                                is not just an instructor but a passionate
                                artist with a mission to inspire and nurture
                                your creative journey.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                                                aria-hidden="true"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline m-0">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="/assets/about.jpg"
                        alt="Product screenshot"
                        className="w-[48rem] block align-middle h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    );
}
