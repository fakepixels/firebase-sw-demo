"use client"

import { useEffect, useState } from 'react';
import SignInButton from '../components/Auth/SignInButton';
import SignOutButton from '../components/Auth/SignOutButton';
import WelcomeModal from '../components/WelcomeModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { useAccount } from 'wagmi';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (user && !loading) {
      setShowWelcomeModal(true);
    }
  }, [user, loading]);

  if (loading) {
    return <div className="font-sans">Loading...</div>;
  }

  if (error) {
    return <div className="font-sans">Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
        <p className="mb-4 font-sans text-lg">Demo app for using Firebase with Coinbase Smart Wallet</p>
        {user ? (
          <div>
            <p className="text-xl mb-4">Hello, {user.displayName}!</p>
            <SignOutButton />
            {isConnected && (
              <div className="mt-4 p-4 bg-green-100 rounded-lg shadow">
                <p className="text-lg font-bold text-green-800">Connected!</p>
                <p className="text-sm text-gray-700">Wallet Address: {address}</p>
              </div>
            )}
           
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
      {showWelcomeModal && (
        <WelcomeModal
          onClose={() => setShowWelcomeModal(false)}
        />
      )}
    </div>
  );
}