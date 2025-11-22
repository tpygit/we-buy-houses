# We Buy Houses

A React-based web application for a house buying service. The application features a landing page and an interactive questions page to help users get started.

## Tech Stack

- **React** 19.2.0
- **React Router DOM** 7.9.6
- **Create React App** 5.0.1

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd we-buy-houses
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

### `npm start`

Runs the app in development mode. The page will automatically reload when you make changes. You may also see lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode. See the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and filenames include hashes. Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and copy all configuration files and dependencies directly into your project.

## Project Structure

```
we-buy-houses/
├── public/          # Static files
├── src/
│   ├── pages/      # Page components (LandingPage, QuestionsPage)
│   ├── App.js      # Main app component with routing
│   ├── App.css     # App styles
│   └── index.js    # Entry point
├── package.json
└── README.md
```

## Git Commands

### Basic Workflow

```bash
# Check current status
git status

# View changes in files
git diff

# Stage all changes
git add .

# Stage specific files
git add <file-name>

# Commit changes
git commit -m "Your commit message"

# Push to remote repository
git push

# Pull latest changes from remote
git pull
```

### Branch Management

```bash
# List all branches
git branch

# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch to a new branch
git checkout -b <branch-name>

# Merge a branch into current branch
git merge <branch-name>

# Delete a branch
git branch -d <branch-name>
```

### Remote Repository

```bash
# View remote repositories
git remote -v

# Add a remote repository
git remote add origin <repository-url>

# Fetch from remote
git fetch

# Push to remote (first time)
git push -u origin <branch-name>

# Pull from remote
git pull origin <branch-name>
```

### Viewing History

```bash
# View commit history
git log

# View compact commit history
git log --oneline

# View changes in a specific commit
git show <commit-hash>
```

### Undoing Changes

```bash
# Unstage files (keep changes)
git reset <file-name>

# Discard changes in working directory
git checkout -- <file-name>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## Development Commands

### Dependency Management

```bash
# Install a new package
npm install <package-name>

# Install a dev dependency
npm install --save-dev <package-name>

# Update packages
npm update

# Check for outdated packages
npm outdated

# Remove a package
npm uninstall <package-name>
```

### Code Quality

```bash
# Run ESLint (if configured)
npm run lint

# Format code (if Prettier is configured)
npm run format
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally (requires serve)
npx serve -s build
```

### Troubleshooting

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version

# Check npm version
npm --version
```

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
