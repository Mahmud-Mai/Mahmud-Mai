import Heading from "../sharedComponents/Heading";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full min-h-screen flex flex-col justify-center"
    >
      <div className="">
        <div className="pb-8">
          <Heading
            breadCrumbsText="Contact"
            headingText="Contact Me"
          />
          <p className="py-4">I&apos;m open to any productive discussion.</p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/40fec7eb-b27b-4d15-a5ae-8970bc50c161"
          className="flex flex-col w-full"
        >
          <input
            className="border border-gray-400 bg-transparent p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="border border-gray-400 my-4 p-2 bg-transparent"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="border border-gray-400 bg-transparent p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          {/* <button className=" border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"> */}
          <button className="contact-btn px-4 py-3 my-8 mx-auto flex items-center max-w-[200px]">
            Let&apos;s Collaborate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
