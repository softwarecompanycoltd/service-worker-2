# Service Worker Caching App

This project demonstrates how to implement a service worker with caching functionality for both HTTP and HTTPS. The application is structured to provide a clear separation of concerns, with distinct files for HTML, JavaScript, CSS, and service worker logic.

## Project Structure

```
service-worker-caching-app
├── src
│   ├── index.html       # Main HTML document
│   ├── main.js          # Application logic and service worker registration
│   ├── sw.js            # Service worker with caching functionality
│   └── styles.css       # Styles for the application
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd service-worker-caching-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   You can use a local server to serve the application. For example, you can use `http-server` or any other static server.

4. **Access the application:**
   Open your browser and navigate to `http://localhost:PORT` (replace `PORT` with the port number used by your server).

## Usage Guidelines

- The service worker will cache resources for offline access.
- Ensure that your browser supports service workers and that they are enabled.
- You can test the caching functionality by going offline and refreshing the page.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.