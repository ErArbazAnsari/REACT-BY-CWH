import React from 'react';
import ReactDOM from 'react-dom';

// Create a functional component
function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is my first React app.</p>
        </div>
    );
}

// Render the component to the root element
ReactDOM.render(<App />, document.getElementById('root'));



Create React App
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:

npx create-react-app my-app
cd my-app
npm start