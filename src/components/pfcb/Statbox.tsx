import React from "react"

type StatboxProps = {
  className?: string
  children?: React.ReactNode
  large?: boolean
  secondary?: boolean
  stat: string | number
  title: string
}

const Statbox = ({
  className,
  children,
  large,
  secondary,
  stat,
  title,
}: StatboxProps) => {
  let classes = "c-statbox"
  if (large) classes += " c-statbox--large"
  if (secondary) classes += " c-statbox--secondary"
  classes += " " + className

  const idRoot = title?.toLowerCase()

  return (
    <div className={classes}>
      {stat !== undefined ? (
        <span className="c-statbox__stat" id={idRoot + "-stat"}>
          {stat}
        </span>
      ) : (
        children
      )}

      <span className="c-statbox__title" id={idRoot + "-title"}>
        {title}
      </span>
    </div>
  )
}

export default Statbox
