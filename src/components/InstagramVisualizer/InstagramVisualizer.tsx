import { IPostData } from "../../App";
import InstaFooter from "./components/InstaFooter/InstaFooter";
import InstaHeader from "./components/InstaHeader/InstaHeader";

interface InstagramVisualizerProps {
  post: IPostData;
}
export default function InstagramVisualizer({
  post,
}: InstagramVisualizerProps) {
  const { accountName, postDescription, postImage } = post;
  return (
    <div className=" w-[640px]  flex flex-col justify-between shadow-2xl rounded ">
      {/* Instagram Header */}
      <InstaHeader accountName={accountName} />
      {/* Instagram Image Wrapper */}
      <div className="w-full ">
        {postImage ? (
          <img src={postImage} alt="" className="w-full h-[500px]" />
        ) : (
          <div className="w-full h-[500px] bg-zinc-800" />
        )}
      </div>
      {/* Instagram Footer */}
      <InstaFooter accountName={accountName} description={postDescription} />
    </div>
  );
}
