# nethelper_react
This repository contains the code for building the Nethelper website.

## How to deploy
Before doing anything is necessary to compile `*.WASM`, adjust the path in `package.json` and execute `npm install`
- **Debug**: Run locally in debug mode with `npm start` 
- **Release**: Run the following commands in the project's root folder
```
npm run build
npm install -g serve
serve -s build
```

