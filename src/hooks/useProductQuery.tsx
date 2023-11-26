import { GetProduct, GetProductNew, GetProducts } from "@/services/products"
import { useQuery } from "@tanstack/react-query"

export const useProductQuery = (productId?: number) => {
    const { data, ...rest } = useQuery({
        queryKey: productId ? ['PRODUCTS_KEY', productId] : ['PRODUCTS_KEY'],
        queryFn: async () => productId ? await GetProduct(productId) : await GetProducts(),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })
    return { data, ...rest }
}
export const useProductQueryLimit = (numLimit: number) => {
    const { data, ...rest } = useQuery({
        queryKey: ['PRODUCTS_KEY', numLimit],
        queryFn: async () => await GetProductNew(numLimit),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })
    return { data, ...rest }
}