import React, { useEffect } from 'react';
import { BlackCreateWalletButton } from './CreateWalletButton';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

interface WelcomeModalProps {
  onClose: () => void;
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [user] = useAuthState(auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome to my app</h2>
        {user ? (
          <>
            <p className="mb-6">Create a smart wallet to claim your rewards.</p>
            <div className="flex flex-col items-center space-y-4">
              <BlackCreateWalletButton height={48} width={200} />
            </div>
          </>
        ) : (
          <p className="mb-6">Please sign in to create a wallet and claim your rewards.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}