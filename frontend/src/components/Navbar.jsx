import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  // --- Logout Handler ---
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/auth');
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold">JobFusion</div>
      <div className="space-x-6 text-lg">
        {user ? (
          <>
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition">About</Link>
            {/* We can even add the user's email and a logout button */}
            <span className="text-gray-300">({user.email})</span>
            <button 
              onClick={handleLogout} 
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth" className="hover:text-blue-300 transition">Login / Signup</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;