import AccountManager from "@/features/product/_components/account"
import AddPage from "@/features/product/_components/add"
import Dashboard from "@/features/product/_components/dashboard"
import UpdatePage from "@/features/product/_components/update"
import SignIN from "@/features/auth/_components/Signin"
import SignUP from "@/features/auth/_components/Signup"
import DetailPage from "@/pages/Home/DetailPage"
import HomePage from "@/pages/Home/HomePage"
import NotFound from "@/pages/Home/notFound"
import LayoutAdmin from "@/pages/layouts/AdminLayout"
import { Navigate, Route, Routes } from "react-router-dom"
import BaseLayout from "@/pages/layouts/BaseLayout"
import PrivateRouter from "@/components/PrivateRouter"
import { useContext } from "react"
import { UserContext } from "@/store/users"



const Routers = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <Routes>
                <Route path='login' element={!user || Object.keys(user).length === 0 ? <SignIN /> : <Navigate to={'/'} />} />
                <Route path='register' element={!user || Object.keys(user).length === 0 ? <SignUP /> : <Navigate to={'/'} />} />
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='product/detail/:id' element={<DetailPage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>

                <Route path='/admin' element={<PrivateRouter user={user}><LayoutAdmin /></PrivateRouter>}>
                    <Route index element={<Dashboard />} />
                    <Route path='account' element={<AccountManager />} />
                    <Route path='update/:id' element={<UpdatePage />} />
                    <Route path='add' element={<AddPage />} />
                </Route >

            </Routes >
        </>
    )
}

export default Routers