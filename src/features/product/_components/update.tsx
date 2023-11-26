import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { IProducts } from "../../../common/products"
import { useProductQuery } from "@/hooks/useProductQuery"
import FormName from "@/features/product/_components/formName"
import FormPrice from "@/features/product/_components/formPrice"
import { Button } from "@/components/ui/button"



const UpdatePage = () => {
    const { id } = useParams()
    const { data, isLoading } = useProductQuery(id ? +id : 0)
    if (isLoading) return <div className="text-red-500">Loading...</div>
    return (
        <>
            <span className="flex items-center">
                <span className="px-6 font-bold text-[30px]">Cập nhật sản phẩm</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>
            <div className='grid grid-cols-2 gap-8 max-w-4xl mx-auto'>
                <FormName data={data as IProducts} />
                <FormPrice data={data as IProducts} />
                <Link to={'/admin'}><Button variant="update">Dashboard</Button></Link>
            </div>
        </>
    )

}

export default UpdatePage