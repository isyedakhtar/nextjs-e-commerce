import React from "react";
import { catagoriesLinksGroup } from "../utils/catagoriesLinksGroup";
import Link from "next/link";
export default function CollapsableCategoryBar() {
  return (
    <>
      <nav
        className={`
      w-full
      absolute
      top-[56px]
      left-0
      border
      border-[#f0f0f0]
      transition-all
      duration-1000
      block
      overflow-hidden
      md:flex
      md:flex-col
      `}
      >
        <ul className="flex flex-col ">
          {catagoriesLinksGroup.map((category, index) => (
            <li
              className={`
            bg-gray
            p-2
            uppercase
            flex
            gap-2
            items-center
          text-textGray
          hover:text-base-color
          border-b-[#f0f0f0]
            border-b-[2px]
            `}
              key={index}
            >
              <span className="m-0 p-0 text-xl h-12 flex items-center ">
                {category.icon}
              </span>
              <Link href={`/category/${category.id}`}>{category.titlesEn}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
