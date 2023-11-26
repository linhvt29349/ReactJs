import { Link } from "react-router-dom"
import { IProducts } from "../../../common/products"
import { DeleteIcon, Edit, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { formatPrice } from "@/lib/utils"
import { DataTable } from "./data-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useProductQuery } from "@/hooks/useProductQuery"
import { usseQueryMuition } from "@/hooks/useQueryMution"
import { toast } from "@/components/ui/use-toast"


const Remove = (onRemove: any): ColumnDef<IProducts>[] =>
    [

        {
            accessorKey: "name",
            header: () => <span className="text-red-500 text-[17px]">Tên sản phẩm</span>
        },
        {
            accessorKey: "price",
            header: () => <span className="text-red-500 text-[17px]">Giá sản phẩm</span>,
            cell: ({ row }) => {
                const formattedPrice = formatPrice(row.getValue('price') || 0)
                return <span dangerouslySetInnerHTML={{ __html: formattedPrice }} />
            }
        },
        {
            id: "action",
            cell: ({ row: { original } }) => {
                const handlerRemove = (product: IProducts) => {
                    if (confirm('Are you sure you want to remove this product?')) return onRemove(product)
                }
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() => handlerRemove(original)}>
                                    <DeleteIcon /> Xóa
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link to={`update/${original.id}`} className="flex" ><Edit /> Update</Link>

                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu ></>
                )

            }
        }
    ]

const Dashboard = () => {

    const { data, isError, isLoading } = useProductQuery()
    const { onRemove } = usseQueryMuition({
        action: "DELETE",
        onSuccess() {
            toast({
                title: "Success",
                description: "Delete product successfully",
                variant: "add"
            })
        },
    })

    const columns = Remove(onRemove)
    if (isError) return (
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
    if (isLoading) return (

        <div className="flex-1">
            <strong className="block font-medium text-gray-900"> Loading.... </strong>
        </div>
    )

    return (
        <>
            <span className="flex items-center">
                <span className="px-6 font-bold text-[30px]">Quản lý sản phẩm</span>
                <span className="h-px flex-1 bg-black"></span>
            </span>
            <DataTable data={data as IProducts[]} columns={columns}></DataTable>
        </>
    )
}

export default Dashboard