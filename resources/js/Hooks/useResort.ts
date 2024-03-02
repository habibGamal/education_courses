import { TreeDataNode } from "antd";
import { useEffect, useState } from "react";

export default function useResort<T>(
    initialData: T[],
    mapper: (data: T[]) => TreeDataNode[]
): [TreeDataNode[], React.Dispatch<React.SetStateAction<TreeDataNode[]>>] {
    const [gData, setGData] = useState<TreeDataNode[]>(mapper(initialData));
    useEffect(() => {
        setGData(mapper(initialData));
    }, [initialData]);
    return [gData, setGData];
}
