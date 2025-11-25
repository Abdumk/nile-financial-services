# Windows Setup Guide

## If You Get PowerShell Script Execution Error

If you see an error like "running scripts is disabled on this system", follow these steps:

### Option 1: Run as Administrator (Recommended)

1. Right-click on **PowerShell** and select **Run as Administrator**
2. Run this command:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Type `Y` and press Enter
4. Close PowerShell and open a new terminal

### Option 2: Use Command Prompt Instead

1. Open **Command Prompt** (cmd) instead of PowerShell
2. Navigate to the project folder:
```cmd
cd nile-financial-services
```
3. Run the installation:
```cmd
npm install
```
4. Start the dev server:
```cmd
npm run dev
```

### Option 3: Use Git Bash

If you have Git installed:
1. Right-click in the project folder
2. Select **Git Bash Here**
3. Run:
```bash
npm install
npm run dev
```

## Complete Installation Steps

### Step 1: Check Node.js Installation
Open Command Prompt and run:
```cmd
node --version
npm --version
```

If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Install the LTS version
- Restart your computer

### Step 2: Navigate to Project
```cmd
cd path\to\nile-financial-services
```

### Step 3: Install Dependencies
```cmd
npm install
```

This will install:
- React
- React Router DOM
- React Icons
- Tailwind CSS
- Vite
- And all other dependencies

### Step 4: Start Development Server
```cmd
npm run dev
```

### Step 5: Open in Browser
The terminal will show a URL like:
```
Local: http://localhost:5173
```

Open this URL in your browser.

## Common Issues and Solutions

### Issue: "npm is not recognized"
**Solution**: Node.js is not installed or not in PATH
- Reinstall Node.js from nodejs.org
- Restart your computer

### Issue: Port 5173 is already in use
**Solution**: 
- Close other applications using that port
- Or Vite will automatically use a different port

### Issue: Module not found errors
**Solution**:
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Issue: Build fails
**Solution**:
```cmd
npm cache clean --force
npm install
npm run build
```

## Building for Production

```cmd
npm run build
```

The production files will be in the `dist` folder.

## Stopping the Development Server

Press `Ctrl + C` in the terminal, then type `Y` and press Enter.

## Need More Help?

- Check the README.md file
- Check the QUICKSTART.md file
- Visit: https://vitejs.dev/guide/

## System Requirements

- Windows 7 or later
- Node.js 16 or later
- 4GB RAM minimum
- Modern web browser (Chrome, Firefox, Edge)

---

**Happy coding! 🚀**
