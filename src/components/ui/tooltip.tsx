"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>

interface TooltipProps {
  children: React.ReactNode
}

const Tooltip = ({ children }: TooltipProps) => <>{children}</>

interface TooltipTriggerProps {
  children: React.ReactNode
  className?: string
}

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
)
TooltipTrigger.displayName = "TooltipTrigger"

interface TooltipContentProps {
  children: React.ReactNode
  className?: string
}

const TooltipContent = ({ children, className }: TooltipContentProps) => (
  <div className={cn(
    "absolute z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full",
    className
  )}>
    {children}
  </div>
)

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }