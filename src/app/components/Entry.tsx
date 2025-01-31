import { entriesTable } from "@/db/schema"
import Image from "next/image"

const colors = [
  "gold",
  "neon",
  "orange",
  "pink",
  "purple",
  "red",
  "salmon",
  "marine",
  "babyblue"
]

function getRandomColor(): string {

  const index = Math.floor(Math.random() * colors.length)

  return `/${colors[index]}.svg`

}

interface Props {
  entry: typeof entriesTable.$inferSelect
}

export function Entry({ entry }: Props) {
  return <li
    className="flex items-center justify-start w-full gap-5 p-5 "
  >
    <Image
      width={15}
      height={15}
      src={getRandomColor()}
      alt="svg"
      className="w-14 h-14 " />
    <div className=" flex flex-col" >
      <span className="text-xl" >{entry.name}</span>
      <span className="text-gray-600">by {entry.author}</span>
    </div>
  </li>
}
