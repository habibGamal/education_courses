import React, { useEffect, useState } from "react";
import { App, ConfigProvider, message } from "antd";
import { usePage } from "@inertiajs/react";

type AppState = {
    lang: "ar" | "en";
};

export const AppStatusContext = React.createContext<
    [AppState, React.Dispatch<React.SetStateAction<AppState>>] | null
>(null);

export const useAppStatus = () => {
    const [appState, setAppState] = React.useContext(AppStatusContext)!;
    const changeLang = (lang: AppState["lang"]) => {
        setAppState((state) => ({ ...state, lang }));
    };
    return { appState, changeLang };
};

export const useTranslate = () => {
    const [{ lang }] = React.useContext(AppStatusContext)!;
    const t = (en: string, ar: string) => {
        return lang === "ar" ? ar : en;
    };
    return t;
};

export default function Config({ children }: { children: React.ReactNode }) {
    const [appState, setAppState] = useState<AppState>({
        lang: "en",
    });
    useEffect(() => {
        const lang = localStorage.getItem("lang") as typeof appState.lang;
        if (lang) {
            setAppState((state) => ({ ...state, lang }));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("lang", appState.lang);
        document.documentElement.lang = appState.lang;
    }, [appState.lang]);
    return (
        <AppStatusContext.Provider value={[appState, setAppState]}>
            <ConfigProvider direction={appState.lang === "ar" ? "rtl" : "ltr"}>
                <App>{children}</App>
            </ConfigProvider>
        </AppStatusContext.Provider>
    );
}
