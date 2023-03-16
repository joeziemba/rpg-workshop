import React, { useEffect } from "react"
import FocusTrap from "focus-trap-react"
import cn from "classnames"

type ModalProps = {
  children: React.ReactNode
  closeFunction: () => void
  color?: string
  large?: boolean
  show: boolean
  title: string
}

export const Modal = ({
  children,
  color = "bg-slate-800",
  closeFunction,
  large,
  show,
  title,
}: ModalProps) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      // https://codepedia.info/detect-browser-in-javascript
      const userAgent = navigator.userAgent
      if (userAgent.match(/firefox|fxios/i)) {
        document.body.style.overflow = "auto"
      } else {
        document.body.style.overflow = "overlay"
      }
    }
  }, [show])

  if (!show) return null

  const closeModal = () => {
    document.body.style.overflow = "overlay"
    closeFunction()
  }

  const overlayClasses = cn(
    "bg-black",
    "bg-opacity-50",
    "rounded-md",
    "fixed",
    "inset-0",
    "z-50",
    "flex",
    "items-center"
  )

  const containerClasses = cn(
    "bg-white",
    "max-h-full",
    "max-h-3/4",
    "mx-auto",
    "max-w-3xl",
    "shadow-2xl",
    "w-11/12",
    { "md:w-9/12": large, "md:w-6/12": !large }
  )

  return (
    <div className={overlayClasses}>
      <FocusTrap>
        <div className={containerClasses}>
          <h2
            className={`pl-8 text-white text-2xl flex justify-between items-center ${color}`}
          >
            <span>{title}</span>
            <button
              className="py-2 px-8"
              onClick={closeModal}
              aria-label="Close Modal"
              id="close-modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </h2>
          <div
            style={{ maxHeight: "calc(100vh - 80px)" }}
            className="scroller"
          >
            {children}
          </div>
        </div>
      </FocusTrap>
    </div>
  )
}
