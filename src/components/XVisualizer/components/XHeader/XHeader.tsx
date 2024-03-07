import Avatar from "../../../Avatar/Avatar";
import { PiSealCheckFill } from "react-icons/pi";
import { MoreHorizontal } from "lucide-react";

export default function XHeader() {
  return (
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur
          voluptas illo alias minus doloremque inventore, vel quia delectus
          itaque ullam ea ut temporibus soluta tempora minima officiis aut
          veritatis.
        </p>
      </section>
    </header>
  );
}
