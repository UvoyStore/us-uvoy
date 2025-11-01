"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

interface PopularItem {
  id: string
  name: string
  price: number
  rating: number
  image: string
}

interface PopularCollectionProps {
  items: PopularItem[]
  onAddToCart: (item: PopularItem) => void
}

export function PopularCollection({ items, onAddToCart }: PopularCollectionProps) {
  return (
    <div>
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">Popular Collection</h3>
        <Button variant="link" className="text-xs md:text-base">
          See All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  )
}
