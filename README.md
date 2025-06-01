## Available Scripts

Note: You probably only need the first three commands below. In your terminal, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console. Once you're done editing run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

After building, run this to deploy to live website.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Troubleshooting 

If you see something like this: "ProcessError: error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400", try
```bash
git config --global http.postBuffer 524288000
```

This essentially increases the maximum buffer size of POST operations. This means you get to send more data before your deployment application has a breakdown.