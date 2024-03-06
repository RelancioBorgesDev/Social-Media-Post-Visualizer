import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  Send,
} from "lucide-react";
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
        <div className=" w-[540px]  flex flex-col justify-between shadow-2xl rounded ">
          {/* Instagram Header */}
          <header className=" py-8 px-2 w-full h-[90px] flex justify-between items-center bg-white text-zinc-950 rounded-t-lg">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                <a
                  href="#"
                  className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
                >
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://placekitten.com/200/203"
                    alt="cute kitty"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold">sunflower_77</h1>
                <h3 className="text-xs">Londres</h3>
              </div>
            </div>
            <div>
              <MoreVertical className="text-zinc-950" />
            </div>
          </header>
          {/* Instagram Image Wrapper */}
          <div className="w-full ">
            <img src={imgPost} alt="" className="w-full h-[500px]" />
          </div>
          {/* Instagram Footer */}
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
        </div>
      </section>
    </div>
  );
}

export default App;
