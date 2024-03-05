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
            style={{ width: 400 }}
            cover={<img alt="example" src={course.thumbnail} />}
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
