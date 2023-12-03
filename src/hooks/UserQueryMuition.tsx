import { Signin, Signup } from "@/services/users"
import { IUsers, IUsersSignIn, SchemaUsers, SchemaUsersSignIN } from "@/common/users"
import { joiResolver } from "@hookform/resolvers/joi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "@/store/users"

type UserQuery = {
    action: "SIGNIN" | "SIGNUP",
    defaultValue?: IUsersSignIn,
    onSuccess?: () => void,
    onError?: () => void
}
export const UserQueryMuition = ({ action, onSuccess }: UserQuery) => {
    const useQuery = useQueryClient()
    const { setUser } = useContext(UserContext)

    const { mutate, ...rest } = useMutation({
        mutationFn: async (user: any) => {
            switch (action) {
                case "SIGNIN":
                    return Signin(user)
                case "SIGNUP":
                    return Signup(user)
                default:
                    return null
            }
        },
        onSuccess: (data: any) => {
            setUser(data)
            useQuery.invalidateQueries({ queryKey: ["USER_KEYS"] })
            onSuccess && onSuccess()
        },
        onError: (err: any) => {
            alert((err as Error).message)
        }
    })
    const form = useForm<IUsers>({
        resolver: joiResolver(SchemaUsers),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            role: 'member'
        }
    })
    const formSignIN = useForm<IUsersSignIn>({
        resolver: joiResolver(SchemaUsersSignIN),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const onSubmit = (value: any) => {
        mutate(value)
    }
    return {
        form,
        onSubmit,
        formSignIN,
        ...rest
    }
}