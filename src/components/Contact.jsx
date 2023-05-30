import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0B0C10] flex justify-center items-center p-4 "
    >
      <form method="POST" action="https://getform.io/f/80f29602-2c74-4e7b-92f4-3674f78912fe" className="flex flex-col max-w-[700px] w-full">
        <div className="pt-2">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1] text-[#C5C6C7] ">
            Contact
          </p>
          <p className="py-2 text-[#C5C6C7] text-sm md:text-xl">
            Submit the form below or email me at almonia.ruel.bscs2019@gmail.com
          </p>
        </div>
        <input type="text" className="bg-[#ccd6f6] p-2 " placeholder="Name" name='name'/>
        <input type="email" name="email" className="bg-[#ccd6f6] p-2 my-4 " placeholder="Email" />
        <textarea name="message" rows="10" className="bg-[#ccd6f6] p-2 my-4 " placeholder="Message"></textarea>
        <button className="text-white group border-2 px-6 py-3 my-2 border-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 flex items-center mx-auto">Submit</button>
      </form>
    </div>
  );
}
