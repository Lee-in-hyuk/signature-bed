import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 링크로 페이지 이동 시 최상단에서 시작되게 해주는 컴포넌트
// index.js에 브라우저 라우터 내에 컴포넌트 연결 시켜야 됨.
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;