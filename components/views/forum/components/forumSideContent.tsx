/* eslint-disable @next/next/no-img-element */
const ForumSideContent = () => {
  return (
    <div className="hidden md:block md:w-1/4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 bg-gray-100 p-5 rounded-xl">
          <p className="text-sm text-black">
            Welcome Michael, your last visit was 12 days ago. Since then, there
            were <span className="text-blue-500"> 502 new posts </span> and{" "}
            <span className="text-blue-500"> 14 new threads. </span>
          </p>
        </div>
        <div className="flex flex-col space-y-2 bg-gray-100 p-5 rounded-xl">
          {/* pie icon next to Forum stats, then three rows with threads -> {number}  messages -> {number} and members ->{ number}*/}
          <h1 className="text-lg font-medium text-black">Forum Stats</h1>
          <div className="flex flex-row justify-between items-center px-4">
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-black">Threads</p>
              <p className="text-sm text-black">Messages</p>
              <p className="text-sm text-black">Members</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-400">1,000</p>
              <p className="text-sm text-gray-400">1,000</p>
              <p className="text-sm text-gray-400">1,000</p>
            </div>
          </div>
          <button className="bg-green-200 text-green-600 rounded-md p-2 mt-5 mx-2">
            + Start New Thread
          </button>
        </div>
        <div className="flex flex-col space-y-2 bg-gray-100 p-5 rounded-xl">
          <h1 className="text-lg font-medium text-black">Trending Threads</h1>
          {/* profile picture next to name and time ago in the end, below these there will be the title of the thread */}
          <div className="flex flex-col justify-between items-start px-2 space-y-2">
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex flex-row space-x-2 items-center">
                <img
                  src="https://i.imgur.com/4YQqY7y.png"
                  className="w-8 h-8 rounded-full"
                  alt={"profile picture"}
                />
                <p className="text-sm text-black">Michael</p>
              </div>
              <p className="text-sm text-gray-400">2 days ago</p>
            </div>
            <p className="text-sm text-black">How to chooose a modern business car in 2023?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumSideContent;
