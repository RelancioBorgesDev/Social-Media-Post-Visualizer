import { FacebookLogo, Image, InstagramLogo } from "phosphor-react";
import XVisualizer from "./components/XVisualizer/XVisualizer";
import { FaXTwitter } from "react-icons/fa6";
import { ReactNode, useState } from "react";
import FacebookVisualizer from "./components/FacebookVisualizer/FacebookVisualizer";
import InstagramVisualizer from "./components/InstagramVisualizer/InstagramVisualizer";

type SocialMediaType = "FB" | "IG" | "X" | "";

export interface IPostData {
  accountName: string;
  postImage: string;
  postDescription: string;
}

function App() {
  const [socialMedia, setSocialMedia] = useState<SocialMediaType>("");
  const [post, setPost] = useState<IPostData>({} as IPostData);

  function handleSetSocialMedia(selectedSocialMedia: SocialMediaType) {
    setSocialMedia(selectedSocialMedia);
  }

  function renderSocialMediaVisualizer(): ReactNode {
    switch (socialMedia) {
      case "FB":
        return <FacebookVisualizer post={post} />;
      case "IG":
        return <InstagramVisualizer post={post} />;
      case "X":
        return <XVisualizer post={post} />;
      default:
        return null;
    }
  }

  function handleAccountNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPost((prevPost) => ({
      ...prevPost,
      accountName: event.target.value,
    }));
  }

  function handlePostImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        if (event.target && event.target.result) {
          setPost((prevPost) => ({
            ...prevPost,
            postImage: event.target!.result!.toString(),
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  }

  function handlePostDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setPost((prevPost) => ({
      ...prevPost,
      postDescription: event.target.value,
    }));
  }

  return (
    <div className="bg-zinc-700 h-screen text-white flex items-center justify-between ">
      <section className="w-1/2  h-screen flex flex-col items-center justify-center gap-16">
        <h1 className="text-4xl font-bold uppercase">
          Escolha os dados do seu post
        </h1>
        <form action="" className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4">
            <input
              type="text"
              className="rounded-sm p-2 outline-none text-black"
              placeholder="Nome da sua conta"
              value={post.accountName}
              onChange={handleAccountNameChange}
            />
            <label htmlFor="fileInput">
              <Image
                size={64}
                weight="fill"
                className="hover:bg-white hover:text-black rounded-full p-4 border-2 border-white"
              />
            </label>
          </div>

          <div className="flex items-center gap-4">
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handlePostImageChange}
            />
          </div>
          <textarea
            className="w-[600px] h-32 px-4 py-2 border border-gray-300 text-black rounded-md resize-none focus:outline-none focus:border-blue-500"
            placeholder="Escreva a descrição do seu post"
            value={post.postDescription}
            onChange={handlePostDescriptionChange}
          ></textarea>
        </form>
      </section>
      <section className="w-1/2 h-screen flex flex-col-reverse items-center justify-center  gap-4 p-16 ">
        {socialMedia == "" ? (
          <h1 className="text-4xl font-bold mb-8 text-center">
            Selecione uma rede social para visualizar seu post
          </h1>
        ) : (
          renderSocialMediaVisualizer()
        )}

        <div className="w-full flex items-center justify-center gap-16 ">
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
      </section>
    </div>
  );
}

export default App;
