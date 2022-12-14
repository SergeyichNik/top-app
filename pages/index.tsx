import {Button, HTag, Tag, PTag} from "../components";

export default function Home() {
    return (
        <div>
            <HTag tag={'h1'}>Hello world</HTag>
            <HTag tag={'h2'}>Hello world</HTag>
            <HTag tag={'h3'}>Hello world</HTag>
            <Button appearance={"primary"} arrow={"right"}>Primary</Button>
            <Button appearance={"ghost"} arrow={"down"}>Ghost</Button>
            <PTag sizeType={"large"}>Large</PTag>
            <PTag sizeType={"medium"}>Medium</PTag>
            <PTag sizeType={"small"}>Small</PTag>
            <Tag>Ghost</Tag>
            <Tag color={"red"}>Red</Tag>
            <Tag color={"grey"}>Gray</Tag>
            <Tag color={"primary"}>Primary</Tag>
            <Tag sizeType={"small"} color={"red"}>Red</Tag>
            <Tag sizeType={"small"} color={"grey"}>Gray</Tag>
            <Tag sizeType={"small"} color={"primary"}>Primary</Tag>
        </div>
    );
}
