import React, { useState } from "react";
import "./App.css";
const SampleAuth = {
  signInWithEmail: (email, password) =>
    email && password ? { name: email } : null,
  signInWithGoogle: () => ({ name: "Signed in using Google" }),
  signInWithLinkedIn: () => ({ name: "Signed in using Linkedin" }),
};

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return (
      <div className="container">
        <h2>Dashboard</h2>
        <p>Welcome, {user.name}!</p>
        <button onClick={() => setUser(null)}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const u = SampleAuth.signInWithEmail(email, password);
          if (u) setUser(u);
          else alert("Invalid email or password");
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In </button>
      </form>
      <div className="button-container">
        <button
          className="google"
          onClick={() => setUser(SampleAuth.signInWithGoogle())}
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <g>
              <path
                fill="#4285F4"
                d="M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"
              />
              <path
                fill="#34A853"
                d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 6.2 29.6 4 24 4c-7.2 0-13.4 4.1-16.7 10.7z"
              />
              <path
                fill="#FBBC05"
                d="M24 44c5.2 0 10-1.7 13.7-4.7l-6.3-5.2C29.6 36.9 27 38 24 38c-6.1 0-11.3-4.1-13.2-9.6l-7 5.4C7.9 39.9 15.4 44 24 44z"
              />
              <path
                fill="#EA4335"
                d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2l-7 5.4C17.2 41.9 20.4 44 24 44c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z"
              />
            </g>
          </svg>
          <span></span>
        </button>
        <button
          className="linkedin"
          onClick={() => setUser(SampleAuth.signInWithLinkedIn())}
        >
          <svg width="20" height="20" viewBox="0 0 448 512">
            <path
              fill="#fff"
              d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.8 13.4-2.8 21.3V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z"
            />
          </svg>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default App;
