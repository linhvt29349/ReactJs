import { IProducts } from "../../../common/products"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { usseQueryMuition } from "@/hooks/useQueryMution"
import { useToast } from "@/components/ui/use-toast"



const AddPage = () => {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onFormSubmit } = usseQueryMuition({
        action: "ADD",
        onSuccess() {
            toast({
                title: "Success",
                description: "Added successfully",
                duration: 3000,
                variant: "add",
            })
            form.reset()
        }
    })

    const onhandlerSubmit: SubmitHandler<IProducts> = async (value: any) => {
        onFormSubmit(value)
        navigate('/admin')
    }
    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Add product!</h1>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onhandlerSubmit)} className="space-y-4">
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
                        Add
                    </Button>
                </form>
            </Form>

        </div>
    )
}

export default AddPage