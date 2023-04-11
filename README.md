# React 18 Notes

> _QUESTION -- members of an object are properties or methods (functions) ? correct terminology?_

<br/>

[**Markdown Best Practise**](https://www.markdownguide.org/basic-syntax#headings)
<br/>

### Get Started

```shell
yarn dev // npm run dev
```

<br/>

## Getting Started With React

Browser takes HTML code and creates tree-like structure called Document Object Model (DOM) - use JS to change page content

- Components help us write:
  - reusable
  - modular
  * organised code

## Creating a React App

```
npm create vite@latest
> y
> React
> TypeScript

cd [app]

npm i // install

code . // or open on VS code

```

## Styling Components

### Icons

[React Icons](https://react-icons.github.io/react-icons)

<br/>

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

- Keep changes out of the render phase or put var inside component

### Strict Mode

- Developer mode (not Production) - React Strict Mode (on by default) renders each component twice to check if components are 'pure' --> same input should result in the same output
- 2nd render used to update UI in dev mode (greyed out in console)

### Updating Objects

- Treat state objects like props, immutable (read-only)
- Have to create a new object to update object state --> new object or spread operator, then update member

```
const [person, setPerson] = {
    firstName: "Trevor",
    lastName: "Noah"
}

setPerson(...person, lastName: "McDonald")
```

### Updating Nested Objects

- Must spread object (shallow copy) and object inside object (deep copy)
- Hence why preffered to avoid deeply nested state object (flat is better)

```
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
