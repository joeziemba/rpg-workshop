import React, { ChangeEvent, useLayoutEffect, useState } from "react"
import { Modal } from "components"
import cn from "classnames"

export const RedesignAnnounceModal = () => {
  const [show, setShow] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  const onClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("slateesign-modal", "dontShowAgain")
    }
    setShow(false)
  }

  const clickDontShow = (e: ChangeEvent<HTMLInputElement>) => {
    setDontShowAgain(e.target.checked)
  }

  useLayoutEffect(() => {
    if (localStorage.getItem("slateesign-modal") !== "dontShowAgain")
      setShow(true)
  }, [])

  const headingClasses = cn("text-2xl md:text-3xl mb-4")

  return (
    <Modal large show={show} title="" closeFunction={onClose}>
      <div className="text-base md:text-lg leading-normal px-8 py-6 md:px-16 md:py-8">
        <h3 className={headingClasses}>RPGWorkshop has a new look!</h3>
        <p className="mb-5">
          Much of the site has been refreshed with a new style, and there
          is still more to come. Under the hood, we migrated to a new
          design library. This change will allow us to make future changes
          and feature additions much faster.
        </p>
        <h3 className={headingClasses}>Join Us On Twitter</h3>
        <p className="mb-3">
          Follow our new Twitter account to get updates on future progress,
          give feedback on the app or request features. You can also DM us
          to report any bugs that need squashing.
        </p>
        <a
          href="https://twitter.com/rpgworkshop_"
          rel="noreferrer"
          target="_blank"
          className={
            "w-full md:w-auto text-center order-0 " +
            "rounded-sm inline-block " +
            "border-2 border-slate-900 " +
            "font-bold text-white " +
            "bg-slate-900 " +
            "hover:bg-slate-700 hover:border-slate-700 transition-all " +
            "py-2 md:py-1 px-4 "
          }
        >
          <i className="fab fa-twitter mr-2" />
          @rpgworkshop_
        </a>
        <div className="mt-5 flex flex-wrap flex-row-reverse text-base items-center">
          <span className="mt-5 md:m-0 order-1 md:mb-0 md:mr-8 flex-full md:flex-none text-right">
            <label className="text-gray-500 hover:pointer flex flex-row-reverse items-center">
              <input
                onChange={clickDontShow}
                type="checkbox"
                className="ml-3 h-6 w-6"
                checked={dontShowAgain}
              />
              Don&apos;t show this again
            </label>
          </span>
          <button
            className={
              "flex-full md:flex-none order-0 " +
              "rounded-sm inline-block " +
              "font-bold text-slate-500 " +
              "border-2 border-slate-500 " +
              "hover:text-white hover:bg-slate-800 hover:border-slate-800 transition-all " +
              "py-2 md:py-1 px-4 "
            }
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
