interface SignUpFormProps {
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SignUpForm({ setIsSubscribed }: SignUpFormProps) {
  return (
    <div>
      <h1> Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form action="">
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" placeholder="email@company.com" />
      </form>
      <button>Subscribe to monthly newsletter</button>
    </div>
  );
}
