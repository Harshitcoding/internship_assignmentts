import Image from "next/image";
import FitnessBanner from "./component/FitnessBanner";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-10 md:p-28">
    <FitnessBanner/>
    </div>
  );
}
