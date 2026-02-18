import React from "react";

export default function Contact() {
  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-[#0B0C10] text-[#C5C6C7] px-4 py-14"
    >
      <div className="mx-auto max-w-[980px]">
        <form
          method="POST"
          action="https://getform.io/f/80f29602-2c74-4e7b-92f4-3674f78912fe"
          className="rounded-2xl border border-[#1F2833] bg-[#101217] p-6 md:p-10 shadow-[0_16px_35px_rgba(0,0,0,0.28)]"
        >
          <div className="pt-1">
            <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1]">
              Contact
            </p>
            <p className="py-3 text-sm md:text-lg text-[#9EA3B0]">
              Submit the form below or email me at
              <span className="text-[#D5D8DD]"> almonia.ruel.bscs2019@gmail.com</span>
            </p>
          </div>

          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-[#9EA3B0]">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-[#2A2F3A] bg-[#0F1218] px-4 py-3 text-[#E5E7EB] placeholder:text-[#707784] outline-none transition-all duration-200 focus:border-[#66FCF1]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-[#9EA3B0]">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@email.com"
                className="w-full rounded-lg border border-[#2A2F3A] bg-[#0F1218] px-4 py-3 text-[#E5E7EB] placeholder:text-[#707784] outline-none transition-all duration-200 focus:border-[#66FCF1]"
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="message" className="text-sm text-[#9EA3B0]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-[#2A2F3A] bg-[#0F1218] px-4 py-3 text-[#E5E7EB] placeholder:text-[#707784] outline-none transition-all duration-200 focus:border-[#66FCF1]"
            ></textarea>
          </div>

          <div className="mt-6">
            <button className="rounded-full bg-[#1dd877] px-7 py-3 font-semibold text-[#0B0C10] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,216,119,0.4)]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
