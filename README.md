# Rijksmuseum galery

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer).

## Requirements

- Node
- pnpm
- git

## Project Setup

```sh
pnpm install
```

## API

the API used requires an API key.
Create a .env.local file in environments directory.
set VITE*API_KEY='\_your_API_key_value*'

For the build to work add the value to the .env file too.

The API used is marked as deprecated but is the only one providing search capability.
the art object response to a request contains an array of zoom level.
Each of this zoom level contains an array of tile allowing image construction.
I took the gamble that, for the resolution required in our application, there will always be only one tile.

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Getting generated lib

An artifact named 'dist' is built, containing the compiled Vue project.
You can retrieve this artifact in Github Actions by running the build action.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Directory structure

This application is organized by domains:

```
root
├─ src
│  ├─ domain-a
│  ├─ domain-b
│  ├─ …
│  └─ domain-z
└─ package.json
```

Each domain has its own responsibility:

```
.
├─ src
│  └─ domain-a
│     ├─ components
│     ├─ composables
│     ├─ pages
│     ├─ services
│     └─ types
└─ package.json
```

Currently, there is only one domain : gallery.

## File base routing

The application use File based routing.

## Possible improvements

- Ask API key in the app (optional config).
- Improve memory management (infinite query) as the museum has a very large collection.
- Implement a delay mechanism for image loading to prevent too many request errors.
- Add a clear button for the search bar input.
- Enhance http requests mocking in unit tests. Currently, it only handles simple URLSearchParams and GET requests.
- End to end test.
- Add an art object detail page
