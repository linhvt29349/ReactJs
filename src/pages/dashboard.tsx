import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ProductContext } from "../connext/product"
import { IProducts } from "../interfaces/products"


const Dashboard = () => {
    const { state, dispatch } = useContext(ProductContext)

    useEffect(() => {
        ; (async () => {
            try {
                const data = await (await fetch(`http://localhost:3000/products`)).json()
                dispatch({ type: "GET_PRODUCTS", payload: data })
            } catch (error) {
                alert((error as Error).message)
            }
        })()
    }, [dispatch])
    const RemoveProduct = async (id: number) => {
        try {
            if (id) {
                await (await fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' })).json()
                dispatch({ type: 'DELETE_PRODUCT', payload: id })
            }
            return;
        } catch (error: any) {
            alert((error as Error).message)
        }
    }

    return (
        <div className="overflow-x-auto">
            <Link
                to={'add'}
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
                Add
            </Link>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            STT
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>

                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {state.products?.map((product: IProducts, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {index + 1}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>

                                <td className="whitespace-nowrap px-4 py-2">
                                    <Link
                                        to={`update/${product.id}`}
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        Update
                                    </Link>
                                    <button className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700" onClick={() => RemoveProduct(product.id!)}>Delete</button>
                                </td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard