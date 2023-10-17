'use client';
import HeaderDesktop from "@/components/HeaderDesktop";
import HeaderMobile from "@/components/HeaderMobile";
import {useMediaQuery} from "@/components/useMediaQuery";

export default function HeaderRoot() {
    const isBreakpoint = useMediaQuery(768)
    return (
        isBreakpoint ? <HeaderMobile/> : <HeaderDesktop/>
    )
}
