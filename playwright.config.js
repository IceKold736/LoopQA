import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config({ path: path.resolve(__dirname, './.env') });

export default defineConfig({
    testDir: './tests', // Directory where your tests are located
    timeout: 30000, // Timeout for each test in milliseconds
    use: {
        headless: true, // Run tests in headless mode
        baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/', // Base URL for tests
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'WebKit',
            use: { browserName: 'webkit' },
        },
    ],
});