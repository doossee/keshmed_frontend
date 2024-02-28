export interface IProduct {
    _id?: string
    id: number
    title: string
    title_uz?: string
    title_ru?: string
    title_en?: string
    slug: string
    description: string
    description_uz?: string
    description_ru?: string
    description_en?: string

    condition: "new" | "openbox" | "refurbished" | "used"

    warranty: number
    year: number
    shipping_from: number
    characteristics: ICharacteristic[]
    for_sale: boolean
    brand: IBrand
    model: string
    category: ICategory | any
    category_1?: any
    category_2?: any
    category_3?: any
    price: number
    images: IImage[]
    sales_areas: number[]
    is_part: boolean
    
    created_at?: string
    updated_at?: string
    
    createdAt?: string
    updatedAt?: string
}

export interface IProductForm {
    id?: number
    title_uz?: string
    title_ru?: string
    title_en?: string
    description_uz?: string
    description_ru?: string
    description_en?: string

    images?: IImage[]

    condition: "new" | "openbox" | "refurbished" | "used"

    characteristics: ICharacteristic[]
    warranty: number | null
    year: number | null
    shipping_from: number | null
    for_sale: boolean
    brand: number | null
    model: string
    category: number | null
    category_1?: any
    category_2?: any
    category_3?: any
    price: number | null
    sales_areas: number[] | null
    is_part?: boolean
}

export interface IBrand {
    id: number
    _id?: string
    name: string
    country?: number
    image: string
    medium_square_crop: string
    thumbnail: string
    description?: string
    description_uz?: string
    description_ru?: string
    description_en?: string
}

export interface IBrandForm {
    id?: number
    name: string
    country?: number | null
    image?: string
    description?: string
    description_uz?: string
    description_ru?: string
    description_en?: string
}


export interface ICategory {
    _id?: string
    id?: number
    title?: string
    name_uz?: string
    name_ru?: string
    name_en?: string
    parent: number | null

    children: ICategory[]
}

export interface IImage {
    id: number
    image: string
    thumbnail: string
    product: IProduct | number
}

export interface ICharacteristic {
    title: {
        uz: string,
        ru: string,
        en: string,
    },
    value: {
        uz: string,
        ru: string,
        en: string,
    }
}

export interface IOrder {
    id?: number
    _id?: string
    product: IProduct & number
    country?: number | null
    first_name: string
    last_name: string
    phone: string
    message: string
    checked: boolean

    created_at?: string
    updated_at?: string
    
    createdAt?: string
    updatedAt?: string
}