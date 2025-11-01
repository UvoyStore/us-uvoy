"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  rating: number
  image: string
  onAddToCart: (item: ProductCardProps) => void
}

export function ProductCard({ id, name, price, rating, image, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group border-0 rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#e0e5ce] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="relative p-0">
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
        <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 transform scale-95 transition-all group-hover:opacity-100 group-hover:scale-100 bg-white text-black hover:bg-white/90 hidden md:flex">
          Quick View
        </Button>
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="h-[180px] md:h-[280px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
        <div>
          <h4 className="mb-1 line-clamp-1 text-base md:text-lg font-semibold">{name}</h4>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-3 w-3 md:h-4 md:w-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-600">({rating})</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
          <p className="text-lg md:text-xl font-semibold text-[#338838]">$ {price}</p>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full bg-transparent transition-colors hover:bg-[#415444] hover:text-white text-sm w-full md:w-auto"
            onClick={() => onAddToCart({ id, name, price, rating, image, onAddToCart })}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
