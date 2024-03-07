import { Dot } from "lucide-react";
import imgTeste from "../../assets/igPostImg.jpg";

import Separator from "../Separator/Separator";
import XHeader from "./components/XHeader/XHeader";
import XFooter from "./components/XFooter/XFooter";
export default function XVisualizer() {
  return (
    <div className="border-2 border-white w-[600px]  bg-white rounded-lg">
      {/* X Header */}
      <XHeader />
      {/* X Image Wrapper */}
      <div className="w-full p-4 flex flex-col gap-4">
        <img src={imgTeste} alt="img" className="rounded-xl w-full h-[400px]" />
        <div className="flex items-center">
          <span className="text-gray-500">00:00 PM</span>
          <Dot className="text-black" size={24} />
          <span className="text-gray-500">Oct, 14, 2024</span>
          <Dot className="text-black" size={24} />
          <span className="text-gray-500">
            <b className="text-black">200,1K</b> Views
          </span>
        </div>
        <Separator />
      </div>
      {/* X Footer */}
      <XFooter />
    </div>
  );
}
