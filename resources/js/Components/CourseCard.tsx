import React from "react";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Tag, Typography } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { Course } from "@/types";
import { Link } from "@inertiajs/react";
import imagePathResolver from "@/Helpers/imagePathResolver";
import { useTranslate } from "@/Layouts/Config";

const { Meta } = Card;

export default function CourseCard({ course }: { course: Course }) {
    const t = useTranslate();
    console.log(course);
    return (
        <Card
            style={{ maxWidth: 400, width: "100%" }}
            className="custom-ant-card-cover !rounded-xl overflow-clip bg-white"
            cover={
                <img
                    className="!rounded-xl max-h-[275px] object-cover"
                    alt="example"
                    src={imagePathResolver(course.thumbnail)}
                />
            }
            actions={[
                <div className="flex items-center gap-2 py-1 justify-center">
                    <ComputerDesktopIcon className="w-4" />
                    <Typography.Text key="lessons" className="">
                        {course.blocks_count} {t("Lessons", "درس")}
                    </Typography.Text>
                </div>,
                <Link className="" href={route("browse.courses.show", course.id)}>
                    {t("View Course", "عرض الدورة")}
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
                title={course.title}
                description={
                    <Typography.Text type="secondary" ellipsis>
                        {course.description}
                    </Typography.Text>
                }
            />
            <div className="mt-2">
                <Typography.Text strong className="text-2xl">
                    {course.discount_price} {t("EGP", "جنيه")} {" "}
                </Typography.Text>
                <Typography.Text delete type="secondary">
                    {course.price} {t("EGP", "جنيه")}
                </Typography.Text>
            </div>
        </Card>
    );
}
