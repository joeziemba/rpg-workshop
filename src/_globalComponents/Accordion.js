import React, { useState } from "react";

const Accordion = ({ children, open, title }) => {
  const [isOpen, setOpen] = useState(open);

  return (
    <div className="accordion">
      <h3
        onClick={() => setOpen(!isOpen)}
        className="accordion__button form-header"
      >
        {title}
      </h3>

      {isOpen && (
        <div data-testid="accordion__inner" className="accordion__inner">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
