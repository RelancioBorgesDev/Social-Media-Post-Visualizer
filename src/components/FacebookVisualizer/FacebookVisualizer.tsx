import FaceHeader from "./components/FaceHeader/FaceHeader";
import FaceFooter from "./components/FaceFooter/FaceFooter";
import { IPostData } from "../../App";

interface FacebookVisualizerProps {
  post: IPostData;
}
export default function FacebookVisualizer({ post }: FacebookVisualizerProps) {
  const { accountName, postDescription, postImage } = post;
  return (
    <div className=" w-[600px] ">
      {/* Facebook Header */}
      <FaceHeader accountName={accountName} description={postDescription} />
      {/* Facebook Image Wrapper */}
      <div>
        {postImage ? (
          <img src={postImage} alt="" className="w-full h-[500px]" />
        ) : (
          <div className="w-full h-[500px] bg-zinc-800" />
        )}
      </div>
      {/* Facebook Footer */}
      <FaceFooter />
    </div>
  );
}
