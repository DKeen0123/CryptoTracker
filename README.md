## Crypto Tracker

### IN PROGRESS

A simple portfolio tracker that converts your FIAT balance into your chosen CryptoCurrency.

### Current state

The page is rendered with a balance that you can deposit and withdraw to, and the current balance will be live updated and converted into the current value of bitcoin.

![Alpha version (current)](./public/cryptotracker-alpha.png)

### to start it up

in your terminal:

```
npm install
npm run start
```

This will spin up a server on localhost:3000. Navigate there in your browser to use the application.

### Testing

The entirety of the application is test driven using Jest and enzyme. To run the tests, in your terminal type:

```
npm run test
```

to get a coverage report with the tests:

```
npm run test -- --coverage
```

### Technologies used:

The application is built in React with Redux, and currently uses sf-cookies to save the users balance locally.

It is also extensively tested using Jest and enzyme.
