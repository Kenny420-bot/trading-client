export class PortfolioResponse {


  data: [
    {
      id: number,
      product: string,
      quantity: number
    },

  ]
  message: string
  url: string
  status: number

}

export class Portfolio {
  data: {
    id: number,
    product: string,
    quantity: number,
    created_at: any,
    updated_at: any
  }
  message: string
  url?: string
  status: number

}

export class PortfolioRequest {
  order_id: any
  customer_id: any
}

export class BalanceRequest {
  account_balance: number
}

export class BalanceResponse {
  data: {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    pssword?: string,
    account_balance: any,
    created_at: any,
    updated_at: any
  }
  message: string
  url?: string
  status: number
}