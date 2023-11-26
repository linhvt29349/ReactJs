import { AxiosResponse } from 'axios'
import { IProducts } from '../common/products'
import { intrences } from '@/core/api'



export const GetProducts = async () => {
    try {
        const response: AxiosResponse<IProducts[]> = await intrences.get('/products?_sort=id&_order=desc')
        return response.data || []
    } catch (error) {
        console.log("Error: ", error)
    }
}
export const GetProductNew = async (numLimit: number) => {
    try {
        const response: AxiosResponse<IProducts[]> = await intrences.get(`/products?_limit=${numLimit}&_sort=price&_order=asc`)
        return response.data || []
    } catch (error) {
        console.log("Error: ", error)
    }
}
export const GetProduct = async (id: number) => {
    try {
        const response: AxiosResponse<IProducts> = await intrences.get(`/products/${id}`)
        return response.data || {}
    } catch (error) {
        console.log('FETCH_PRODUCT_ERROR', error)
    }
}
export const AddProduct = async (product: IProducts) => {
    try {
        const response: AxiosResponse<IProducts> = await intrences.post('/products', product)
        return response.data || {}
    } catch (error) {

    }
}

export const UpdateProduct = async (product: IProducts) => {
    try {
        const response: AxiosResponse<IProducts> = await intrences.put(`/products/${product.id}`, product)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}
export const DeleteProduct = async (id: number) => {
    try {
        const response: AxiosResponse<IProducts> = await intrences.delete('/products/' + id)
        return response.data || {}
    } catch (error) {
        console.log('PATCH_PRODUCTS_ERROR', error)
    }
}