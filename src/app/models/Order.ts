export class Order{
    product: string;
    price: number;
    quantity: number;
    side: string;
    customerId:any
}

export class OrderResponse{
    data: {
        product: string,
        quantity: number,
        price: number,
        side: string,
        customerId: number
      }
      message: string
        url: string
      status: number
}

export class CustomerOrderResponse{
    data:[  {
        id: number,
        exchange_order_id: string,
        quantity: number,
        price: number,
        side: string,
        product: string,
        is_valid: boolean,
        is_pending: boolean,
        is_success: any
      }]
      message: string
        url: string
      status: number
}