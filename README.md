# React 18 App Notes

[**Markdown Best Practise**](https://www.markdownguide.org/basic-syntax#headings)

### Get Started

```shell
yarn dev
```

### Icons

[React Icons](https://react-icons.github.io/react-icons)

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


```

// QUESTION -- members of an object are properties or methods (functions) ? correct terminology?
