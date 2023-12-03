import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useProductQueryLimit } from "@/hooks/useProductQuery"
import { IProducts } from "@/common/products"

const Slider = () => {
    return (
        <section>
            <div className="max-w-screen-xl px-3 py-2 mx-auto sm:px-6 sm:py-12 lg:px-8">


                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>


                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>


                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="relative block group">
                            <img
                                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>


                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
const HomePage = () => {
    const { data, isError } = useProductQueryLimit(Number(4))
    if (isError) {
        return (

            <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
                <div className="flex items-center gap-2 text-red-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <strong className="block font-medium"> Something went wrong </strong>
                </div>
            </div>

        )
    }

    return (
        <>
            <Slider />
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <span className="flex items-center">
                            <span className="pr-6 text-xl font-bold text-gray-900 sm:text-3xl">Product List</span>
                            <span className="h-px flex-1 bg-black"></span>
                        </span>
                    </header>

                    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        {data?.map((item: IProducts, index: number) => {
                            return (<li key={index}>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            {item.name}
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> {item.price} </span>
                                        </p>
                                        <Link to={`product/detail/${item.id}`}><Button variant="detail">Detail</Button></Link>
                                    </div>
                                </a>
                            </li>
                            )
                        })}

                    </ul>
                </div>
            </section></>
    )
}
export default HomePage