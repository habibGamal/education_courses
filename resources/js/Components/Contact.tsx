import { useTranslate } from "@/Layouts/Config";
import {
    FacebookFilled,
    InstagramFilled,
    WhatsAppOutlined,
    BehanceSquareOutlined,
    PhoneOutlined,
} from "@ant-design/icons";

export default function Contact() {
    const t = useTranslate();
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div
                    className={`ltr:mr-auto rtl:ml-auto place-self-center lg:col-span-7`}
                >
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        {t("Contact Us", "اتصل بنا")}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {t(
                            "Stay connected with us for any updates and queries",
                            "ابق على اتصال معنا لأي تحديثات واستفسارات"
                        )}
                    </p>
                    <div className="flex gap-4 !mb-2">
                        <a
                            className="w-8 h-8 grid place-items-center bg-blue-500 rounded-full"
                            href="https://www.facebook.com/kokomamdo7"
                            target="_blank"
                        >
                            <FacebookFilled className="text-white text-lg" />
                        </a>
                        <a
                            className="w-8 h-8 grid place-items-center bg-rose-500 rounded-full"
                            href="https://www.instagram.com/kerolos.m_amdoh/"
                            target="_blank"
                        >
                            <InstagramFilled className="text-white text-lg" />
                        </a>
                        <a
                            className="w-8 h-8 grid place-items-center bg-green-500 rounded-full"
                            href="https://wsend.co/201093084429"
                            target="_blank"
                        >
                            <WhatsAppOutlined className="text-white text-lg" />
                        </a>
                        <a
                            className="w-8 h-8 grid place-items-center bg-red-500 rounded-full"
                            href="https://www.behance.net/kokomamamdoh"
                            target="_blank"
                        >
                            <BehanceSquareOutlined className="text-white text-lg" />
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-white">
                        <PhoneOutlined className="text-lg" />
                        <span className="text-lg ltr">+201093084429</span>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                    <img
                        className="max-w-[360px]"
                        src="/assets/contact.png"
                        alt="mockup"
                    />
                </div>
            </div>
        </section>
    );
}

function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function PhoneIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function TwitterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
