import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="w-full bg-[#ffad33] md:h-24 text-center text-lg text-gray-800 font-amazon-ember">
      <div className="flex flex-col md:flex-row justify-between items-center h-full py-4 md:py-0 px-4 md:px-6">
        <div className="flex flex-row items-center gap-4 text-xl font-amazon-ember-display">
          <img
            className="w-9 h-9 object-cover"
            alt="AFE Makerspace Logo"
            src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
          />
          <div className="font-extrabold">AFE Makerspace</div>
        </div>

        <div className="mt-4 md:mt-0 font-medium leading-[170%]">
          Privacy Policy
        </div>

        <div className="flex flex-row items-center justify-center gap-2 px-6 py-2 mt-4 md:mt-0 rounded-full bg-gray-200 text-orange-600">
          <img
            className="w-8 h-8 object-cover"
            alt="Helpdesk Icon"
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
          />
          <div className="font-medium leading-[170%]">Helpdesk</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;