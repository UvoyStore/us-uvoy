"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useIsMobile } from "@/components/ui/use-mobile"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  quantity: number
  image: string
}

interface CartSidebarProps {
  items: CartItem[]
  onUpdateQuantity: (itemId: string, change: number) => void
  isOpen?: boolean
  onClose?: () => void
}

export function CartSidebar({ items, onUpdateQuantity, isOpen = true, onClose }: CartSidebarProps) {
  const isMobile = useIsMobile()
  const calculateTotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const cartTotal = calculateTotal(items)

  const CartContent = () => (
    <>
      <div className="flex-grow space-y-6 md:space-y-8 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 md:gap-6 rounded-2xl md:rounded-3xl bg-white p-3 md:p-4 shadow-sm">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={100}
              height={100}
              className="h-20 w-20 md:h-[100px] md:w-[100px] rounded-2xl bg-[#e0e5ce] object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="mb-3 md:mb-4 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-sm md:text-lg font-semibold line-clamp-1">{item.name}</h4>
                  <p className="mt-1 text-xs md:text-sm text-[#338838]">SIZE {item.size}</p>
                  <p className="mt-1 md:mt-2 text-sm md:text-base font-semibold">$ {item.price}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0"
                  onClick={() => onUpdateQuantity(item.id, -item.quantity)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-6 md:h-6"
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
                <div className="flex items-center gap-2 md:gap-4 rounded-full bg-[#f7f7f7] px-3 md:px-4 py-1">
                  <button
                    className="text-gray-500 hover:text-gray-700 text-xs md:text-sm"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    -
                  </button>
                  <span className="w-4 md:w-8 text-center text-xs md:text-sm">{item.quantity}</span>
                  <button
                    className="text-gray-500 hover:text-gray-700 text-xs md:text-sm"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 md:pt-8 space-y-3 md:space-y-4">
        <div className="flex items-center justify-between text-xs md:text-base">
          <p className="text-gray-600">Sub Total</p>
          <p className="font-semibold">$ {cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-xs md:text-base">
          <p className="text-gray-600">Shipping</p>
          <p className="text-[#338838]">FREE</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-sm md:text-lg font-semibold">
          <p>Total</p>
          <p>$ {cartTotal.toFixed(2)}</p>
        </div>
        <Button className="mt-3 md:mt-4 h-12 md:h-14 w-full rounded-2xl bg-[#415444] text-sm md:text-lg font-semibold hover:bg-[#415444]/90">
          Checkout
        </Button>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader>
            <DrawerTitle>My Cart</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4 flex flex-col h-full overflow-hidden">
            <CartContent />
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <aside className="hidden md:flex w-96 flex-col border-l px-6 md:px-8 py-6 md:py-8">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">My Cart</h3>
      </div>
      <CartContent />
    </aside>
  )
}
