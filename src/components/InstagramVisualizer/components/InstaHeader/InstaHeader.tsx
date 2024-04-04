import { MoreVertical } from "lucide-react";
import Avatar from "../../../Avatar/Avatar";

interface IInstaHeader {
  accountName: string;
}
export default function InstaHeader({ accountName }: IInstaHeader) {
  return (
    <header className=" py-8 px-2 w-full h-[90px] flex justify-between items-center bg-white text-zinc-950 rounded-t-lg">
      <div className="flex gap-4 items-center">
        <Avatar social_media="IG" />

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">{accountName ? accountName : "Nome de Usuário"}</h1>
          <h3 className="text-xs">Londres</h3>
        </div>
      </div>
      <div>
        <MoreVertical className="text-zinc-950" />
      </div>
    </header>
  );
}
