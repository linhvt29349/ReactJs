import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { IProducts } from "../interfaces/products"
import { useForm, SubmitHandler } from "react-hook-form"
import { ProductContext } from "../connext/product"


const UpdatePage = () => {
    const { state, dispatch } = useContext(ProductContext)
    const navigate = useNavigate()
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm<IProducts>()
    useEffect(() => {
        ; (async () => {
            const datas = await (await fetch(`http://localhost:3000/products`)).json()
            dispatch({ type: "GET_PRODUCTS", payload: datas })

            const data = await (await fetch(`http://localhost:3000/products/${id}`)).json()
            dispatch({ type: "GET_PRODUCT", payload: id })
            reset(data)
        })()

    }, [dispatch])

    const onFormSubmit: SubmitHandler<IProducts> = async (value: any) => {
        try {
            const data = await (await fetch(`http://localhost:3000/products/${state.product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(value)
            })).json()

            dispatch({ type: "UPDATE_PRODUCT", payload: data })
            navigate('/')

        } catch (error: any) {
            alert(error.message)
        }

    }
    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Add product!</h1>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <label >Name</label>

                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter name here"
                            {...register("name")}
                        />


                    </div>
                </div>

                <div>
                    <label >Price</label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter price here..."
                            {...register("price")}
                        />

                    </div>
                </div>

                <div className="flex items-center justify-between">

                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePage