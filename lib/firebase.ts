import { getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initFirebase } from '../utils/firebaseConfig';

const app = !getApps().length ? initFirebase() : getApp();
export const auth = getAuth(app);