import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function PromotionalCards() {
  return (
    <div className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* Best Offers Card */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-[#e0e5ce]">
        <CardContent className="p-4 md:p-6">
          <p className="mb-2 text-xs md:text-sm font-medium uppercase text-[#338838]">BEST OFFERS</p>
          <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-semibold">Custom Design</h3>
          <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600">
            Design your product according to your passion
          </p>
          <Button className="bg-[#415444] hover:bg-[#415444]/90 text-sm md:text-base">See More</Button>
        </CardContent>
      </Card>

      {/* Flash Sale Card */}
      <Card className="border-0 rounded-[16px] md:rounded-[24px] bg-[#e7ddd1]">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4 md:gap-0">
          <div>
            <h3 className="mb-2 md:mb-4 text-2xl md:text-3xl font-semibold">Flash Sale ✨</h3>
            <p className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold">75% OFF</p>
            <Button className="bg-[#415444] hover:bg-[#415444]/90 text-sm md:text-base">Buy Now!</Button>
          </div>
          <Image
            src="/images/design-mode/Index,%20Vanderbrand.jpg.jpeg"
            alt="Square One District Tote"
            width={200}
            height={200}
            className="object-contain w-32 h-32 md:w-[200px] md:h-[200px]"
          />
        </CardContent>
      </Card>
    </div>
  )
}
