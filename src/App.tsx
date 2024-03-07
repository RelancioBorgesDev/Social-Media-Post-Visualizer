import { FacebookLogo, InstagramLogo } from "phosphor-react";
import XVisualizer from "./components/XVisualizer/XVisualizer";
import { FaXTwitter } from "react-icons/fa6";
import { ReactNode, useState } from "react";
import FacebookVisualizer from "./components/FacebookVisualizer/FacebookVisualizer";
import InstagramVisualizer from "./components/InstagramVisualizer/InstagramVisualizer";

type SocialMediaType = "FB" | "IG" | "X" | "";

function App() {
  const [socialMedia, setSocialMedia] = useState<SocialMediaType>("");

  function handleSetSocialMedia(selectedSocialMedia: SocialMediaType) {
    setSocialMedia(selectedSocialMedia);
  }

  function renderSocialMediaVisualizer(): ReactNode {
    switch (socialMedia) {
      case "FB":
        return <FacebookVisualizer />;
      case "IG":
        return <InstagramVisualizer />;
      case "X":
        return <XVisualizer />;
      default:
        return null;
    }
  }

  return (
    <div className="bg-zinc-950 h-screen text-white flex items-center justify-between">
      <section className="w-1/2 border-2 border-white h-screen flex flex-col items-center justify-center gap-16">
        <h1 className="text-4xl">Escolha os dados do seu post</h1>
        <input type="file" />
        <textarea></textarea>
      </section>
      <section className="w-1/2 h-screen flex items-center justify-center flex-col gap-4">
        <div className="w-full flex items-center justify-center gap-16">
          <button
            className="rounded-full border-2 border-blue-500 bg-blue-500 flex shadow-2xl p-4 hover:brightness-75 cursor-pointer"
            onClick={() => handleSetSocialMedia("FB")}
          >
            <FacebookLogo size={64} weight="fill" />
          </button>
          <button
            className="rounded-full  from-yellow-400 to-purple-600 hover:brightness-75 flex items-center justify-center bg-gradient-to-tr shadow-2xl p-4 cursor-pointer"
            onClick={() => handleSetSocialMedia("IG")}
          >
            <InstagramLogo
              size={64}
              weight="fill"
              className="text-tranparent"
            />
          </button>

          <button
            className="rounded-full border-2 p-4  bg-black flex items-center justify-center shadow-2xl hover:brightness-75 cursor-pointer"
            onClick={() => handleSetSocialMedia("X")}
          >
            <FaXTwitter size={64} className="text-tranparent" />
          </button>
        </div>

        {renderSocialMediaVisualizer()}
      </section>
    </div>
  );
}

export default App;
