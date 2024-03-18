import React, { useEffect, useState } from "react";
import { App, ConfigProvider, message } from "antd";
import { router, usePage } from "@inertiajs/react";

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
    const t = (en: React.ReactNode, ar: React.ReactNode):any => {
        return lang === "ar" ? ar : en;
    };
    return t;
};

export default function Config({ children }: { children: React.ReactNode }) {
    const [appState, setAppState] = useState<AppState>({
        lang: "ar",
    });
    useEffect(() => {
        const lang = localStorage.getItem("lang") as typeof appState.lang;
        if (lang) {
            setAppState((state) => ({ ...state, lang }));
        }
    }, []);

    useEffect(() => {
        // refetch the page when the user clicks the back button
        const handlePopState = (event: PopStateEvent) => {
            event.stopImmediatePropagation();
            router.reload({
                preserveState: false,
                preserveScroll: false,
                replace: true,
            });
        };
        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("lang", appState.lang);
        document.documentElement.lang = appState.lang;
        document.documentElement.dir = appState.lang === "ar" ? "rtl" : "ltr";
    }, [appState.lang]);
    return (
        <AppStatusContext.Provider value={[appState, setAppState]}>
            <ConfigProvider
                direction={appState.lang === "ar" ? "rtl" : "ltr"}
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: "#EAB308",
                        colorError: "#bd5e5f",
                        borderRadius: 4,
                        fontSize:16,
                        fontFamily: "Space Grotesk",
                        // colorBgBase: "#000"
                    },
                    // components: {
                    //     Menu: {
                    //         darkItemBg: "#000",
                    //     }
                    // }
                }}
            >
                <App>{children}</App>
            </ConfigProvider>
        </AppStatusContext.Provider>
    );
}
