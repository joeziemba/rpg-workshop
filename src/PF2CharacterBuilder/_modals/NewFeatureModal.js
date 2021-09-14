import React, { useEffect, useState } from "react"
import { Modal } from "../../_globalComponents"

const NewFeatureModal = () => {
  const [show, setShow] = useState(false)

  const onClose = () => {
    localStorage.setItem("1.1-modal", "hide")
    setShow(false)
  }

  useEffect(() => {
    if (localStorage.getItem("1.1-modal") !== "hide") setShow(true)
  }, [])
  return (
    <Modal
      show={false}
      title="Version 1.1 is here!"
      closeFunction={onClose}
    >
      <p style={{ marginBottom: ".5rem", marginTop: ".5rem" }}>
        Excited to announce some long overdue updates have finally been
        made to the PF2 Character Builder!
      </p>
      <ul>
        <li>
          <b>New APG Classes:</b> Investigator, Oracle, Swashbuckler and
          Witch
        </li>
        <li>
          <b>Feats</b> from every published source
        </li>
        <li>Improvements to skill and ability assignments</li>
        <li>
          UI enhancements for stats, proficiencies and feat selection
        </li>
      </ul>
      <p style={{ marginBottom: ".5rem" }}>
        More features will be coming soon, including:
      </p>
      <ul>
        <li>Additional Backgrounds</li>
        <li>Additional Ancestries</li>
        <li>Deleting saved characters</li>
      </ul>
      <p>
        Feedback and bug reports are welcome and can be sent to{" "}
        <a href="mailto:joeziemba.dev@gmail.com">
          joeziemba.dev@gmail.com
        </a>
      </p>
    </Modal>
  )
}

export default NewFeatureModal
