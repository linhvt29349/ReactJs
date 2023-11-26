import { createContext, useReducer } from 'react'
import { IProducts } from '../common/products'


export const ProductContext = createContext([] as any)

const inState = {
    products: [],
    product: {}
}
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "GET_PRODUCT":
            const id = action.payload
            return {
                ...state,
                product: state.products?.find((product: IProducts) => product.id === Number(id))
            }
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "DELETE_PRODUCT":
            const idProduct = action.payload
            const confimrDelete = window.confirm('Are you sure you want to delete this product?')
            if (!confimrDelete) return state
            return {
                products: state.products.filter((product: IProducts) => product.id !== Number(idProduct))
            }
        case "UPDATE_PRODUCT":
            const newProduct = action.payload
            return {
                ...state,
                products: state.products.map((product: IProducts) => product.id === newProduct.id ? newProduct : product)
            }
        default:
            return state
    }
}
const ProductContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, inState)
    return (
        <>
            <ProductContext.Provider value={{
                state,
                dispatch
            }}>
                {children}
            </ProductContext.Provider>
        </>
    )

}

export default ProductContextProvider

