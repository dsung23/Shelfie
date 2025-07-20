# Shelfie

Shelfie is a modern reading list app built with React Native, Expo, and Appwrite. It allows users to manage their personal book collection, track reading progress, and securely store data in the cloud. The app features authentication, real-time updates, and a clean, themed UI.

## Features
- User authentication (register, login, logout)
- Add, view, and delete books
- Real-time updates for book changes
- Themed UI components
- Profile management
- Secure cloud storage with Appwrite

## Technologies Used
- React Native & Expo
- Appwrite (Cloud backend)
- Expo Router (navigation)
- @expo/vector-icons (icons)

## Getting Started

### Prerequisites
- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/dsung23/Shelfie.git
   cd Shelfie
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   expo start
   ```

### Appwrite Setup
- Ensure you have an Appwrite project and update the endpoint, project ID, and platform in `lib/appwrite.js`.
- Set up your database and collections as required by the app.

## Folder Structure
```
app/           # Screens and routes
components/    # Reusable UI components
context/       # React Context providers (User, Books)
hooks/         # Custom hooks
lib/           # Appwrite client setup
assets/        # Images and icons
```

## Usage
- Register or log in to manage your reading list.
- Add new books, view details, and delete books.
- Access your profile and update information.
