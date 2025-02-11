import shakeel from "./image/shakeel.jpeg";
import client2 from "./image/client2.jpeg";

const Client = () => {
  const clients = [
    {
      id: 1,
      src: shakeel,
      name: "Mr. Md Shakeel Ansari",
      designation: "CEO",
      companyName: "MSA Trader",
      message:
        "Thank you for delivering the project! The app looks great and functions smoothly. Your attention to detail and timely delivery exceeded our expectations. We're excited to launch and see it in action. Great job, and we appreciate your hard work!",
    },
    {
      id: 2,
      src: client2,
      name: "Mr. Ejaz Ahmed",
      designation: "Co-Founder",
      companyName: "Monex Battery",
      message:
        "I wanted to express my gratitude for completing the project! The app looks amazing and operates flawlessly. Your meticulous attention to detail and the prompt delivery have gone above and beyond what we anticipated. We’re excited to roll it out and see it in action. Your dedication and hard work are truly appreciated! Looking forward to collaborating on future endeavors!",
    },
  ];

  // md:h-screen
  return (
    <div
      name="client"
      className="bg-gradient-to-b from-gray-950 py-6 to-gray-800 w-full
     text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-yellow-500">
            My Happy Client !!!
          </p>
        </div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {clients.map(
            ({ id, src, name, designation, companyName, message }) => (
              <div key={id} className="shadow-lg shadow-gray-400 ">
                <img src={src} alt="" className="p-1 pt-2" />
                <div className="mt-3 pr-2 mb-5">
                  <p className="px-5 text-yellow-500 text-base font-semibold  duration-200 hover:scale-105 ">
                    {name}
                  </p>
                  <p className=" ">
                    <span className="text-gray-400 font-semibold px-7">
                      {designation}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-400 font-semibold px-7   ">
                      {companyName}
                    </span>
                  </p>
                  <div className="pl-3 pt-4">
                    <p>
                      <span className="text-gray-300 font-semibold pt-3">
                        {message}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Client;
