import React from "react"

type OpenOrDeleteItemProps = {
  children: React.ReactElement
  deleteFunc: () => void
  id: string
  selectFunc: () => void
}

export const OpenOrDeleteItem = ({
  children,
  deleteFunc,
  id,
  selectFunc,
}: OpenOrDeleteItemProps) => {
  return (
    <li
      className="block w-full group transition-colors flex hover:bg-gray-200"
      key={id}
    >
      <button
        className="text-black text-left flex-1 px-8 py-4 transition-colors"
        onClick={selectFunc}
      >
        {children}
      </button>
      <button
        onClick={deleteFunc}
        className="text-gray-400 flex-initial px-8 hover:bg-red-900 hover:text-white transition-colors"
        title="Delete Character"
      >
        <i className="fas fa-minus-square" />
        <span
          style={{
            display: "block",
            visibility: "hidden",
            maxWidth: "0px",
            maxHeight: "0px",
            overflow: "hidden",
          }}
        >
          Delete
        </span>
      </button>
    </li>
  )
}
