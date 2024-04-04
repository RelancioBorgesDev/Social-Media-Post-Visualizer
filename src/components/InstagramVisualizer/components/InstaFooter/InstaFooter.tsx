import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
interface IInstaFooter {
  accountName: string;
  description: string;
}
export default function InstaFooter({
  accountName,
  description,
}: IInstaFooter) {
  return (
    <footer className=" bg-white text-zinc-950 px-4 py-4 flex flex-col gap-3 rounded-b-lg">
      <div className="flex justify-between ">
        <div className="flex gap-4">
          <Heart />
          <MessageCircle />
          <Send />
        </div>
        <Bookmark />
      </div>
      <span>29.997 curtidas</span>
      <div className="flex gap-2">
        <p>
          <span className="font-bold ">
            {accountName ? accountName : "Nome de Usuário"}
          </span>{" "}
          {description ? description : "Descrição"}
        </p>
      </div>
      <span className="text-xs text-gray-500">
        Ver todos os 240 comentários
      </span>
    </footer>
  );
}
