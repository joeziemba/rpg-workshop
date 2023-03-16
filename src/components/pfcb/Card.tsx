import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  title: string
}

export const Card = ({ children, className, title }: CardProps) => {
  return (
    <div className={"mb-6 bg-white shadow-md mx-3 " + className}>
      <h2 className="bg-navy-600 text-white text-lg px-4 py-2">{title}</h2>
      <div
        className="flex flex-col justify-evenly"
        style={{ minHeight: "260px" }}
      >
        {children}
      </div>
    </div>
  )
}
