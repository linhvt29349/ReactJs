import HeaderAdmin from "@/components/Headers/HeaderAdmin"
import SileMenu from "@/components/SileMenu"
import { Outlet } from "react-router-dom"



const LayoutAdmin = () => {
    return (
        <>
            <HeaderAdmin />
            <main className="grid grid-cols-5 gap-[20px]">
                <div className="">
                    <SileMenu />
                </div>
                <div className="col-span-4">
                    <Outlet />

                </div>
            </main>
        </>
    )
}
export default LayoutAdmin