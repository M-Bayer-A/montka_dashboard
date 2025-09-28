import OtpInput from "react-otp-input";

export default function CustomOtpInput({ className, value, onChange }) {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={6}
      renderSeparator={<span className="w-1" />}
      renderInput={(props) => (
        <input
          {...props}
          style={{ width: "50px", height: "50px" }}
          className={`${className} text-center border border-zinc-300 rounded-md focus:outline-none focus:border-black`}
        />
      )}
    />
  );
}
