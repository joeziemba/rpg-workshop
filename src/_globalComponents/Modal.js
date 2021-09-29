import React, { useEffect } from "react"
import FocusTrap from "focus-trap-react"
import cn from "classnames"

const Modal = ({
  show,
  large,
  color = "navy-700",
  closeFunction,
  title,
  children,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [show])

  if (!show) return null

  const containerClasses = cn(
    "bg-white h-3/4 mx-auto shadow-lg overflow-hidden w-11/12",
    { "md:w-9/12": large, "md:w-6/12": !large }
  )

  return (
    <div className="bg-black bg-opacity-60 rounded-md fixed inset-0 z-50 flex items-center">
      <FocusTrap>
        <div className={containerClasses}>
          <h2
            className={`pl-8 text-white text-2xl flex justify-between items-center bg-${color}`}
          >
            <span>{title}</span>
            <button
              className="py-4 px-8"
              onClick={closeFunction}
              aria-label="Close Modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </h2>
          <div className="scroller h-full pb-14">{children}</div>
        </div>
      </FocusTrap>
    </div>
  )
}

export default Modal
