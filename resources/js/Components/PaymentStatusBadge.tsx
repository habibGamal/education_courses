import { Badge } from "antd";
import React from "react";

const statusMap = {
    pending: "processing",
    paid: "success",
    failed: "error",
};
export default function PaymentStatusBadge({ status }: { status: string }) {
    return (
        <Badge
            status={
                statusMap[status as keyof typeof statusMap] as
                    | "processing"
                    | "success"
                    | "error"
            }
            text={status}
            className="capitalize"
        />
    );
}
