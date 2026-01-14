@echo off
echo ========================================
echo   WinePair Setup Script
echo ========================================
echo.

echo Step 1: Checking for Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org
    pause
    exit /b 1
)
echo Node.js found!
echo.

echo Step 2: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo Dependencies installed!
echo.

echo Step 3: Creating environment file...
if not exist .env.local (
    copy .env.example .env.local
    echo Created .env.local from template.
    echo.
    echo IMPORTANT: Edit .env.local with your Stripe keys if you want payments.
    echo For now, the app will work without Stripe (premium button won't work).
    echo.
) else (
    echo .env.local already exists, skipping...
)
echo.

echo Step 4: Starting the development server...
echo.
echo ========================================
echo   Opening http://localhost:3000
echo   Press Ctrl+C to stop the server
echo ========================================
echo.
start http://localhost:3000
call npm run dev
