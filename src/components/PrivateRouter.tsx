import { IUsers } from "@/common/users";
import { Navigate, Outlet } from "react-router-dom";
type acc = {
    accessToken: string,
    user: IUsers
}
type PrivateRouterProps = {
    user?: acc,
    children?: React.ReactNode
    redirectPath?: string
}
const PrivateRouter = ({ user, children, redirectPath = '/login' }: PrivateRouterProps) => {
    console.log("Role", user?.user?.role);

    if (!user || Object.keys(user).length === 0 || (user?.user?.role.includes("member"))) {
        return <Navigate to={redirectPath} replace />
    }

    return children ? children : <Outlet />

}

export default PrivateRouter