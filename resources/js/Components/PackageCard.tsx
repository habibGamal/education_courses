import imagePathResolver from "@/Helpers/imagePathResolver";
import { useTranslate } from "@/Layouts/Config";
import { Package } from "@/types";
import { StarOutlined } from "@ant-design/icons";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { Badge, Card, Tag, Typography } from "antd";

const { Meta } = Card;

export default function PackageCard({ pkg }: { pkg: Package }) {
    const t = useTranslate();
    console.log(pkg);
    return (
        <Badge.Ribbon text={t("Special", "باقة")}>
            <Card
                style={{ maxWidth: 400, width: "100%" }}
                className="custom-ant-card-cover !rounded-xl overflow-clip bg-white"
                cover={
                    <img
                        className="!rounded-xl max-h-[275px] object-cover"
                        alt="example"
                        src={imagePathResolver(pkg.thumbnail)}
                    />
                }
                actions={[
                    <div className="flex items-center gap-2 py-1 justify-center">
                        <ComputerDesktopIcon className="w-4" />
                        <Typography.Text key="lessons" className="">
                            {pkg.courses_count} {t("Courses", "دورة")}
                        </Typography.Text>
                    </div>,
                    <Link
                        className=""
                        href={route("browse.packages.show", pkg.id)}
                    >
                        {t("View Package", "عرض الباقة")}
                    </Link>,
                ]}
            >
                <div className="flex justify-between items-center mb-4">
                    <Tag bordered={false} color="green" className="text-sm">
                        {t("sale", "خصم")}
                    </Tag>
                    <span className="flex gap-2 items-center">
                        <StarOutlined className="text-yellow-400" />
                        4.9 (20)
                    </span>
                </div>
                <Meta
                    title={pkg.title}
                    description={
                        <Typography.Text type="secondary" ellipsis>
                            {pkg.description}
                        </Typography.Text>
                    }
                />
                <div className="mt-2">
                    <Typography.Text strong className="text-2xl">
                        {pkg.discount_price} {t("EGP", "جنيه")}{" "}
                    </Typography.Text>
                    <Typography.Text delete type="secondary">
                        {pkg.price} {t("EGP", "جنيه")}
                    </Typography.Text>
                </div>
            </Card>
        </Badge.Ribbon>
    );
}
