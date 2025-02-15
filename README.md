# Gmail Clone App

This project is a simple clone of the Gmail interface, built using React and TypeScript. It aims to replicate the basic functionality of viewing emails in a user-friendly manner.

## Project Structure

The project consists of the following main components:

- **src/components/EmailList.tsx**: Displays a list of emails with titles and senders.
- **src/components/EmailView.tsx**: Shows the details of the selected email in a scrollable area.
- **src/components/Sidebar.tsx**: Provides navigation and additional options in a sidebar.
- **src/styles/styles.css**: Contains the CSS styles for the application, designed to resemble the Gmail UI.
- **src/App.tsx**: The main component that combines `EmailList` and `EmailView` to create the overall layout.
- **src/index.tsx**: The entry point of the application, where the React app is mounted to the DOM.
- **public/index.html**: The HTML template for the application, providing the basic structure for mounting the React app.
- **tsconfig.json**: TypeScript configuration file specifying compiler options and files to compile.
- **package.json**: npm configuration file listing project dependencies and scripts.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd gmail-clone-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- View a list of emails with titles and senders.
- Click on an email to view its detailed content.
- Scrollable area for email content to enhance user experience.
- Sidebar for navigation and additional options.

## Future Improvements

- Implement email search functionality.
- Add user authentication.
- Enhance the UI with more features similar to Gmail.

## License

This project is licensed under the MIT License.