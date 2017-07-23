# Development Environment

## Prerequisite

Prior to setting up the Kitsu development environment make sure you have
the following elements installed:

* Node.js 6.x
* A [Zou development instance](https://zou.cg-wire.com/development/) up and running on port 5000

## Develop

To start modifying Kitsu, you need the sources:

```bash
git clone https://github.com/cgwire/kitsu.git
```

Then download the dependencies:

```bash
npm install
```

Finally start the development and see the result on http://localhost:8080:

```bash
npm run dev
```

## Build

If you want to build your code, simply run this command:

```bash
npm run build
```

If you need more details about the build:

```bash
npm run build --report
```


## Tests

Run tests with the following command:

```
npm run test:store
```