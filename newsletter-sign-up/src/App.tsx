import "./app.css";
import SignUpForm from "./SignUpForm";
import SuccessMessage from "./SuccessMessage";
import { useState } from "react";
function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <>
      <div className="min-lg:bg-neutral-blue-700 w-[100dvw] h-[100dvh] min-lg:flex min-lg:items-center min-lg:justify-center">
        {isSubscribed ? (
          <SuccessMessage />
        ) : (
          <SignUpForm
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        )}
      </div>
    </>
  );
}

export default App;
