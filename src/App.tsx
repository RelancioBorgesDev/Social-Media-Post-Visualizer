import FacebookVisualizer from "./components/FacebookVisualizer/FacebookVisualizer";

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
        <FacebookVisualizer />
      </section>
    </div>
  );
}

export default App;
