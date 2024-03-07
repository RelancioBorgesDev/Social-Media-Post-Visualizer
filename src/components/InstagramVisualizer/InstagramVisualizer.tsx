
import imgPost from "../../assets/igPostImg.jpg";
import InstaFooter from "./components/InstaFooter/InstaFooter";
import InstaHeader from "./components/InstaHeader/InstaHeader";
export default function InstagramVisualizer() {
  return (
    <div className=" w-[540px]  flex flex-col justify-between shadow-2xl rounded ">
      {/* Instagram Header */}
      <InstaHeader />
      {/* Instagram Image Wrapper */}
      <div className="w-full ">
        <img src={imgPost} alt="" className="w-full h-[500px]" />
      </div>
      {/* Instagram Footer */}
      <InstaFooter/>
    </div>
  );
}
