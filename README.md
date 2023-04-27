# nethelper_react
This repository contains the code for building the Nethelper website.

## Prerequisites
Before starting, you will need to:
- Compile the `*.wasm` file using the `nethelper_wasm` respository
- Build and run `nethelper_rest` by following the instructions in the `nethelper_rest` repository

## Deployment
### Debug Mode
To run the website locally in debug mode:
1. In the project's root folder, run `npm install` to install the required dependencies
2. Run the website with `npm start`

### Release Mode
To deploy the website in release mode:
1. In the project's root folder, run `npm install` to install the required dependencies
2. Build the project with `npm run build`
3. Install a local server with `npm install -g serve`
4. Launch the website with `serve -s build`
5. The `build` folder will contain the production-ready website files.

Note: Although other local servers can be used, `serve` has been found to work reliably without issues.