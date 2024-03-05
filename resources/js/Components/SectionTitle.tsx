import { Typography } from "antd";
import React from "react";

export default function SectionTitle({ title }: { title: React.ReactNode }) {
    return (
        <Typography.Title className="!text-4xl" level={2}>
            {title}
        </Typography.Title>
    );
}
