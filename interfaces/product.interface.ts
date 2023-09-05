export interface ProductModel {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  description: string
  link: string
  price: number
  credit: number
  oldPrice: number
  characteristics: ProductCharacteristic[]
  advantages: string
  initialRating: number
  createdAt: Date
  updatedAt: Date
  __v: number
  image:string
  reviews: ReviewModel[]
  reviewCount: number
  reviewAvg?: number
}

export interface ProductCharacteristic {
  name: string
  value: string
}

export interface ReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: string
}
