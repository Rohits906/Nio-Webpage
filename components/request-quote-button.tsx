"use client"

import { Button } from "@/components/ui/button"

export function RequestQuoteButton() {
  return (
    <Button 
      size="lg" 
      onClick={() => window.location.href = 'mailto:info@nioequipment.com'}
    >
      Request Quote
    </Button>
  )
}