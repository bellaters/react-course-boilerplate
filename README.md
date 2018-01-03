## GETTING STARTED:
* DO NOT MISS THE .babelrc at project root!
* To get the app running :
    1. Go to project root
    2. run ``` $ yarn add live-server babel-cli@6.24.1 ```

    3. * run ``` $ yarn run dev-server ``` for local developer mode
        * run ```$ yarn run build:prod ``` for prod mode

### RERUN dev-server whenever YOU EDIT 
        webpack.config.js

* To change your entry point of your app go to
        webpack.config.js and edit entry:  './src/app.js'


Goal of this app can be seen here:
http://expensify.mead.io/

Origin Source Code:
https://github.com/andrewjmead/react-course-2-indecision-app

#### To install a modul with yarn run from project root
 * ```$ yarn add <modulname/>@<version/>```
 * for example: ```$yarn add react-redux@5.0.5```

**->** modul will be installed and package.json will be adatpted.


#### Basics to get environment started
* https://code.visualstudio.com/docs/?dv=osx
* https://yarnpkg.com/lang/en/
* https://babeljs.io/

## Testing
To run your test cases run from project root
* ```$ yarn test```
* **NOTE:** you need to have installed ```jest```
* **NOTE:** your test files should be in ```src/tests``` and end with ```.test.js```
        
        $ yarn test --  --watch 
        Watch Usage
        › Press a to run all tests.
        › Press p to filter by a filename regex pattern.
        › Press t to filter by a test name regex pattern.
        › Press q to quit watch mode.
        › Press Enter to trigger a test run.

## Other Links:
### Additional stuff on top:
* https://reacttraining.com/react-router/
* https://github.com/reactjs/react-redux
* https://regex101.com/
* https://momentjs.com/
* https://github.com/airbnb/react-dates
* http://expressjs.com/
* https://www.heroku.com/
* https://firebase.google.com/

## Heroku
after setup account at heroku and install heroku-cli, console:
* ```$ heroku login```   -> login with email and password of your (fresh) account
* ```$  heroku create react-course-foo-expensify-app ```
Creating ⬢ react-course-foo-expensify-app... done
https://react-course-foo-expensify-app.herokuapp.com/ | https://git.heroku.com/react-course-foo-expensify-app.git
-> New heroku repository!

* Push to heroku repository
        * ```$ git push heroku master```
        --> see your applications via 
        * ```$ heroku open```
        * For trouble solving use 
        * ```$ heroku logs```

## Firebase
you need to have a firebase account. After setup, provide the respective credentials for your development- and test-db via ```<project-root>/.env.development``` and ```<project-root>/.env.development```. The test-db is used for providing and testing data via test-runs. The development-db is used during your local work and from your heroku app. To configure heroku use ```heroku config:set KEY=value```. The following values should be provided:
* FIREBASE_API_KEY
* FIREBASE_AUTH_DOMAIN
* FIREBASE_DATABASE_URL
* FIREBASE_PROJECT_ID
* FIREBASE_STORAGE_BUCKET
* FIREBASE_MESSAGING_SENDER_ID
	
