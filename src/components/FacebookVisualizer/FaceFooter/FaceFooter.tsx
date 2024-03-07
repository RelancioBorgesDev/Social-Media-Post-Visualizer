import { MessageCircle } from "lucide-react";
import {
  ArrowBendUpRight,
  Heart,
  ThumbsUp,
  WhatsappLogo,
} from "phosphor-react";

export default function FaceFooter() {
  return (
    <footer className="bg-white w-full text-black rounded-b-lg">
      <div className="flex justify-between items-center px-2 py-4">
        <div className="flex  items-center  ">
          <span className="rounded-full bg-blue-600 w-6 h-6 flex items-center justify-center">
            <ThumbsUp size={14} className="text-white" weight="fill" />
          </span>
          <span className="rounded-full bg-red-600 w-6 h-6 flex items-center justify-center">
            <Heart size={14} className="text-white" weight="fill" />
          </span>
          <span className="ml-2">77</span>
        </div>
        <span>7 comentários</span>
      </div>
      <hr className="w-full border-t-2 border-gray-200" />
      <div className="flex justify-around items-center py-2">
        <span className="flex flex-col gap-2 items-center">
          <ThumbsUp size={24} />
          Curtir
        </span>
        <span className="flex flex-col gap-2 items-center">
          <MessageCircle size={24} />
          Comentar
        </span>
        <span className="flex flex-col gap-2 items-center">
          <WhatsappLogo size={24} />
          Enviar
        </span>
        <span className="flex flex-col gap-2 items-center">
          <ArrowBendUpRight size={32} />
          Compartilhar
        </span>
      </div>
    </footer>
  );
}
