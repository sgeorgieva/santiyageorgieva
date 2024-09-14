import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div id="globalLoader">
      <ClipLoader color="#ece7e1" loading size={55} speedMultiplier={0.35} />
    </div>
  )
}