# JavaScript To-do List
Simple JavaScript application for creating a to-do list.

[View Demo](https://salty-everglades-11450.herokuapp.com/)

## Getting Started
### Prerequisities
* [Node.js](https://nodejs.org/)

### Installation
Download repository files and run the command below to install the necessary dependency packages:
```
# Install server-side packages
npm install

# Install client-side packages
cd client/
npm install
```

Run the following commands to launch a local development server or generate a production build:
```
# Launch local development server
npm run dev

# Create a production build
npm run build
```

Also included is a **"heroku-postbuild"** script to build and deploy to Heroku.

## Built with
* [Express.js (4.17.1)](https://www.npmjs.com/package/express/v/4.17.1)
* [Webpack (4.41.2)](https://www.npmjs.com/package/webpack/v/4.41.2)
* [Babel (7.7.4)](https://www.npmjs.com/package/@babel/core/v/7.7.4)
* [Font Awesome (5.11.2)](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)

## Usage
### Creating a task
Enter text into the input field and click the "pencil" button or press the Enter/Return key to create a task.

### Marking tasks complete/incomplete
Complete a task by clicking the checkbox to the left of the task label, moving the task into the "Completed Tasks" list.  Inversely, unchecking a task checkbox will move it back into the to-do list.

### Removing tasks
Individual tasks can be deleted by clicking the "x" button to the right of the task label. Additionally, all tasks in the "Completed Tasks" list can be removed by clicking the "Remove all" button.