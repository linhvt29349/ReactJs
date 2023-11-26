
import { IProducts } from "../../../common/products"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { usseQueryMuition } from "@/hooks/useQueryMution"


type IProductItem = {
    product: IProducts,
    index: number
}
const ProductItem = ({ product, index }: IProductItem) => {
    const [productId, setProductId] = useState<number | null>(null)
    const { form, onFormSubmit } = usseQueryMuition({
        action: "UPDATE"
    })

    const updateProduct = (product: IProducts) => {
        setProductId(product.id!)
        form.reset({
            name: product.name,
            price: product.price
        })
    }
    const onFish: SubmitHandler<IProducts> = (value: any) => {
        onFormSubmit({ id: productId, ...value })
        setProductId(null)
    }
    return (
        <>
            {productId === product.id ? (
                <>
                    <tr>
                        <td className="">
                            <Form {...form}>
                                <form action="" onSubmit={form.handleSubmit(onFish)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Tên sản phẩm" {...field} />
                                                </FormControl>

                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Price</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Giá sản phẩm" {...field} />
                                                </FormControl>

                                            </FormItem>
                                        )}
                                    />
                                    <Button variant="update" type="submit">
                                        Update
                                    </Button>
                                </form>
                            </Form>
                        </td>
                    </tr>
                </>

            ) : (
                <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell className="text-center">
                        <Button variant="update" onClick={() => updateProduct(product)}>
                            Update
                        </Button>

                    </TableCell>
                </TableRow>
            )
            }
        </>
    )
}


export default ProductItem