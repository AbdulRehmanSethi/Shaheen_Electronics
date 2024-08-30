import { useState } from 'react';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

 const handleSignIn = (e: React.FormEvent<HTMLFormElement>): void => {
   e.preventDefault();
   console.log("Email:", email);
   console.log("Password:", password);
   console.log("Remember me:", rememberMe);
 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md justify-center item-center">
        <div className="flex flex-col items-center mb-6">
          <img src="/vite.svg" alt="Logo" className="w-16 mb-4" />
          <h1 className="text-2xl font-bold text-black">
            Pro Invoice
          </h1>
        </div>
        <form onSubmit={handleSignIn} className="space-y-4">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Sign in to your account
          </h2>
          <div>
            <label className="block text-left text-gray-700">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-left text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center text-left">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
              className="mr-2 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="text-gray-700">Remember me</label>
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
