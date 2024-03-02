import { Button, Tree, TreeDataNode, TreeProps } from "antd";
import { useState } from "react";

export default function ResortingItems({
    gData,
    onFinish,
    setGData,
}: {
    gData: TreeDataNode[];
    onFinish: (data: TreeDataNode[]) => void;
    setGData: React.Dispatch<React.SetStateAction<TreeDataNode[]>>
}) {
    // const [gData, setGData] = useState(data);
    const onDrop: TreeProps["onDrop"] = (info) => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split("-");
        const dropPosition =
            info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

        const loop = (
            data: TreeDataNode[],
            key: React.Key,
            callback: (
                node: TreeDataNode,
                i: number,
                data: TreeDataNode[]
            ) => void
        ) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children!, key, callback);
                }
            }
        };
        const data = [...gData];

        // Find dragObject
        let dragObj: TreeDataNode;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
        } else {
            let ar: TreeDataNode[] = [];
            let i: number;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                // Drop on the top of the drop node
                ar.splice(i!, 0, dragObj!);
            } else {
                // Drop on the bottom of the drop node
                ar.splice(i! + 1, 0, dragObj!);
            }
        }
        setGData(data);
    };
    return (
        <div>
            <Button
                className="mb-2 ml-auto block"
                type="primary"
                onClick={() => onFinish(gData)}
            >
                Save
            </Button>
            <Tree
                className="block draggable-tree"
                draggable
                blockNode
                onDrop={onDrop}
                treeData={gData}
            />
        </div>
    );
}
