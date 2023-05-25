import useWindowSize from "@/hooks/windowsize";
import Image from "next/image";
import Link from "next/link";

export const GetWindowSizeComponent: React.FC = () => {
    const [width, height] = useWindowSize();

    return (
        <Link href="/signin">
            <Image
                src="/images/test2.gif"
                alt="test2.gif"
                width={width}
                height={height}
            />
        </Link>
    );
};
export default GetWindowSizeComponent;
