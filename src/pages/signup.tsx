import Signup from "@/components/Signup";
import useWindowSize from "@/hooks/Windowsize";
import Image from "next/image";
import React from "react";

const SignInPage: React.FC = () => {
    const [width, height] = useWindowSize();
    return (
        <>
            <div style={{ position: "relative" }}>
                <div style={{ opacity: "90%" }}>
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
                    <Signup />
                </div>
            </div>
        </>
    );
};
export default SignInPage;
