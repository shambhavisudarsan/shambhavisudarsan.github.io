## Instructions

### Setup

```shell
git clone https://github.com/shambhavisudarsan
cd cleanfolio
```

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) (optional) -

```shell
nvm install
nvm use
```

Or -

```shell
fnm install
fnm use
```

Install and run -

```shell
yarn
yarn start
```

### How to use

- Open `public/index.html` and replace -

`<title>Shambhavi Sudarsan</title>` with `<title>Your Name</title>`.

- Open `src/portfolio.js` and make changes.

### Deployment

- Go to `package.json` file and replace -

`"homepage": "https://shambhavisudarsan.github.io/"`

with `"homepage": "https://yourusername.github.io"`.

- Push the changes.

- Build and deploy -

```shell
yarn build
yarn deploy
```