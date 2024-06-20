import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

type article = {
  imageUrl: string;
  title: string;
  content: string;
};

export default function ArticleRead({ article }: { article: article }) {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="h-[350px] bg-[#f3f6f5] p-4 text-lg flex flex-col font-semibold">
            <div
              className="h-[200px] mb-2"
              style={{
                backgroundImage: `url(${article.imageUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
            <span className="line-clamp-3">{article.title}</span>
          </div>
        </DrawerTrigger>
        <DrawerContent className="rounded-none w-[1366px] m-auto">
          <div className=" m-auto max-h-[96vh] overflow-auto pt-10 px-40 py-10">
            <DrawerHeader>
              <DrawerTitle className="text-4xl my-10">{article.title}</DrawerTitle>
            </DrawerHeader>
            <p className="whitespace-pre-wrap text-start">{article.content}</p>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
