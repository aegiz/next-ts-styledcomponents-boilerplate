# Next.js + TypeScript + Styled components example

This is a tiny boilerplate that shows the usage of Next.js with TypeScript and Styled Components.

## Available commands

Execute the following commands to launch the development server:

```bash
# Install the dependencies of this project
npm i
# Laucnh dev server
npm run dev
```

Execute this command compile the project

```bash
npm build
```

## Folder architecture

### `build` folder

All the code after executing the build command will be placed there.

### `components` folder

This is where components used by more than one page or modules get placed.
Note that apart from the `Layout.tsx` file every component will always have it's own folder with an `index.tsx` file. This way it's easier to call it elsewhere.

### `pages` folder

This is where your main pages will be.
Usually within a page there are multiple sections (like a hero).
If this hero component is not in used anywhere else we will externalize it in the same page folder to minimize the size.

### `public` folder

This is where all the assets will be (including .jpg and .svg).

### `utils + utils/hooks` folders

The `utils` folder contains all the overly complicated piece of code (for example a date manipulator).
The hooks folder within it is a collection of useful hooks.

## Coding conventions

-   Any component which is used more than in one page should be externalizes to the `component` folder.
-   For a specific page if multiple component shares the same style they should be declare as Styled-components above the JSX (possibly use inheritance)
-   If we need a quick style fix on an element use the css property

## Naming conventions

### `components` folder

Use PascalCase (an uppercase letter at the beginning + camelCase)

### `pages` folder

Use lowercase and dashes (like URLs)

### `public` folder

Use lowercase and dashes (like URLs)

### `utils + utils/hooks` folders

Use camelCase

## Misc Notes

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.
