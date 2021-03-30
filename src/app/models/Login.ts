export class LoginDetails{
    email:string
    password:string
}


export class LoginResponse{
    data: {
        jwt:string
        id: number,
        account_balance:any,
        email:string
      }
      message: string
      url?: string
      status: number
}

export class RegisterResponse{
    data: {
        id: number,
        first_name: number,
        last_name: string,
        email: string,
        password?: string,
        account_balance?: number
      }
      message: string
      url: string
      status: any
}