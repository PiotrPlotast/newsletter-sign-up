import successIcon from "./assets/icon-success.svg";

interface SuccessMessageProps {
  email: string;
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
  isSubscribed: boolean;
}

export default function SuccessMessage({
  email,
  setIsSubscribed,
  isSubscribed,
}: SuccessMessageProps) {
  return (
    <div className="h-full mx-6 pt-36 pb-12 flex flex-col justify-between">
      <div>
        <img src={successIcon} alt="" />
        <h1 className="text-neutral-blue-800 leading-none my-8 text-4xl font-bold min-lg:text-6xl ">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <b className="text-neutral-blue-700">{email}</b>. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <button
        className="mt-4 cursor-pointer font-bold bg-neutral-blue-800 py-4 text-white rounded-lg hover:bg-gradient-to-l from-primary to-primary2"
        onClick={() => setIsSubscribed(!isSubscribed)}
      >
        Dismiss message
      </button>
    </div>
  );
}
