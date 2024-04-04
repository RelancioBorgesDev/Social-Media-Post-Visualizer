import Avatar from "../../../Avatar/Avatar";
import { PiSealCheckFill } from "react-icons/pi";
import { MoreHorizontal } from "lucide-react";

interface IXHeader {
  accountName: string;
  description: string;
}

export default function XHeader({ accountName, description }: IXHeader) {
  return (
    <header className="bg-white flex flex-col text-black items-center justify-between px-4 py-2 rounded-t-lg">
      <section className="w-full flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Avatar social_media="" />
          <div className="flex flex-col ">
            <span className="flex gap-2 items-center">
              <h1 className="text-xl font-bold">
                {accountName ? accountName : "Nome de Usuário"}
              </h1>
              <PiSealCheckFill className="text-blue-300" size={18} />
            </span>
            <h5 className="text-sm font-light text-gray-800">
              @{accountName ? accountName : "Nome de Usuário"}
            </h5>
          </div>
        </div>
        <MoreHorizontal className="text-gray-500" />
      </section>
      <section>
        <p>{description ? description : "Descrição do Post"}</p>
      </section>
    </header>
  );
}
