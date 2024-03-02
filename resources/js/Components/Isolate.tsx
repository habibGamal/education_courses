import React from "react";

export default function Isolate({ children }: { children: React.ReactNode|React.ReactNode[] }) {
    return <div className="bg-neutral-50 rounded-xl p-6 my-4">{children}</div>;
}
