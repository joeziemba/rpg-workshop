import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import "./Accordion.scss"

type AccordionProps = {
  children: React.ReactNode
  open?: boolean
  title: string
}

export const Accordion = ({ children, open, title }: AccordionProps) => {
  const [isOpen, setOpen] = useState(open)
  const toggleOpen = () => setOpen(!isOpen)

  return (
    <div className="accordion bg-white border shadow-md">
      <button
        id={`accordion-` + title.replace(" ", "-").toLowerCase()}
        onClick={toggleOpen}
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
        <div
          data-testid="accordion__inner"
          className="accordion__inner"
          id={`accordion-content-` + title.replace(" ", "-").toLowerCase()}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}
