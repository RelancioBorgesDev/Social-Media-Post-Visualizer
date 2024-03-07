import {
  ArrowBendUpRight,
  GlobeHemisphereWest,
  Heart,
  ThumbsUp,
  WhatsappLogo,
} from "phosphor-react";
import Avatar from "./components/Avatar/Avatar";
import { Dot, MessageCircle, MoreHorizontal } from "lucide-react";
import imgPost from "./assets/igPostImg.jpg";

function App() {
  return (
    <div className="bg-zinc-950 h-screen text-white flex items-center justify-between">
      {/* Seçao que vai receber os dados, imagem  */}
      <section className="w-1/2 border-2 border-white h-screen flex flex-col items-center justify-center gap-16">
        <h1 className="text-4xl">Escolha os dados do seu post</h1>
        <input type="file" />
        <textarea></textarea>
      </section>
      <section className="w-1/2 border-2 border-white h-screen flex items-center justify-center ">
        {/* Instagram Visualizer */}
        {/*  <InstagramVisualizer /> */}

        {/* Facebook Visualizer */}
        <div className=" w-[600px] ">
          {/* Facebook Header */}
          <header className="flex flex-col items-center justify-between px-4 py-2 bg-white text-black rounded-t-lg">
            <section className="w-full flex items-center justify-between bg-white text-black ">
              <div className="flex items-center gap-3">
                <Avatar social_media="FB"/>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">SunFlower_77</h1>
                  <div className="flex items-center ">
                    <h3 className="text-sm text-gray-500">
                      Post feito no brasil
                    </h3>

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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique enim voluptatibus sequi delectus eius in adipisci
                possimus doloribus ab, amet, ducimus totam. Natus assumenda
                repellendus, mollitia quas eligendi rem error!
              </p>
            </section>
          </header>
          {/* Facebook Image Wrapper */}
          <div>
            <img src={imgPost} alt="Image" className="w-full h-[500px]" />
          </div>
          {/* Facebook Footer */}
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
        </div>
      </section>
    </div>
  );
}

export default App;
