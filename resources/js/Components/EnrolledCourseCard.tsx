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

const { Meta } = Card;

export default function EnrolledCourseCard({
    id,
    course,
}: {
    id: number;
    course: Course;
}) {
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
                <Link href={route("enrolled-courses.show", id)}>
                    View Course
                </Link>,
            ]}
        >
            <Meta
                title={course.title}
                description={
                    <Typography.Text type="secondary" ellipsis>
                        {course.description}
                    </Typography.Text>
                }
            />
        </Card>
    );
}
