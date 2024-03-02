import { authLayoutContext } from "@/Layouts/AuthenticatedLayout";
import React, { ReactNode, useContext, useEffect } from "react";

export function useAdminHeaderTitle(header: ReactNode) {
    const layoutCTX = useContext(authLayoutContext);
    useEffect(() => {
        layoutCTX?.setHeader(header);
    }, []);
}
