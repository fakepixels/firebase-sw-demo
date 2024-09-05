# Firebase + SW Demo

This is a demonstration application showcasing the integration of Firebase Authentication with Coinbase Smart Wallet functionality.

## Features

- Google Sign-In authentication using Firebase
- Coinbase Smart Wallet integration for creating and managing wallets
- Responsive UI with Tailwind CSS
- Next.js framework for server-side rendering and routing

## Technologies Used

- Next.js
- React
- Firebase (Authentication)
- Wagmi (Ethereum interactions)
- Tailwind CSS
- TypeScript

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your Firebase project and add the configuration to `utils/firebaseConfig.ts`
4. Set up your Wagmi configuration in `wagmi.ts` (ensure Coinbase Wallet connector is configured)
5. Run the development server:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: React components
  - `Auth/`: Authentication-related components
  - `CreateWalletButton.tsx`: Coinbase Smart Wallet creation button
  - `WelcomeModal.tsx`: Modal displayed after user sign-in
- `lib/`: Firebase initialization
- `utils/`: Utility functions and configurations
- `styles/`: Global styles and Tailwind CSS configuration

## Key Components

- `SignInButton`: Handles Google Sign-In
- `SignOutButton`: Handles user sign-out
- `CreateWalletButton`: Initiates Coinbase Smart Wallet creation
- `WelcomeModal`: Displays a welcome message and wallet creation option

## Authentication Flow

1. User clicks "Sign in with Google" button
2. Firebase handles authentication
3. Upon successful sign-in, a welcome modal is displayed
4. User can create a Coinbase Smart Wallet from the modal or main page

## Wallet Integration

- The app uses [Coinbase Smart Wallet](https://smartwallet.dev).

## Notes

- Ensure all required environment variables are set for Firebase and Ethereum network configurations
- The app is set up to use the Ethereum mainnet, adjust the configuration in `wagmi.ts` if needed
