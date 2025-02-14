import illustrationDesktop from "./assets/illustration-sign-up-desktop.svg";
import illustrationMobile from "./assets/illustration-sign-up-mobile.svg";

interface SignUpFormProps {
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
  isSubscribed: boolean;
}

export default function SignUpForm({
  setIsSubscribed,
  isSubscribed,
}: SignUpFormProps) {
  return (
    <div className="font-display flex flex-col w-[100dvw] items-center justify-center gap-10 min-lg:grid min-lg:grid-cols-2 min-lg:w-auto min-lg:max-w-4xl min-lg:bg-neutral-white min-lg:rounded-4xl min-lg:shadow-lg min-lg:mx-auto min-lg:mt-20 min-lg:p-4">
      <div className="w-full min-lg:order-2">
        <picture className="w-full">
          <source srcSet={illustrationMobile} media="(max-width: 1023px)" />
          <img
            src={illustrationDesktop}
            alt="newsletter"
            className="w-full max-h-[300px] min-[700px]:h-[400px] object-cover min-lg:h-auto min-lg:max-h-[500px] rounded-2xl"
          />
        </picture>
      </div>
      <div className="flex flex-col gap-6 mx-4 mb-8 min-lg:order-1 min-lg:my-8">
        <h1 className="text-neutral-blue-800 text-[2.5rem] font-bold">
          Stay updated!
        </h1>
        <p className="text-neutral-blue-800">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="mx-6 list-image-[url(./assets/icon-list.svg)]">
          <li className="text-neutral-blue-800 pl-2">
            Product discovery and building what matters
          </li>
          <li className="text-neutral-blue-800 pl-2">
            Measuring to ensure updates are a success
          </li>
          <li className="text-neutral-blue-800 pl-2">And much more!</li>
        </ul>
        <form className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs text-neutral-blue-800 font-bold"
          >
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="email@company.com"
            className="border border-neutral-grey rounded-lg p-4"
          />
        </form>
        <button
          className="font-bold bg-neutral-blue-800 py-4 text-white rounded-lg"
          onClick={() => setIsSubscribed(!isSubscribed)}
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
}
