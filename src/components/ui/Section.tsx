import * as React from "react"
import { cn } from "../../lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden", className)}
        {...props}
      >
        <div className={cn("container mx-auto px-4 sm:px-6 md:px-8 relative z-10", containerClassName)}>
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
