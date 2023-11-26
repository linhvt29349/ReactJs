import { Link } from "react-router-dom"


const SileMenu = () => {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link to={'/admin'}

                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Quản lý sản phẩm
                        </Link>
                    </li>

                    <li>
                        <Link to={'account'}

                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Quản lý tài khoản
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SileMenu