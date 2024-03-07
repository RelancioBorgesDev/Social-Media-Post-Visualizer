import imgPost from "../../assets/igPostImg.jpg";
import FaceHeader from "./FaceHeader/FaceHeader";
import FaceFooter from "./FaceFooter/FaceFooter";
export default function FacebookVisualizer() {
  return (
    <div className=" w-[600px] ">
      {/* Facebook Header */}
      <FaceHeader />
      {/* Facebook Image Wrapper */}
      <div>
        <img src={imgPost} alt="Image" className="w-full h-[500px]" />
      </div>
      {/* Facebook Footer */}
      <FaceFooter />
    </div>
  );
}
