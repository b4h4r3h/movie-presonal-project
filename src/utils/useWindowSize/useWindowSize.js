import { useState, useEffect } from "react";
import { HeartFilled } from "@ant-design/icons";
const useWindowSize = () => {
    const [windowSize, setWindowSize ] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        const cleanUp = () => {
            console.log("run as adminstrator")
            window.removeEventListener("resize", handleResize)
        }
        return cleanUp;
    }, [])
    return windowSize;
}
export default useWindowSize;