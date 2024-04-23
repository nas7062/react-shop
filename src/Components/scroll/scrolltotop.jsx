import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation(); //현재경로(location) 객체에 접근.

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // 경로가 바뀔떄 마다  scroll을 (0,0) 맨위로

    return null;
};