# DataGuru.ia

DataGuru.ia is a web application that leverages the Gemini API for cryptocurrency data. It is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to access, analyze, and visualize cryptocurrency data provided by Gemini.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Users can sign up, sign in, and sign out securely.
- **Real-time Data:** The application fetches real-time cryptocurrency data from the Gemini API.

## Installation

Follow these steps to set up and run DataGuru.ia on your local machine:

1. **Clone Repository:**

   ```bash
   git clone https://github.com/yourusername/DataGuru.ia.git
   ```

2. **Install Dependencies:**

   ```bash
    npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file in the root directory and provide the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   GEMINI_API_KEY=your_gemini_api_key
   GEMINI_API_SECRET=your_gemini_api_secret
   ```

4. **To Run Front End**

   ```bash
       npm run dev (in DataGuru folder)


   ```

5. **Run Development Server:**

   ```bash
   npm run server
   ```

6. **Open in Browser:**
   Navigate to `http://localhost:4000` in your browser.

## Usage

1. **Sign Up or Sign In:**

   - If you're a new user, sign up with a valid email address and password.
   - If you're an existing user, sign in with your credentials.

2. **Dashboard:**

   - Upon signing in, you'll be directed to your personalized dashboard.
   - Add your favorite cryptocurrencies to track their real-time data.

## Technologies

- **Frontend:**

  - React.js

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for database interaction)
- **API:**
  - Gemini API

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Make changes and commit (`git commit -am 'Add some awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
