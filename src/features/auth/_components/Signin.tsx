import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, Form, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { UserQueryMuition } from "@/hooks/UserQueryMuition"
import { IUsersSignIn } from "@/common/users"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"


const SignIN = () => {
    const navigate = useNavigate()
    const { formSignIN, onSubmit } = UserQueryMuition({
        action: "SIGNIN",
        onSuccess() {
            toast({
                title: "Success",
                description: "Đăng nhập thành công",
                variant: "add"
            })
            formSignIN.reset()
            setTimeout(() => navigate('/'))
        },
    })
    const onhandlerSubmit: SubmitHandler<IUsersSignIn> = (value: IUsersSignIn) => {
        onSubmit(value)
    }
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Log in!</h1>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>
            <Form {...formSignIN}>
                <form action="" onSubmit={formSignIN.handleSubmit(onhandlerSubmit)} className="space-y-4">

                    <FormField
                        control={formSignIN.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={formSignIN.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button variant="update" type="submit">
                        Login
                    </Button>
                </form>
            </Form>

        </div>
    )
}

export default SignIN