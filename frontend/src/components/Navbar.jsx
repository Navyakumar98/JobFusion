import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  
  const [user, setUser] = useState(auth.currentUser);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900 shadow-md' : 'bg-transparent'} text-white px-6 py-4 flex justify-between items-center`}>
      <div className="text-2xl font-bold">JobFusion</div>
      <div className="space-x-6 text-lg flex items-center">
        <Link to="/" className="hover:text-blue-300 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-300 transition">About</Link>
        {user ? (
          <>
            <span className="text-gray-300">({user.email})</span>
            <button 
              onClick={handleLogout} 
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth" className="border border-white rounded-full py-2 px-4 hover:bg-white hover:text-blue-900 transition">Login / Signup</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
