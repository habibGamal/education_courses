import {
    BookOpenIcon,
    CheckBadgeIcon,
    ServerIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import SectionTitle from "./SectionTitle";
import { useTranslate } from "@/Layouts/Config";

export default function About() {
    const t = useTranslate();
    const features = [
        {
            name: t("Our Target", "هدفنا"),
            description: t(
                "Our goal is to help everyone who wants to learn the field and reach the highest level of creativity and professionalism.",
                "هدفنا هو إننا بنساعد كل حد عايز يتعلم المجال و يوصل لأعلى مستوى في الابداع والاحترافية"
            ),
            icon: AcademicCapIcon,
        },
        {
            name: t("Different from others", "تميزنا"),
            description: t(
                "We distinguish ourselves in our way of teaching, we provide easy and simplified content that combines theory and practical application, so that you can understand the subject and apply it comfortably.",
                "احنا بنتميز بطريقتنا في التعليم، بنقدم محتوى سهل ومبسط يجمع بين النظرية والتطبيق العملي، علشان تقدر تفهم الموضوع وتطبقه براحتك."
            ),
            icon: BookOpenIcon,
        },
        {
            name: t("Why choose us", "ليه احنا"),
            description: t(
                "We have a team of experts in the field who have a lot of experience and are able to provide you with valuable advice and guidance.",
                "كيرلس ممدوح عنده خبرة كبيرة في مجال التعديل على الصور، وده اللي بيمكنه يقدملك نصائح وإرشادات قيّمة."
            ),
            icon: CheckBadgeIcon,
        },
    ];
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
                                {t("About", "عنا")}
                            </h2>
                            <SectionTitle
                                title={t(
                                    <>
                                        Who{" "}
                                        <span className="down-mark-line">
                                            we are
                                        </span>
                                    </>,
                                    <>
                                        من{" "}
                                        <span className="down-mark-line">
                                            نحن
                                        </span>
                                    </>
                                )}
                            />
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {t(
                                    <>
                                        At the core of this website,{" "}
                                        <a
                                            className="underline"
                                            target="_blank"
                                            href="https://www.instagram.com/kerolos.m_amdoh/"
                                        >
                                            kyrillos Mamdouh
                                        </a>{" "}
                                        is not just an instructor but a
                                        passionate artist with a mission to
                                        inspire and nurture your creative
                                        journey.
                                    </>,
                                    <>
                                        احنا هنا في موقعنا، هتلاقي كورسات
                                        للتلوين والريتاتش بيقدمها{" "}
                                        <a
                                            className="underline"
                                            target="_blank"
                                            href="https://www.instagram.com/kerolos.m_amdoh/"
                                        >
                                            كيرلس ممدوح
                                        </a>{" "}
                                        متخصص في المجال لاكثر من 6 سنوات.
                                    </>
                                )}
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className={`relative ${t(
                                            "pl-9",
                                            "pr-9"
                                        )}`}
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                className={`absolute ${t(
                                                    "left-1",
                                                    "right-1"
                                                )} top-1 h-5 w-5 text-primary-600`}
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
                        alt="instructor image"
                        className="w-[48rem] block align-middle ltr-rotate-x-180 h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    );
}
