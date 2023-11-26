import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { UserQueryMuition } from "@/hooks/UserQueryMuition"
import { IUsers } from "@/common/users"
import { SubmitHandler } from "react-hook-form"


const SignUP = () => {
    const { form, onSubmit } = UserQueryMuition({
        action: "SIGNUP",
        onSuccess() {
            toast({
                title: "Success",
                description: "Đăng ký thành công",
                variant: "add"
            })
            form.reset({
                name: "",
                email: "",
                password: "",
                passwordConfirm: ""

            })
        }
    })
    const onhandlerSubmit: SubmitHandler<IUsers> = (value: IUsers) => {
        const user = {
            name: value.name,
            email: value.email,
            password: value.password,
            role: value.role
        }
        onSubmit(user)
    }
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Register!</h1>

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
                                    <Input placeholder="Tên tài khoản" {...field} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password Confirm</FormLabel>
                                <FormControl>
                                    <Input placeholder="PasswordConfirm" {...field} />
                                </FormControl>

                            </FormItem>
                        )}
                    />
                    <Button variant="update" type="submit">
                        register
                    </Button>
                </form>
            </Form>

        </div>
    )
}

export default SignUP