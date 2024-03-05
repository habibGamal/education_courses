import { authLayoutContext } from "@/Contexts/authLayoutContext";
import React, { ReactNode, useContext, useEffect } from "react";

export function useHeaderTitle(header: ReactNode) {
    const layoutCTX = useContext(authLayoutContext);
    useEffect(() => {
        layoutCTX?.setHeader(header);
    }, []);
}
