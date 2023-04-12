# React 18 Notes

> _QUESTION -- members of an object are properties or methods (functions) ? correct terminology?_

<br/>

<details>

<summary> Terminology
</summary>

### Terminology

- hot module replacement (hmr)
- Minified - minimise
- Immuatable - unchangeable

  - Mutate - change
  - Mutable - changeable
    <br/>

  React - JS library for creating dyamic + interactive UI

  - Library [tool]: Tool providing specific fn-ality

- Framework [toolset] (Vue / Angular)
  - Set of tools & guidelines for building apps
- Other Libraries
  - Routing (React Router?)
  - HTTP calls
  - Managing App State (Redux)
  - Internationalistation
  - Form Validation
  - Animations
  </details>

<details>
<summary> Resources</summary>

## Resources

[Babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwCwjAfAEgpgNnA9gAgOqIE5wCbAPTgRA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.21.4&externalPlugins=&assumptions=%7B%7D)

[**Markdown Best Practise**](https://www.markdownguide.org/basic-syntax#headings)
<br/>

React Dev Tools (Chrome Extension) > Components > View Source for this element / Inspect the matching DOM element
<br/>

### Principles

Separation of Concerns <br/>
_Styles / markup / logic can be in a single file_ <br/>
Specific functionality should be divided into distinct functional areas

- Modular
- Easier to
  - understand
  - maintain
  - modify
  </details>

<br/>

## React 18 Notes

<details>
<summary> Getting Started With React
</summary>

## Getting Started With React

Browser takes HTML code and creates tree-like structure called Document Object Model (DOM) - use JS to change page content

- Components help us write:

  - reusable
  - modular

  * organised code

  JSX: describe UI w/ HTML & JS

  - create dynamic content

### How React Works

Key files

> index.html <br/>
> main.tsx

<br/>

## Creating a React App

equivalent to npx

yarn create equates to a global install

```shell
npm create vite@latest
> y
> React
> TypeScript

cd [app-name]

npm i // install

code . // or open on VS code

```

## Styling Components

### Icons

[React Icons](https://react-icons.github.io/react-icons)

<br/>

</details>

<details>
<summary> Building Components
</summary>

## Building Components

```shell
npm i bootstrap@[version number]
```

import bootstrap in main.tsx

### State Vs Props

| State                     | Props                     |
| ------------------------- | ------------------------- |
| Data managed by component | Input passed to component |
| Similar to local var      | Similar to fn args        |
| Mutable                   | Immutable                 |
| Cause a re-render         | Cause a re-render         |

<br/>
</details>

<details>
<summary> Styling Components
</summary>

## Styling Components

### Vanilla CSS

_Plain CSS_

### CSS Modules

_Modules in file name_

### CSS-in-JS

_Complex, in the same file_

- Libraries
  - Styled components
  - Emotion
  - Polished

Styled components:

```shell
npm i styled-components
npm i @types/styled-components
```

import

### In-line Styles

_Can become cluttered_

### UI Libraries

- Bootstrap / Daisy UI
  - styled components
- Material UI
  - Google product design
- Chakra UI
  - React component UI built on Tailwind
- **Tailwind CSS**
  - utility-first - classes to style components

### React Icons

```shell
npm i react-icons@[latest version]
```

import

<br/>

</details>

<details>
<summary> Managing Component State
</summary>

## Managing Component State

### Understanding the State Hook

- React updates state asynchronously (in a fn block it will execute all together, console log may be run first before state is updated)
- State is stored outside components (kept in memory while component is visible, saved on re-render unlike variables)
- Hooks must be used at the top level of components (can't be nested in fns as it will affect the order of values for React to map to each useState hook)

### Choosing the state structure

- Group related variables in an object
- But avoid deeply nested objects for state > 2
- Concatenate / formlate using variables not state

### Keeping Components Pure

- Same input (props) will result in the same output (JSX), therefore React can skip re-rendering
  _QUESTION -- what about a dice producing random results, would that be diff??_
- Keep changes out of the render phase or put var inside component

### Strict Mode

- Developer mode (not Production) - React Strict Mode (on by default) renders each component twice to check if components are 'pure' --> same input should result in the same output
- 2nd render used to update UI in dev mode (greyed out in console)

### Updating Objects

- Treat state objects like props, immutable (read-only)
- Have to create a new object to update object state --> new object or spread operator, then update member

```typescript
const [person, setPerson] = {
    firstName: "Trevor",
    lastName: "Noah"
}

setPerson(...person, lastName: "McDonald")
```

### Updating Nested Objects

- Must spread object (shallow copy) and object inside object (deep copy)
- Hence why preffered to avoid deeply nested state object (flat is better)

```typescript
const [person, setPerson] = {
    firstName: "Trevor",
    lastName: "Noah",
    address: {
        street: "123 Sesame Street",
        state: "New York"
    }
}

setPerson(...person, address: {...person.address, town: "Chicago"})
```

### Updating Arrays

</details>

<details> 
<summary> Building Forms ...
</summary>

</details>

<details>
<summary> Connecting To The Backend ...
</summary>

</details>

<details>
<summary> Project: Building a Video Game Discovery App ...
</summary>

</details>

<br/>

## Common Mistakes

Check for brackets!

```typescript
onClick={handleClick}

onClick={() => handleClick()}

onClick={() => {
  handleClick();
}}
```

- **return** maps, components etc. which not in single-line shorthand

```typescript
array.map(a =>
return {abc}
)
```

st else??