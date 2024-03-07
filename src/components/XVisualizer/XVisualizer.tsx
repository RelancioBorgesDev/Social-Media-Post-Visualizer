import { PiSealCheckFill } from "react-icons/pi";
import {
  Bookmark,
  Dot,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat,
  Share2,
} from "lucide-react";
import imgTeste from "./assets/igPostImg.jpg";

import Avatar from "../Avatar/Avatar";
import Separator from "../Separator/Separator";
export default function XVisualizer() {
  return (
    <div className="border-2 border-white w-[600px]  bg-white rounded-lg">
      {/* X Header */}
      <header className="bg-white flex flex-col text-black items-center justify-between px-4 py-2 rounded-t-lg">
        <section className="w-full flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <Avatar social_media="" />
            <div className="flex flex-col ">
              <span className="flex gap-2 items-center">
                <h1 className="text-xl font-bold">Relnc</h1>
                <PiSealCheckFill className="text-blue-300" size={18} />
              </span>
              <h5 className="text-sm font-light text-gray-800">@Relnc</h5>
            </div>
          </div>
          <MoreHorizontal className="text-gray-500" />
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            tenetur voluptas illo alias minus doloremque inventore, vel quia
            delectus itaque ullam ea ut temporibus soluta tempora minima
            officiis aut veritatis.
          </p>
        </section>
      </header>
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
      <footer className="w-full flex items-center justify-around pt-2 pb-8 ">
        <span className="flex gap-2 items-center text-gray-500">
          <MessageCircle />
          991
        </span>
        <span className="flex gap-2 items-center text-gray-500">
          <Repeat />
          1581
        </span>
        <span className="flex gap-2 items-center text-gray-500">
          <Heart />
          9,8678
        </span>
        <span className="flex gap-2 items-center text-gray-500">
          <Bookmark />
          90
        </span>
        <Share2 className="text-gray-500" />
      </footer>
    </div>
  );
}
