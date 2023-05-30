import PasswordReset from "@/components/passwordreset";
import useWindowSize from "@/hooks/Windowsize";
import Image from "next/image";
import React from "react";

const PasswordResetpaper: React.FC = () => {
    const [width, height] = useWindowSize();
    return (
        <>
            <div style={{ position: "relative" }}>
                <Image
                    src="/images/password3.gif"
                    alt="password3.gif"
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
                <PasswordReset />
            </div>
        </>
    );
};
export default PasswordResetpaper;
