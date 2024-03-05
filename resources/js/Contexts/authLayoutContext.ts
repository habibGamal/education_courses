import { ReactNode, createContext } from "react";

type LayoutCtx = {
    header: ReactNode;
    setHeader: React.Dispatch<React.SetStateAction<ReactNode>>;
} | null;
export const authLayoutContext = createContext<LayoutCtx>(null);
