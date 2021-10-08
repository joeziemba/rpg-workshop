import React from "react"

const Statbox = ({
  stat,
  title,
  large,
  className,
  children,
  secondary,
}) => {
  let classes = "c-statbox"
  if (large) classes += " c-statbox--large"
  if (secondary) classes += " c-statbox--secondary"
  classes += " " + className

  let idRoot = title?.toLowerCase()

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
