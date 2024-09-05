import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-black hover:bg-gray-200 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}