import React from "react";

export default function HeaderTitle({ title }: { title: React.ReactNode }) {
    return (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            {title}
        </h2>
    );
}
