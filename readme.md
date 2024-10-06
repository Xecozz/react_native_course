# React Native App with Appwrite and Expo

This project is a React Native application using Expo and Appwrite for backend services. The project is structured to include various components, contexts, and configurations to help you get started quickly.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn)
- Expo CLI
- Appwrite server

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your Appwrite configuration:

   ```env
   APPWRITE_ENDPOINT=https://your-appwrite-endpoint
   APPWRITE_PLATFORM=your-platform-id
   APPWRITE_PROJECT_ID=your-project-id
   APPWRITE_DATABASE_ID=your-database-id
   APPWRITE_USER_COLLECTION_ID=your-user-collection-id
   APPWRITE_VIDEO_COLLECTION_ID=your-video-collection-id
   APPWRITE_STORAGE_ID=your-storage-id
   ```

4. **Start the Expo server:**

   ```sh
   expo start
   ```

## Usage

- **Components:** Reusable UI components are located in the `components/` directory.
- **Contexts:** Context providers for managing global state are located in the `context/` directory.
- **Lib:** Utility functions and configurations, including Appwrite setup, are located in the `lib/` directory.

## Configuration

- **Babel:** Babel configuration is in `babel.config.js`.
- **TypeScript:** TypeScript configuration is in `tsconfig.json`.
- **Tailwind CSS:** Tailwind CSS configuration is in `tailwind.config.js`.
