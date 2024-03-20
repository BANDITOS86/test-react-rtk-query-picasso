import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import PostTeaser from "../entities/Post/ui/PostTeaser.tsx";
import { Post } from "../entities/Post/model/Post.ts";

const List = ({ data }: { data: Post[] }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current || null,
    estimateSize: () => 200,
    overscan: 10,
  });

  return (
    <>
      <div
        ref={parentRef}
        className="rounded-md border-2 border-solid border-zinc-950"
        style={{
          height: `700px`,
          overflow: "auto",
        }}
      >
        <div
          className="divide-y divide-solid divide-zinc-950"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              className="p-[20px] flex items-start flex-col gap-5"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <PostTeaser post={data[virtualItem.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
