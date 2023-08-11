```bash
$ npm install # or pnpm install or yarn install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

# Notes on solid

Liking it a lot so far!
Had some difficulty at first remembering that signals are functions and are accessed accordingly [ no: -myVar.prop- yes: myVar().prop ].
The official Transition component can break hiding things during development before the css is set up.
Had some issues with the official <For /> "control flow component" not re-rendering when
the signal it was dependent on was set as a new array (achieved by mapping over the old array and setting the singla to be the new array).
