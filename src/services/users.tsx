
import { AxiosResponse } from "axios";
import { intrences } from "@/core/api";
import { IUsers, IUsersSignIn } from "@/common/users";


export const GetAllUser = async () => {
    try {
        const response: AxiosResponse<IUsers[]> = await intrences.get('/users')
        return response.data || []
    } catch (error: any) {
        console.log((error as Error).message);
    }
}

export const Signup = async (user: IUsers) => {
    try {
        const response: AxiosResponse<IUsers> = await intrences.post('/register', user)
        return response.data || []
    } catch (error: any) {
        console.log((error as Error).message);
    }
}
export const Signin = async (user: IUsersSignIn) => {
    try {
        const response: AxiosResponse<IUsersSignIn> = await intrences.post('/login', user)
        console.log(response
            .data);

        return response.data || []
    } catch (error: any) {
        console.log((error as Error).message);
    }
}