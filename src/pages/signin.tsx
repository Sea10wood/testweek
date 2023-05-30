import useWindowSize from "@/hooks/Windowsize";
import Image from "next/image";
import React from "react";
import Signin from "../components/Signin";

const SignInPage: React.FC = () => {
    const [width, height] = useWindowSize();
    return (
        <>
            <div style={{ position: "relative" }}>
                <Image
                    src="/images/testback.png"
                    alt="testback.png"
                    width={width}
                    height={height}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Signin />
            </div>
        </>
    );
};
export default SignInPage;
