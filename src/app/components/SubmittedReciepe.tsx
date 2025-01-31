
export interface Submission {
  reciepe: string,
  pfp: string,
  userName: string
}

interface Props {
  subsmission: Submission
}

export function SubmittedReciepe({ subsmission }: Props) {
  return <li
    className="flex items-center justify-start w-full gap-5 p-5 "
  >
    <span className="w-10 h-10 border rounded-full " ></span>
    <div className=" flex flex-col" >
      <span className="text-xl" >{subsmission.reciepe}</span>
      <span className="text-gray-600">by {subsmission.userName}</span>
    </div>
  </li>
}
