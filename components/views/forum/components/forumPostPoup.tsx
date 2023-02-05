type propTypes = {
  setDisplayPostPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const ForumPostPopup = ({ setDisplayPostPopup }: propTypes) => {
  // popup on screen when user clicks on a post in forumPosts.tsx
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-md p-12">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row w-full">
            <div className="flex flex-row space-x-2 items-center">
              <img
                src="https://i.imgur.com/4YQqY7y.png"
                className="w-24 h-24 rounded-full"
                alt={"profile picture"}
              />
              <div>
                <p className="text-lg text-black font-bold">James Stone</p>
                <p className="text-sm text-gray-400 mt-2">Mar 29, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 ml-2">
          <h1 className="text-3xl font-bold text-black">
            How to choose a modern business car in 2023?
          </h1>
          <p className="text-lg text-gray-400 font-light mt-5 leading-loose mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusamus labore quasi a aperiam tempore, illo, expedita voluptatem
            eligendi sequi voluptatibus. Accusamus quos atque nihil sapiente.
            reiciendis sunt! Nam ex sit repellat, ea eaque dicta facere esse
            repudiandae minima nemo provident temporibus. Et maxime sunt
            suscipit ab magni tempora excepturi. Ratione numquam, amet vel nihil
            rem suscipit similique ab ullam
          </p>
        </div>
        <div
          className="absolute top-2 right-2 w-10 h-10  flex justify-center items-center"
          onClick={() => setDisplayPostPopup(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ForumPostPopup;
