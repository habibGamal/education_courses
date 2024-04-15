import { Link, Head } from "@inertiajs/react";
import { Course, Package, PageProps } from "@/types";
import Navbar from "@/Components/Navbar";
import { Badge, Typography } from "antd";
import CourseCard from "@/Components/CourseCard";
import SectionTitle from "@/Components/SectionTitle";
import About from "@/Components/About";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Catalog from "@/Components/Catalog";
import { useTranslate } from "@/Layouts/Config";
import Contact from "@/Components/Contact";

const beautyData = [
    {
        text: "الي يخليك تطلع بصوره كويسه عشان تبدا فيها ريتاتش هوا تلوين الفايل الرووو ودا انا عاملو ف اول فيديو هاخدك من الاول خالص عشان تبقي عارف ايه الي لازم يتعمل ف الرووو ف صور البيوتي بالذات واي صوره بورتريه + هعرفك حاجه جديده بعرف اطلع بيها وايت بلنس احسن حاجه ودا بيريحك ف تقفيل صورتك وهوا ال Skin 3d profil",
        imgSrc: "/assets/beauty/1.jpg",
    },
    {
        text: "وبعد كده هنخرج الصوره من الايت روم وهنبدا ب اول حاجه الهيلنج وهعرفك ازي قد ايه الهيلنج بيفرق ف اي حاجه بتعملها ف الصوره ولو مهتمتش بي صورتك عممرها م هتكون حلوه",
        imgSrc: "/assets/beauty/2.jpg",
    },
    {
        text: "وبعدين والاهم الوكال دودج & بيرن اكيد كلنا بنشوف الموضوع صعب بس الي ممكن متكونش تعرفو ان التكنيك دا اهم حاجه لازم تكون عارفو صح عشان تكون ايديتور مميز وانا ف الكورس هخليك تشتغل لوكال بطريقه احترافيه ولو انت متعرفوش اصلا بعد م تخرج من الكورس وبعد التطبيق بتاعك هتعرف تشتغل بي اكنك بروفشنال",
        imgSrc: "/assets/beauty/3.jpg",
    },
    {
        text: "غير هعلمك رسم الرموش والحواجب وإعداد فرشاة للرسم ورسم الشعر ودي حجات ممكن انت متكونش واخد بالك منها هخليك تعرف تشوفها صح وازي هتفرق معاك",
        imgSrc: "/assets/beauty/4.jpg",
    },
    {
        text: "وهعرفك الطريقه الصح الي بتميز شغلي ف الريتاتش وهيا الفركونسي ازي تشتغل بي صح وبدل م تضيع بي ملامح صورتك هخليك ازي تعرف تخلي بي صورتك باينه مرسومه ومتمشيش بي عشوائي",
        imgSrc: "/assets/beauty/5.jpg",
    },
    {
        text: "جلوبال دودج & بيرن كتير من الناس بتستخدمو غلط هعرفك ازي استخدامو الصح وهوا اكتر حاجه بيظهر كل الشغل الي انت عملتو ف الصوره من غيرو صورتك هتبان عاديه جدا ولو مستخددمتوش صح ممكن تبوظ اي حاجه انت كنت مصلحها ف الصوره عشان كده انا مهتم بي جدا وشارحهولك باكتر من طريقه وبسلاسه ف الشرح عشان المعلومه توصلك صح وبسهوله",
        imgSrc: "/assets/beauty/6.jpg",
    },
    {
        text: "التلوين وتفنيش الصوره",
        imgSrc: "/assets/beauty/7.jpg",
    },
    {
        text: "ازي هنستفيد ف شغلنا ب بلجن ال tk",
        imgSrc: "/assets/beauty/8.jpg",
    },
    {
        text: "طرق مختلفه لعمل الشارب بطريقه صحيحه",
        imgSrc: "/assets/beauty/9.jpg",
    },
];

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
    const t = useTranslate();
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
                        {t(
                            "Master the Art of Coloring",
                            "ابدأ رحلتك الإبداعية اليوم"
                        )}
                    </Typography.Title>
                    <Typography.Text className="text-xl text-[#DBD5C4] max-w-[600px] text-center">
                        {t(
                            "Take your photos to the next level with our retouching courses. Learn the secrets of enhancing images, bringing out their true beauty ✨",
                            "انطلق في رحلة تعبيرية مع دوراتنا المصممة بشكل جيد لتناسب جميع المستويات. من الأساسيات المناسبة للمبتدئين إلى التقنيات المتقدمة. ✨"
                        )}
                    </Typography.Text>
                    <Link
                        href={route("browse.courses.index")}
                        className="bg-primary-400 text-lg hover:cursor-pointer transition-colors hover:bg-primary-600 hover:text-white text-white font-bold py-2 px-4 rounded mt-4 w-fit border-none"
                    >
                        {t("Enroll Now!", "سجل الآن!")}
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
            <Catalog courses={courses} packages={packages} />
            <Features />

            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="lg:pr-8 lg:pt-4">
                            <h2 className="text-base font-semibold leading-7 text-primary-600">
                                {t("Beauty Course", "برنامج كورس البيوتي")}
                            </h2>
                            <SectionTitle
                                title={t(
                                    <>
                                        What you will {""}
                                        <span className="down-mark-line">
                                            learn
                                        </span>
                                    </>,
                                    <>
                                        هتتعلم{" "}
                                        <span className="down-mark-line">
                                            اي
                                        </span>
                                    </>
                                )}
                            />
                            <div className="columns-1 md:columns-2  gap-7 mt-16">
                                {beautyData.map((item, i) => (
                                    <div
                                        className="break-inside-avoid mb-8 bg-white rounded-lg p-4 relative"
                                        key={i}
                                    >
                                        <img
                                            className="h-[300px] object-cover w-full rounded-lg"
                                            src={item.imgSrc}
                                            alt="Gallery image"
                                        />
                                        <div className="strong text-3xl w-8 h-8 grid place-items-center space-grotesk absolute rounded-full bg-white top-8 right-8">
                                            <Badge
                                                status="processing"
                                                className="line-h-0"
                                            />
                                        </div>
                                        <Typography.Paragraph className="text-lg tajawal rtl xl:text-xl  mt-6">
                                            • {item.text}
                                        </Typography.Paragraph>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="lg:pr-8 lg:pt-4">
                            <h2 className="text-base font-semibold leading-7 text-primary-600">
                                {t("Gallery", "المعرض")}
                            </h2>
                            <SectionTitle
                                title={t(
                                    <>
                                        My {""}
                                        <span className="down-mark-line">
                                            Works
                                        </span>
                                    </>,
                                    <>
                                        أعمالي{" "}
                                        <span className="down-mark-line">
                                            الفنية
                                        </span>
                                    </>
                                )}
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
            <Contact />
            <Footer />
        </>
    );
}

Welcome.layout = null;
