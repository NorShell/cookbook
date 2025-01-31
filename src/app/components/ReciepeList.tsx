import { Submission, SubmittedReciepe } from "./SubmittedReciepe"

const submissions: Submission[] = [
  {
    reciepe: "Pasta",
    pfp: "",
    userName: "Beta"
  },
  {
    reciepe: "Smoked and roasted Beef",
    pfp: "",
    userName: "SMokey"
  },
  {
    reciepe: "Avocado Sushi",
    pfp: "",
    userName: "SMokey"
  },
  {
    reciepe: "Smoked and roasted Beef",
    pfp: "",
    userName: "SMokey"
  }
]
export function ReciepeList() {
  return <ul>
    {submissions.map(s => <SubmittedReciepe key={Math.random()} subsmission={s} />)}
  </ul>
}
