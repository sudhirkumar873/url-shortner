import React, { useState } from 'react';

const AuthenticationForm: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Perform authentication logic here, for simplicity, just check if both fields are non-empty
    if (userId.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter both user ID and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Any other logout logic can go here
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userId}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default AuthenticationForm;
