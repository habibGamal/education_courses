import { useTranslate } from "@/Layouts/Config";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Features() {
    const t = useTranslate();
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className={`ltr:mr-auto rtl:ml-auto place-self-center lg:col-span-7`}>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        {t("Guidance from Professional",'توجيه من شخص محترف')}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {t(
                            "We provide the best courses and the best guidance from the best professionals in the field.",
                            "نحن نقدم أفضل الدورات وأفضل التوجيه من أفضل المحترفين في المجال."
                        )}
                    </p>
                    <Link
                        href={route("browse.courses.index")}
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 hover:text-white focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        {t("Enroll Now", "سجل الآن")}
                        <svg
                            className={`${t("ml-2 -mr-1","rotate-180 mr-2 -ml-1")} w-5 h-5 `}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        href="#about"
                        className="inline-flex items-center justify-center px-5 py-3 mx-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        {t("Learn More", "تعلم المزيد")}
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                    <img
                        className="max-w-[360px]"
                        src="/assets/tools.png"
                        alt="mockup"
                    />
                </div>
            </div>
        </section>
    );
}
