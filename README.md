# LoopQA
Technical Assessment for Automation

# 🔍 Playwright Test Suite

This repository contains a test suite powered by [Playwright](https://playwright.dev/)

## 📦 Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
-- Install Dependencies --

// Make sure you have Node.js installed (v20.17.0 or later recommended).
   ```bash
    $npm install
   ```

-- Install Playwright Browsers --

// This will download Chromium, Firefox, and WebKit.
   ```bash
    $npx playwright install
   ```

⚙️ Environment Configuration

// VERY IMPORTANT You must create a .env file in the root directory of the project before running any tests.
 * This has been included to demonstrate safe password handling
Inside the .env file please include the following line of code:
ADMIN_PASSWORD="password123"

🔐 Important: Do not commit your .env file to version control. It may contain sensitive information.
you may ensure of this by including the .env file inside of the .gitignore file

🚀 Running Tests

To execute the test suite:
```bash
   $npx playwright test
```

-- To open the Playwright UI Test Runner: --
   ```bash
   npx playwright test --ui
   ```

-- Alternatively -- 

If you are running this on VSCode, you can install the Playwright Test for VSCode extension (id: ms-playwright.playwright)

In order for the above to work you may need to update the dotenv version by running:
   ```bash
   $npm install dotenv
   ```

📁 Project Structure
├── tests/             # Playwright test files
├── playwright.config.ts
├── .env               # Your local environment config (not committed)
├── package.json
└── README.md
