import React from "react"
import { Link } from "react-router-dom"

// const AppCard = ({ title, content, linkText, linkURL, color, tag }) => {
//   return (
//     <div
//       className={
//         "max-w-md bg-white rounded-sm shadow-lg overflow-hidden " +
//         `border-t-4 border-${color}-900 ` +
//         "group hover:shadow-2xl transition-shadow duration-200 " +
//         "mb-16 "
//       }
//     >
//       <Link to={linkURL}>
//         <div className="p-7">
//           <p className={`uppercase text-${color}-900 font-black text-sm`}>
//             {tag}
//           </p>
//           <h2
//             className={`text-left text-3xl mt-4 mb-3 font-medium text-gray-600`}
//           >
//             {title}
//           </h2>
//           <p className="text-center md:text-left">{content}</p>
//         </div>
//         <div
//           className={
//             "relative tracking-wider uppercase w-full " +
//             `text-lg p-4 pl-7 bg-${color}-900 text-white `
//           }
//         >
//           {linkText}
//           <i
//             className={
//               "fas fa-long-arrow-alt-right " +
//               "opacity-0 " +
//               "group-hover:opacity-100 " +
//               "transform translate-x-0 group-hover:translate-x-3 transition-all"
//             }
//           />
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default AppCard

const AppCard = ({
  title,
  content,
  linkText,
  linkURL,
  color,
  tag,
  image,
}) => {
  return (
    <div
      className={
        "flex-initial mx-4 md:mx-1 max-w-lg md:max-w-md " +
        "bg-white rounded-sm shadow-lg " +
        `border-t-4 border-${color} ` +
        "group hover:shadow-2xl transition-shadow duration-200 " +
        "mb-16 "
      }
      style={{ flex: "1 1", minWidth:'380px' }}
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
          {/* <div className="z-0 opacity-50 w-full h-full bg-navy-900">k</div> */}
        </div>

        <p
          className="text-lg p-8 py-4 mb-12 flex items-center "
          style={{}}
        >
          {content}
        </p>

        <div
          className={
            `text-${color} border-t-2 border-${color} ` +
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

export default AppCard
