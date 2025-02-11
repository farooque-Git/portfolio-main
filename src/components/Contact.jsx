



const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="p-6">
            If you're looking for a skilled frontend developer to help bring
            your Web and Mobile application ideas to life, feel free to contact
            me. Let's discuss how I can contribute to your team and deliver
            top-notch results.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/jawllwgb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 
          "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your WhatsApp or Contact Number"
              className="p-2 my-4  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
