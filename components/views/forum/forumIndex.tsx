import React from "react";

// components
import NavIndex from "@/components/globals/nav/navIndex";
import FilterBox from "./components/filter";
import ForumPosts from "./components/forumPosts";
import ForumSideContent from "./components/forumSideContent";

interface forumIndexPropsI {}

const ForumIndex: React.FC<forumIndexPropsI> = ({}) => {
  return (
    <div className="h-screen w-full bg-white px-5 md:px-16">
      {/* Nav Menu */}
      <NavIndex />
      <h1 className="text-xl font-medium text-center">ForumIndex</h1>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <FilterBox />
        <ForumPosts />
        <ForumSideContent />
      </div>
    </div>
  );
};

export default ForumIndex;
