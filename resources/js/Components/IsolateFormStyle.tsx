import { Typography } from "antd";
import React from "react";

export default function IsolateFormStyle({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode | React.ReactNode[];
}) {
    return (
        <div className="bg-neutral-50 rounded-xl p-6 my-4">
            <Typography.Title level={5} className="!mt-0">
                {title}
            </Typography.Title>
            {children}
        </div>
    );
}
