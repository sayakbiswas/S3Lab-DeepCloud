# Deep Cloud Web #

To apply Jupyter Notebook customization copy the contents of Jupyter Notebook Changes/.jupyter to /home/<user>/.jupyter folder.

The following assumes a basic familiarity with webpack, npm package management, express.js servers and React.js.

## Downloading and Setup for Development:
1. Clone the repository using `git clone --recursive https://bitbucket.org/s3lab/web.git`.
2. Change directory into `Web/UI`.
3. Execute `npm install`. This will install the required dependencies for the project.
4. To run the project in a local server, execute `npm start`. This runs the project in a local webpack-dev server. It should automatically open the url in a browser window. It also supports hot-reloading meaning as soon as you make changes to the code, it is visible in the browser on refresh; no need to restart the server.

## Setup for Deployment:
1. Once the changes are done, push to the git repository using `git push origin master`.
2. SSH into the server and clone into a folder as above. If the code is already present in the server do a `git pull` to get the latest changes.
3. Then execute `npm install`. If it doesn't automatically run the post-install script, also execute `npm run-script postinstall`.
4. To start the server execute `npm run-script prod` or `npm run-script prod &` to have it in the background. This is setup to execute on port 80.


