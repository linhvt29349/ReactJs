import { AddProduct, DeleteProduct, UpdateProduct } from "@/services/products"
import { IProducts, SchemaProducts } from "@/common/products"
import { joiResolver } from "@hookform/resolvers/joi"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation, useQueryClient } from "@tanstack/react-query"



type useQueryMuitionProps = {
    action: "ADD" | "UPDATE" | "DELETE",
    defaultValues?: IProducts,
    onSuccess?: () => void
}
export const usseQueryMuition = ({ action, onSuccess }: useQueryMuitionProps) => {
    const useQuery = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProducts) => {
            switch (action) {
                case "ADD":
                    return AddProduct(product)
                case "UPDATE":
                    return UpdateProduct(product)
                case "DELETE":
                    return DeleteProduct(product.id!)
                default:
                    return null
            }
        },
        onSuccess: () => {
            useQuery.invalidateQueries({ queryKey: ["PRODUCTS_KEY"] })
            onSuccess && onSuccess()
        },
        onError: (err: any) => {
            alert((err as Error).message)
        }
    })
    const form = useForm<IProducts>({
        resolver: joiResolver(SchemaProducts),
        defaultValues: {
            name: "",
            price: 0
        }
    })
    const onFormSubmit: SubmitHandler<IProducts> = async (value: IProducts) => {
        mutate(value)
    }
    const onRemove: SubmitHandler<IProducts> = async (value: IProducts) => {
        mutate(value)
    }
    return {
        form,
        onFormSubmit,
        onRemove,
        ...rest
    }
}