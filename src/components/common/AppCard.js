import React from "react"
import { Link } from "react-router-dom"

export const AppCard = ({
  title,
  content,
  linkText,
  linkURL,
  borderColor,
  buttonTextColor,
  tag,
  image,
}) => {
  return (
    <div
      className={
        "flex-initial mx-4 md:mx-1 max-w-lg md:max-w-md " +
        "bg-white rounded-sm shadow-lg " +
        `border-t-4 ${borderColor} ` +
        "group hover:shadow-2xl transition-shadow duration-200 " +
        "mb-16 "
      }
      style={{ flex: "1 1", minWidth: "380px" }}
    >
      <Link to={linkURL} className="block relative min-h-full">
        <div
          className={`app-card-image text-lg pl-10 pt-8 pb-10 lg:pb-20 text-white bg-cover relative`}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundPosition: "right top",
          }}
        >
          <p
            className={`inline-block z-10 uppercase font-bold text-sm tracking-widest`}
          >
            {tag}
          </p>
          <h2
            className={`z-10 text-left text-4xl mt-8 mb-3 font-light tracking-wide`}
          >
            {title}
          </h2>
        </div>

        <p
          className="text-lg p-8 py-4 mb-12 flex items-center "
          style={{}}
        >
          {content}
        </p>

        <div
          className={
            `${buttonTextColor} border-t-2 ${borderColor} ` +
            ` w-full px-8 py-5 text-white leading-none flex items-center` +
            " uppercase font-bold text-sm tracking-widest absolute bottom-0"
          }
        >
          {linkText}
          <i
            className={
              "fas fa-arrow-right leading-none text-md " +
              "opacity-0 group-hover:opacity-100 " +
              "transform translate-x-0 group-hover:translate-x-3 transition-all"
            }
          />
        </div>
      </Link>
    </div>
  )
}
