"use client"

import { useCallback, useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { useSidebar } from "@/contexts/sidebar-context"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  quantity: number
  image: string
}

export default function CartPage() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
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

  const calculateTotal = useCallback((items: CartItem[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [])

  const cartTotal = calculateTotal(cartItems)

  return (
    <div className="flex h-screen bg-[#fcfdfd] flex-col md:flex-row">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <Header title="My Cart" subtitle="Review and manage your items" />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.length === 0 ? (
                <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
                  <CardContent className="py-12 text-center">
                    <p className="text-sm md:text-base text-gray-500">Your cart is empty</p>
                  </CardContent>
                </Card>
              ) : (
                cartItems.map((item) => (
                  <Card key={item.id} className="border-0 rounded-[16px] md:rounded-[24px] bg-white">
                    <CardContent className="flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] rounded-2xl bg-[#e0e5ce] object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <h4 className="text-base md:text-lg font-semibold">{item.name}</h4>
                            <p className="mt-1 text-xs md:text-sm text-[#338838]">SIZE {item.size}</p>
                            <p className="mt-2 text-lg md:text-xl font-semibold">$ {item.price}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -item.quantity)}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Button>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="flex items-center gap-3 md:gap-4 rounded-full bg-[#f7f7f7] px-3 md:px-4 py-1">
                            <button
                              className="text-gray-500 hover:text-gray-700 text-sm"
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              -
                            </button>
                            <span className="w-6 md:w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              className="text-gray-500 hover:text-gray-700 text-sm"
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-white md:sticky md:top-8">
                <CardContent className="space-y-4 p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold">Order Summary</h3>
                  <div className="flex items-center justify-between text-sm md:text-base">
                    <p className="text-gray-600">Sub Total</p>
                    <p className="font-semibold">$ {cartTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm md:text-base">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-[#338838]">FREE</p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-base md:text-lg font-semibold">
                    <p>Total</p>
                    <p>$ {cartTotal.toFixed(2)}</p>
                  </div>
                  <Button className="w-full rounded-2xl bg-[#415444] py-4 md:py-6 text-sm md:text-lg font-semibold hover:bg-[#415444]/90">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
