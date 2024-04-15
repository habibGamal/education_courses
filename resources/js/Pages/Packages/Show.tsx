import imagePathResolver from "@/Helpers/imagePathResolver";
import useModal from "@/Hooks/useModal";
import { useTranslate } from "@/Layouts/Config";
import HomeLayout from "@/Layouts/HomeLayout";
import { Course, Package } from "@/types";
import { ItemType } from "@/types/enums";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
    ComputerDesktopIcon,
    DocumentTextIcon,
    FolderIcon,
} from "@heroicons/react/24/outline";
import { Head, Link, router } from "@inertiajs/react";
import { Button, Divider, Rate, Typography } from "antd";
import { ReactNode } from "react";

const DisplayCourses = ({ courses }: { courses: Course[] }) => (
    <ul>
        {courses.map((course) => (
            <li key={course.id}>
                <Typography.Text>
                    <Link href={route("browse.courses.show", course.id)}>
                        {course.title}
                    </Link>
                </Typography.Text>
            </li>
        ))}
        {courses.length === 0 && (
            <Typography.Text>
                There are no courses in this package
            </Typography.Text>
        )}
    </ul>
);

export default function Show({ pkg }: { pkg: Package }) {
    // const items: CollapseProps["items"] = pkg.blocks?.map((block) => ({
    //     key: block.id.toString(),
    //     label: block.title,
    //     children: block.resources ? (
    //         <DisplayCourses resources={block.resources} />
    //     ) : (
    //         <Typography.Text>
    //             There are no resources in this block
    //         </Typography.Text>
    //     ),
    // }));
    const promoModal = useModal();
    const t = useTranslate();
    return (
        <>
            <Head>
                <title>{pkg.title}</title>
                <meta name="description" content={pkg.description} />
                <meta property="og:title" content={pkg.title} />
                <meta property="og:description" content={pkg.description} />
                <meta
                    property="og:image"
                    content={imagePathResolver(pkg.thumbnail)}
                />
                <meta property="og:url" content={window.location.href} />
            </Head>
            <div className="bg-designer min-h-[400px] grid place-items-center">
                <Typography.Title level={1} className="!text-white">
                    {t("Package Details", "تفاصيل الباقة")}
                </Typography.Title>
            </div>
            <div className="container -mt-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                    <div className="bg-white rounded-xl p-6 col-span-2">
                        <Typography.Title level={2}>
                            {pkg.title}
                        </Typography.Title>
                        <div className="flex gap-2 items-center">
                            <Rate disabled defaultValue={5} />
                            <Typography.Text>4.9 (20)</Typography.Text>
                        </div>
                        <Divider />
                        <div>
                            <Typography.Title level={3}>
                                <DocumentTextIcon
                                    className={`w-5 ${t("mr-2", "ml-2")}`}
                                />
                                {t("Description", "الوصف")}
                            </Typography.Title>
                            <Typography.Text>{pkg.description}</Typography.Text>
                        </div>

                        <div>
                            <Typography.Title level={3}>
                                <FolderIcon
                                    className={`w-5 ${t("mr-2", "ml-2")}`}
                                />
                                {t("Package Content", "محتوى الباقة")}
                                <Typography.Text
                                    type="secondary"
                                    className="mx-2"
                                >
                                    • {pkg.courses?.length}{" "}
                                    {t("courses", "كورس")}
                                </Typography.Text>
                            </Typography.Title>
                            {/* <Collapse
                                items={items}
                                bordered={false}
                                defaultActiveKey={["1"]}
                            /> */}
                            <DisplayCourses courses={pkg.courses!} />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                        <div className="relative">
                            <img
                                className="w-full max-h-[275px] object-cover rounded-xl"
                                src={imagePathResolver(pkg.thumbnail)}
                                alt="course"
                            />
                        </div>
                        <div className="my-4">
                            <Typography.Text strong className="text-4xl">
                                {pkg.discount_price} {t("EGP", "جنيه")}{" "}
                            </Typography.Text>
                            <Typography.Text
                                delete
                                type="secondary"
                                className="text-2xl"
                            >
                                {pkg.price} {t("EGP", "جنيه")}
                            </Typography.Text>
                        </div>
                        <Divider className="my-2" />
                        <Info
                            icon={<ComputerDesktopIcon className="w-4" />}
                            featureName={t("Chapters", "الفصول")}
                            featureValue={`${pkg.courses?.length} ${t(
                                "Chapters",
                                "فصل"
                            )}`}
                        />
                        <Divider className="my-2" />
                        <Button
                            type="primary"
                            size="large"
                            block
                            className="my-4"
                            icon={<ShoppingCartOutlined />}
                            onClick={() =>
                                router.post(route("cart.addCartItem"), {
                                    item_id: pkg.id,
                                    item_type: ItemType.Package,
                                })
                            }
                        >
                            {t("Add to Cart", "أضف إلى السلة")}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

const Info = ({
    icon,
    featureName,
    featureValue,
}: {
    icon: ReactNode;
    featureName: ReactNode;
    featureValue: string;
}) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                {icon}
                <Typography.Text>{featureName}</Typography.Text>
            </div>
            <Typography.Text>{featureValue}</Typography.Text>
        </div>
    );
};

Show.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;
