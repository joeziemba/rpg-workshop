import React, { useEffect, useState } from "react"
import { Modal } from "../../_globalComponents"

export const RedesignAnnounceModal = () => {
  const [show, setShow] = useState(false)

  const onClose = () => {
    // localStorage.setItem("1.1-modal", "hide")
    setShow(false)
  }

  useEffect(() => {
    if (localStorage.getItem("redesign-modal") !== "hide") setShow(true)
  }, [])
  return (
    <Modal
      large
      show={show}
      title=""
      closeFunction={onClose}
      color="red-900"
    >
      <div className="p-8 py-">
        <h3 className="text-3xl font-bold mb-4">New Design Upgrades!</h3>
        <p className="text-lg leading-relaxed mb-4">
          We&apos;re excited to announce that RPGWorkshop has a new look!
          You&apos;ll notice visual changes big and small across the site,
          but everything still works the same (for now anyway).
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The most exciting part of these changes is that under the hood,
          we migrated to a whole new design library. This change will allow
          us to make future changes and feature additions much faster.
        </p>
        <h3 className="text-3xl font-bold mb-4">Join Us On Twitter</h3>
        <p className="text-lg leading-relaxed mb-4">
          Follow our new Twitter account to get updates on future progress,
          give feedback on the app or request features. You can also DM us
          to report any bugs that need squashing in the apps.
        </p>
        <a
          href="https://twitter.com/rpgworkshop_"
          rel="noreferrer"
          target="_blank"
          className="inline-block text-white bg-red-900 py-2 px-4 font-bold hover:bg-red-800 transition-colors"
        >
          <i className="fab fa-twitter mr-2" />@rpgworkshop_
        </a>
      </div>
    </Modal>
  )
}
