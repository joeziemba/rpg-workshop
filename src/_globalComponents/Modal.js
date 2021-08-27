import React, { useEffect } from "react"
import FocusTrap from "focus-trap-react"

const Modal = ({ show, large, closeFunction, title, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [show])

  if (!show) return null

  return (
    <div className="c-modal">
      <FocusTrap>
        <div
          className={`c-modal__window ${
            large ? "c-modal__window--large" : ""
          }`}
        >
          {title ? <h2 className="c-modal__header">{title}</h2> : null}
          <button
            className="c-modal__close"
            onClick={closeFunction}
            aria-label="Close Modal"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="c-modal__scroller">{children}</div>
        </div>
      </FocusTrap>
    </div>
  )
}

export default Modal
