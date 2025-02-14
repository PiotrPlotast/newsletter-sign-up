import "./app.css";
import SignUpForm from "./SignUpForm";
import SuccessMessage from "./SuccessMessage";
import { useState } from "react";
function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <>
      <div>
        {isSubscribed ? (
          <SuccessMessage />
        ) : (
          <SignUpForm setIsSubscribed={setIsSubscribed} />
        )}
      </div>
    </>
  );
}

export default App;
