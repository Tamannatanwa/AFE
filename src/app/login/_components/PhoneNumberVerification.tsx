import VerifyOTP from "./VerifyOTP";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent } from "react";

const PhoneNumberVerification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showOTPVerification, setShowOTPVerification] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    setErrorMessage("");
  };

  const handleProceed = async () => {
    const phonePattern = /^[6-9]\d{9}$/;

    if (!phoneNumber) {
      setErrorMessage("Please enter a phone number to proceed");
      return;
    }

    if (phoneNumber.length !== 10) {
      setErrorMessage("Please enter a 10 digit phone number");
      return;
    }

    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage("Please enter a phone number starting with 6 or above");
      return;
    }

    try {
      await fetch("http://13.127.216.196/api/v1/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      setShowOTPVerification(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.key.charCodeAt(0);
    // Only allow numbers (charCode between 48 and 57)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex justify-center md:items-center">
      {showOTPVerification ? (
        <VerifyOTP
          phoneNumber={phoneNumber}
          setShowOTPVerification={setShowOTPVerification}
        />
      ) : (
        <div className="mt-12 md:mt-0">
          <div className="flex flex-col w-[20rem] md:w-[24rem] mx-auto items-start gap-8">
            <div>
              <img
                className="w-16 h-16"
                alt="Logo"
                src="/login/reshot-icon-molecules-YBNSD562JC 1.svg"
              />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <div className="relative text-5xl leading-[150%] font-extrabold font-heading4-bold text-midnight-blue-main text-left">
                Login to AFE Makerspace
              </div>

              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className={`relative text-sm leading-[170%] font-medium font-['Amazon Ember'] ${
                    errorMessage ? "text-error-main" : "text-text-primary"
                  }`}
                >
                  Phone Number
                </label>
                <div className="relative flex items-center gap-4 w-full">
                  <span className="absolute left-4 text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-secondary text-left">+91</span>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={errorMessage ? "" : "xxxxxxxxxx"}
                    className={`pl-12 rounded-full border h-14 text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-hint text-left ${
                      errorMessage
                        ? "border-error-main"
                        : "border-web-light-text-primary"
                    }`}
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    onKeyPress={handleKeyPress} 
                  />
                </div>
                {errorMessage && (
                  <span className="text-error-main text-sm">
                    {errorMessage}
                  </span>
                )}
              </div>

              <div className="w-full">
                <Button
                  onClick={handleProceed}
                  className="w-full h-14 rounded-full bg-incandescent-main text-web-light-background-default font-button1-bold text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default"
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;
