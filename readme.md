# My eslint config

## Installataion

Install the package as a development dependency

```
npm i @andwin/eslint-config -D
```

Create a ´.eslintrc´ file with the following content

```
{
  "extends": "@andwin/eslint-config"
}
```

Add a test config to your `package.json`

```
"scripts": {
  "test" : "eslint ."
},
```

You can have multiple tests like this
```
"scripts": {
  "test" : "eslint . && jest"
},
```

Run the tests like this `npm test`

## Updating to the latest version of thsi package

```
npm i @andwin/eslint-config@latest -D
```
