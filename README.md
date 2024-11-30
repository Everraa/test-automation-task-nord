# Test automation task
This repository contains automated tests using Playwright (typescript). Follow the steps below to clone, set up, and execute the tests.

## Prerequisites
Ensure you have the following installed on your machine:
Node.js (Version 16 or higher)
Git 

## Clone the Repository
git clone https://github.com/Everraa/test-automation-task-nord.git

## Install Dependencies
npm install

## Install Playwright Browsers
npx playwright install

## To run Tests in: 
    1. Chromium - npm run tests:chrome
    2. Firefox - npm run tests:firefox
    3. Webkit - npm run tests:webkit

By default, all tests are run in headless mode (browsers will not open). To run tests in headed mode, modify the command by adding :headed at the end.