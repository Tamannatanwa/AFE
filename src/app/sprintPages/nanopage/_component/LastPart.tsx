import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col gap-8 md:mt-4 max-w-full sm:max-w-[70%]">
      {/* <div className="w-full">
        <div className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Why Schedule a Nano Sprint?{" "}
        </div>
        <div className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          Nano Sprints are designed to fuel students' curiosity and enthusiasm.
          They provide an engaging and hands-on introduction to robotics and AI.
          This program is an excellent way for schools and teachers to enrich
          their STEM curriculum and inspire the next generation of innovators.{" "}
        </div>
      </div> */}
      {/* <div className="w-full mt-4">
        <div className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Ready to Inspire?{" "}
        </div>
          <div className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          Book a Nano Sprint today and give your students an exciting glimpse
          into the future of technology. Contact us now to schedule your session
          and start a transformative STEM journey!{" "}
        </div>
      </div> */}
      <div className="flex flex-col w-full mt-4 gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Have Questions?
        </h1>
        <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          <span>{`Call Us or Whatsapp on `}</span>
          <span className="text-tomato">+918764674356</span>
        </p>
      </div>
    </div>
  );
};

export default LastPart;