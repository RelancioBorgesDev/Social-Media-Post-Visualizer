import { GlobeHemisphereWest } from "phosphor-react";
import Avatar from "../../../Avatar/Avatar";
import { Dot, MoreHorizontal } from "lucide-react";

interface IFaceHeader {
  accountName: string;
  description: string;
}

export default function FaceHeader({ accountName, description }: IFaceHeader) {
  return (
    <header className="flex flex-col items-center justify-between px-4 py-2 bg-white text-black rounded-t-lg">
      <section className="w-full flex items-center justify-between bg-white text-black ">
        <div className="flex items-center gap-3">
          <Avatar social_media="FB" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              {accountName ? accountName : "Nome de Usuário"}
            </h1>
            <div className="flex items-center ">
              <h3 className="text-sm text-gray-500">Post feito no brasil</h3>

              <Dot size={24} className="text-gray-500" />
              <span className="text-sm text-gray-500">Há 2 dias</span>
              <Dot size={24} className="text-gray-500" />

              <GlobeHemisphereWest
                size={20}
                weight="duotone"
                className="text-gray-800"
              />
            </div>
          </div>
        </div>
        <MoreHorizontal className="text-gray-500" />
      </section>
      <section>
        <p>{description ? description : "Descrição do post"}</p>
      </section>
    </header>
  );
}
