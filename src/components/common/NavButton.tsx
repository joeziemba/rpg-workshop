import React, { MouseEventHandler } from "react"
import cn from "classnames"

type NavButtonProps = {
  children?: React.ReactNode
  className?: string
  color: string
  id: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const NavButton = ({
  children,
  className = "",
  color = "",
  id,
  onClick,
}: NavButtonProps) => {
  const classes = cn("px-4 py-2 rounded-sm transition-colors text-white", {
    "bg-red-900": color === "red",
    "hover:bg-red-900": color === "red",
    "bg-navy-900": color === "navy",
    "hover:bg-navy-900": color === "navy",
    [className]: className,
  })
  return (
    <button id={id} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
