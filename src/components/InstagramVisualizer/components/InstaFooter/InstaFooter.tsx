import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";

export default function InstaFooter() {
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
        <h2 className="font-bold">sunflower_77</h2>
        <p>Mais uma conquista!!! #Feliz #Carro</p>
      </div>
      <span className="text-xs text-gray-500">
        Ver todos os 240 comentários
      </span>
    </footer>
  );
}
