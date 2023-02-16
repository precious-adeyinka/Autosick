import { useState } from "react";
import ForumPostPopup from "./forumPostPoup";

const ForumPosts = () => {
  const [displayPostPopup, setDisplayPostPopup] = useState(false);
  return (
    <div className="w-full bg-gray-100 shadow-md rounded-md p-5">
      <h1 className="text-xl font-medium text-left text-black">
        AutoSick Community
      </h1>

      <div className="flex flex-row justify-between items-center bg-white rounded-md p-5 mt-5">
        <div className="flex flex-row w-full">
          {/*  topic on the left, remaining on the right */}
          <h1 className="text-lg font-medium text-black">Topic</h1>
          <h1 className="text-lg font-medium text-black ml-auto mr-4 text-gray-400">
            Replies
          </h1>
          <h1 className="text-lg font-medium text-black mr-4 text-gray-400">
            Views
          </h1>
          <h1 className="text-lg font-medium text-black mr-4 text-gray-400">
            Votes
          </h1>
        </div>
      </div>
      <hr />
      <div
        className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-5 mt-5"
        onClick={() => setDisplayPostPopup(true)}
      >
        <div className="flex flex-row w-full">
          <div className="flex flex-row space-x-2 items-start">
            <img
              src="https://i.imgur.com/4YQqY7y.png"
              className="w-12 h-12 rounded-full"
              alt={"profile picture"}
            />
            <div>
              <p className="text-md text-black font-bold w-3/4">
                How to choose a modern business car in 2023?
              </p>
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-sm text-black font-light">James Stone</p>
                <p className="text-sm text-gray-400">Mar 29, 2023</p>
              </div>
            </div>
          </div>
          <div className="ml-auto mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">43</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Replies
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">29</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Views
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">64</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Votes
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-5 mt-5">
        <div className="flex flex-row w-full">
          <div className="flex flex-row space-x-2 items-start">
            <img
              src="https://i.imgur.com/4YQqY7y.png"
              className="w-12 h-12 rounded-full"
              alt={"profile picture"}
            />
            <div>
              <p className="text-md text-black font-bold w-3/4">
                How to choose a modern business car in 2023?
              </p>
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-sm text-black font-light">James Stone</p>
                <p className="text-sm text-gray-400">Mar 29, 2023</p>
              </div>
            </div>
          </div>
          <div className="ml-auto mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">43</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Replies
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">29</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Views
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">64</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Votes
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-5 mt-5">
        <div className="flex flex-row w-full">
          <div className="flex flex-row space-x-2 items-start">
            <img
              src="https://i.imgur.com/4YQqY7y.png"
              className="w-12 h-12 rounded-full"
              alt={"profile picture"}
            />
            <div>
              <p className="text-md text-black font-bold w-3/4">
                How to choose a modern business car in 2023?
              </p>
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-sm text-black font-light">James Stone</p>
                <p className="text-sm text-gray-400">Mar 29, 2023</p>
              </div>
            </div>
          </div>
          <div className="ml-auto mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">43</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Replies
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">29</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Views
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">64</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Votes
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-5 mt-5">
        <div className="flex flex-row w-full">
          <div className="flex flex-row space-x-2 items-start">
            <img
              src="https://i.imgur.com/4YQqY7y.png"
              className="w-12 h-12 rounded-full"
              alt={"profile picture"}
            />
            <div>
              <p className="text-md text-black font-bold w-3/4">
                How to choose a modern business car in 2023?
              </p>
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-sm text-black font-light">James Stone</p>
                <p className="text-sm text-gray-400">Mar 29, 2023</p>
              </div>
            </div>
          </div>
          <div className="ml-auto mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">43</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Replies
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">29</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Views
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">64</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Votes
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-5 mt-5">
        <div className="flex flex-row w-full">
          <div className="flex flex-row space-x-2 items-start">
            <img
              src="https://i.imgur.com/4YQqY7y.png"
              className="w-12 h-12 rounded-full"
              alt={"profile picture"}
            />
            <div>
              <p className="text-md text-black font-bold w-3/4">
                How to choose a modern business car in 2023?
              </p>
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-sm text-black font-light">James Stone</p>
                <p className="text-sm text-gray-400">Mar 29, 2023</p>
              </div>
            </div>
          </div>
          <div className="ml-auto mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">43</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Replies
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">29</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Views
            </h1>
          </div>
          <div className="mx-3 flex flex-col">
            <h1 className="text-md font-medium text-black text-black">64</h1>
            <h1 className="text-md font-medium text-black text-gray-400">
              Votes
            </h1>
          </div>
        </div>
      </div>
      <hr />
      {displayPostPopup ? (
        <ForumPostPopup setDisplayPostPopup={setDisplayPostPopup} />
      ) : null}
    </div>
  );
};

export default ForumPosts;
