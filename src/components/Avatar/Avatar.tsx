interface AvatarProps {
  social_media: string;
}
export default function Avatar({ social_media }: AvatarProps) {
  return (
    <div
      className={`bg-gradient-to-tr ${
        social_media == "IG"
          ? "from-yellow-400 to-purple-600"
          : "from-blue-500 to-blue-600"
      } p-1 rounded-full`}
    >
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
  );
}
