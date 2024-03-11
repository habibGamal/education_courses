import { Typography } from "antd";
import React from "react";

export default function SectionTitle({ title }: { title: React.ReactNode }) {
    return (
        <Typography.Text className="!text-4xl font-bold">
            {title}
        </Typography.Text>
    );
}
