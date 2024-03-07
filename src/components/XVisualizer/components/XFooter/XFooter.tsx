import { Bookmark, Heart, MessageCircle, Repeat, Share2 } from "lucide-react";
import React from "react";

export default function XFooter() {
  return (
    <footer className="w-full flex items-center justify-around pt-2 pb-8 ">
      <span className="flex gap-2 items-center text-gray-500">
        <MessageCircle />
        991
      </span>
      <span className="flex gap-2 items-center text-gray-500">
        <Repeat />
        1581
      </span>
      <span className="flex gap-2 items-center text-gray-500">
        <Heart />
        9,8678
      </span>
      <span className="flex gap-2 items-center text-gray-500">
        <Bookmark />
        90
      </span>
      <Share2 className="text-gray-500" />
    </footer>
  );
}
