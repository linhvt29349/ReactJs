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
import { Layout } from "lucide-react"
import { Route, Routes } from "react-router-dom"


type Props = {}
const Routers = (props: Props) => {
    return (
        <Routes>
            <Route path='login' element={<SignIN />} />
            <Route path='register' element={<SignUP />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='product/detail/:id' element={<DetailPage />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='/admin' element={<LayoutAdmin />}>
                <Route index element={<Dashboard />} />
                <Route path='account' element={<AccountManager />} />
                <Route path='update/:id' element={<UpdatePage />} />
                <Route path='add' element={<AddPage />} />
            </Route>

        </Routes>
    )
}

export default Routers