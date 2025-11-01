"use client"

import { useCallback, useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { useSidebar } from "@/contexts/sidebar-context"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { PromotionalCards } from "@/components/dashboard/promotional-cards"
import { PopularCollection } from "@/components/dashboard/popular-collection"
import { CartSidebar } from "@/components/cart/cart-sidebar"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  quantity: number
  image: string
}

const POPULAR_ITEMS = [
  {
    id: "1",
    name: "Monocle Canvas Tote Bag",
    price: 213.99,
    rating: 4.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Best%20Media%20Tote%20Bags,%20Ranked.jpg-z2O2nGPSTrjey8xEM1cc5aTI2ggjXE.jpeg",
  },
  {
    id: "2",
    name: "Square One District Tote",
    price: 189.99,
    rating: 4.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Index,%20Vanderbrand.jpg-Fv7HHkBaQgZe7HG3hbz5aojPoFRIuo.jpeg",
  },
  {
    id: "3",
    name: "Sporty & Rich Canvas Tote",
    price: 221.99,
    rating: 4.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(2).jpg-zbeT25jMphcVf4DmpAlTVsGALg88Zn.jpeg",
  },
]

export default function DashboardPage() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Monocle Canvas Tote Bag",
      price: 213.99,
      size: "L",
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Best%20Media%20Tote%20Bags,%20Ranked.jpg-z2O2nGPSTrjey8xEM1cc5aTI2ggjXE.jpeg",
    },
    {
      id: "2",
      name: "Square One District Tote",
      price: 189.99,
      size: "M",
      quantity: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Index,%20Vanderbrand.jpg-Fv7HHkBaQgZe7HG3hbz5aojPoFRIuo.jpeg",
    },
  ])

  const updateQuantity = useCallback((itemId: string, change: number) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === itemId) {
              const newQuantity = Math.max(0, item.quantity + change)
              if (newQuantity === 0) {
                toast({
                  title: "Item removed",
                  description: `${item.name} has been removed from your cart.`,
                })
                return null
              }
              return { ...item, quantity: newQuantity }
            }
            return item
          })
          .filter(Boolean) as CartItem[],
    )
  }, [])

  const addToCart = useCallback((item: (typeof POPULAR_ITEMS)[0]) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      toast({
        title: "Item added to cart",
        description: `${item.name} has been added to your cart.`,
      })
      return [...prevItems, { ...item, quantity: 1, size: "M" }]
    })
  }, [])

  return (
    <div className="flex h-screen bg-[#fcfdfd] flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <Header isCartOpen={isCartOpen} onToggleCart={() => setIsCartOpen(!isCartOpen)} />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 overflow-y-auto safe-area-inset-bottom">
          <PromotionalCards />
          <PopularCollection items={POPULAR_ITEMS} onAddToCart={addToCart} />
        </main>
      </div>

      {isCartOpen && <CartSidebar items={cartItems} onUpdateQuantity={updateQuantity} />}
    </div>
  )
}
