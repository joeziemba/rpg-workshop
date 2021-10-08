import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import "./Accordion.scss"

export const Accordion = ({ children, open, title }) => {
  const [isOpen, setOpen] = useState(open)

  return (
    <div className="accordion">
      <button
        onClick={() => setOpen(!isOpen)}
        className="accordion__button"
      >
        {title}
        {isOpen ? (
          <span className={"accordion__arrow fas fa-compress-alt"} />
        ) : (
          <span className={"accordion__arrow fas fa-expand-alt"} />
        )}
      </button>

      <CSSTransition
        appear
        mountOnEnter
        unmountOnExit
        classNames="a-slide"
        in={isOpen}
        timeout={300}
      >
        <div data-testid="accordion__inner" className="accordion__inner">
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}
