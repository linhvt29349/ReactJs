import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { usseQueryMuition } from "@/hooks/useQueryMution"
import { IProducts } from "@/common/products"
import { Pencil } from "lucide-react"
import { useEffect, useState } from "react"



type PropName = {
    data: IProducts
}
const FormName = ({ data }: PropName) => {
    const { toast } = useToast()
    const [status, setStatus] = useState(false)
    const { form, onFormSubmit } = usseQueryMuition({
        action: "UPDATE",
        onSuccess() {
            toast({
                description: "Updated name successfully",
                duration: 3000,
                variant: "add"
            })
            setStatus(false)
        },
    })
    useEffect(() => {
        if (data && form) {
            form.reset({
                name: data.name,
                price: data.price
            })
        }
    }, [data, form])
    const handleOnSubmit = (value: IProducts) => {
        onFormSubmit({ ...data, ...value })
    }
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4'>
            <div className='font-medium flex items-center justify-between'>
                Tên sản phẩm
                {status === true ? (
                    <Button variant='ghost' onClick={() => setStatus(!status)}>
                        <>Hủy</>
                    </Button>
                ) : (
                    <Button variant='ghost' onClick={() => setStatus(!status)}>
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Chỉnh sửa
                        </>
                    </Button>
                )}
            </div>
            {!status && <p className='text-sm mt-2'>{data?.name}</p>}
            {status && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                        <FormField
                            name='name'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder='Tên sản phẩm' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='mt-3'>
                            Lưu
                        </Button>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default FormName