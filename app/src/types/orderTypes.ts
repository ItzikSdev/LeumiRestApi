export interface IProductOrder {
    productId: number;
    quantity: number;
}
export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }   
}

export interface IOrder {
    id: string
    products: IProductOrder[]
    status: 'pending' | 'approved' | 'rejected'
}
