import { useProductQuery } from "@/hooks/useProductQuery"
import { IProducts } from "@/common/products"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../../features/product/_components/product"


const DetailPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useProductQuery(id ? +id : 0)
    if (isLoading) return <div className="text-red-500">Loading...</div>

    return (
        <ProductDetail data={data as IProducts} />
    )
}

export default DetailPage