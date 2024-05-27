import React, { useLayoutEffect, useRef } from "react";
import { SwapOutlined } from "@ant-design/icons";
import { AppStatusContext } from "@/Layouts/Config";

export default function CompersionContainer({
    beforeImg,
    afterImg,
}: {
    beforeImg: string;
    afterImg: string;
}) {
    const [{ lang }] = React.useContext(AppStatusContext)!;
    const comparisonContainer = useRef<HTMLDivElement>(null);
    const dragger = useRef<HTMLDivElement>(null);
    const draggable = useRef<HTMLDivElement>(null);
    const afterImgRef = useRef<HTMLImageElement>(null);
    const beforeImgRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const updateDimensions = () => {
            const containerRect =
                comparisonContainer.current!.getBoundingClientRect();
            const maxX = containerRect.width;
            const minX = 0;
            let isDragging = false;
            let x = 0;

            const down = (e: MouseEvent | TouchEvent) => {
                e.preventDefault();
                isDragging = true;
            };

            dragger.current!.addEventListener("mousedown", down);
            dragger.current!.addEventListener("touchstart", down);

            const onMouseMove = (e: MouseEvent) => {
                if (isDragging) {
                    x = e.clientX - containerRect.x;
                    console.log(x, containerRect.x);
                    if (x > maxX) x = maxX;
                    if (x < minX) x = minX;
                    draggable.current!.style.width = `${
                        (100 / containerRect.width) * x
                    }%`;
                    dragger.current!.style.left = `${
                        (100 / containerRect.width) * x
                    }%`;
                }
            };

            const onTouchMove = (e: TouchEvent) => {
                if (isDragging) {
                    x = e.touches[0].clientX - containerRect.x;
                    if (x > maxX) x = maxX;
                    if (x < minX) x = minX;
                    draggable.current!.style.width = `${
                        (100 / containerRect.width) * x
                    }%`;
                    dragger.current!.style.left = `${
                        (100 / containerRect.width) * x
                    }%`;
                }
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("touchmove", onTouchMove);

            document.addEventListener("mouseup", () => {
                isDragging = false;
            });
            document.addEventListener("touchend", () => {
                isDragging = false;
            });

            return () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("touchmove", onTouchMove);
                document.removeEventListener("mouseup", () => {
                    isDragging = false;
                });
                document.removeEventListener("touchend", () => {
                    isDragging = false;
                });
            };
        };

        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
        });

        resizeObserver.observe(comparisonContainer.current!);

        return () => {
            window.removeEventListener("resize", updateDimensions);
            resizeObserver.disconnect();
        };
    }, [lang]);

    return (
        <div
            ref={comparisonContainer}
            className="compersion-container relative z-10"
        >
            <img
                className="h-full w-full object-cover rounded-lg  select-none pointer-events-none"
                src={beforeImg}
                ref={beforeImgRef}
                alt="Gallery image"
            />
            <div
                ref={draggable}
                className="draggable overflow-clip w-1/2 h-full absolute top-0"
            >
                <img
                    className="h-full object-cover rounded-lg absolute select-none pointer-events-none"
                    src={afterImg}
                    alt="Gallery image"
                    ref={afterImgRef}
                />
            </div>
            <div
                draggable
                ref={dragger}
                className="dragger cursor-move left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  absolute rounded-full bg-white w-8 aspect-square grid place-items-center"
            >
                <SwapOutlined />
            </div>
        </div>
    );
}
