# React 18 Notes

> _QUESTION2 -- members of an object are properties or methods (functions) ? correct terminology?_

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

[React Hook Form](https://react-hook-form.com/get-started)

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
  _QUESTION2 -- what about a dice producing random results, would that be diff??_
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
<summary> Building Forms
</summary>

### Accessing Input Fields

> _Form.tsx_

_TODO rewrite with better understanding_
Must initialise every useRef obj w/ null
ref.current references DOM node
initial value passed will set current property
when ref created, no access to DOM node b/c React renders then DOM node created
therefore no initial value to provide
when react renders component + creates dom -> sets current property to dom node then null when removed from screen, either null or Dom must exist
no value () = undefined, lead to later issues

### Controlled Components

better for validation during typing (or can wait til the end)

> _ControlledForm.tsx_

- HTHML input fields have value prop to maintain own state

- Prevent State and input sources being out of sync: make React the source of truth.
  Set input value={stateVar}
- so that input field relies on state var value
- so that state is controlled (stored + updated in component state) by react, value no longer managed by DOM

### Managing Forms with React Hook Form

Submit handler: fn that receives data in a form

### Schema based Validation with Zod

Cube - yup

value props of input fields always return string so need to convert to desired type

### Unique ID per component instance

If you render multiple forms / fields on the page with the same name from separate components but need a unique id

```typescript
const id = useId();
```

basic QUESTION: does register need the id too? (why not)

concatenate id to label's hmtlFor and input's id
clicking on label will focus the cursor on the corresponding input

```typescript
<label htmlFor={"description" + id} className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id={"description" + id}
          type="text"
          className="form-control"
        />
```

</details>

<details>
<summary> Connecting To The Backend ...
</summary>

## Server

### Effect Hook

React Components should be pure - no side effects.
Must keep changes outside the render phase.

Side effects (nothing to do w/ returning JSX markup), changing something outside of the component

- Store data in local storage
- Call the server to fetch / save data
- Manually modify the DOM, changing state of DOM

Implementing side effects will make component impure, therefore execute code AFTER the component is rendered -> useEffect

Must be called at the top level of the component as with ref and state.
Can be called multiple times.

called after each render: local storage, DOm ele,ent, server anything that is impure - affects the DOM

### Effect Dependencies

Second argument of useEffect - Dependency Array:

- No dependency array - will execute useEffect after every render (infinite loop if updating state)
- [] React will only execute the useEffect hook once after the component's first render - never again
- [props, state var] will run everytime these change

### Effect Clean Up

Fn passed in Effect can optionally return fn for cleaning up that undo what effect was doing:

- Connect --> Disconnect
- Show modal --> Hide modal
- Fetching server data --> Abort fetch / ignore result

Developer Mode Strict Mode:
React renders each component twice, before second render.
React unmounts (removes component from the screen) hence clean up code executed

### Understanding HTTP Requests

HTTP - Hypertext Transfer Protocol: protocol for transferring data over the internet - poewrs the web

Browser --- Request---> (Web) Server <br/>
Browser <-- Response ---(Web) Server

HTTP Request / Response Structure:

- Header: Metadata
- Body: data

Response:

- HTML
- CSS
- Other resources

> Dev Tools > Network > (Filter) Fetch / XHR > <br/>
> Select request (duplication for React Strict Mode)

- Headers
  - Request URL: endpoint
  - Request Method: GET /
  - Status Code
  - Remote Address: IP address of target web server
- Response Headers
- Request Headers

- Preview: data returned from server
- Response: body of response

### Showing a Loading Indicator

```typescript
useEffect(() => {
  const controller = new AbortController();
  axios
    .get<TUsers[]>("https://jsonplaceholder.typicode.com/users", {
      // NTS: must remember array here
      signal: controller.signal,
    }) //incorrect end point to demo error;
    .then((res) => {
      // callback fn
      setUsers(res.data);
      setIsLoading(false); // React applies updates, then rerenders component so order doesn't matter here
    })
    .catch((error) => {
      if (error instanceof CanceledError) return;
      console.log(error);
      setErrors(error.message);
      setIsLoading(false);
    });
  // .finally(() => setIsLoading(false)); // QUESTION -- Mosh doesn't know why: doesn't work w/ strict mode on
  // setIsLoading(false); // can't do this here b/c calling the server is async - isn't blocking so this code will just run before waiting

  return () => controller.abort();
}, []);
```

Simulate slow network

> Inspect > Network > Throttling > Slow 3G

### Deleting (Updating) Data

| Optimistic Update                  | Pessimistic Update             |
| ---------------------------------- | ------------------------------ |
| 1. Update the UI                   | 1. Call the Server             |
| 2. Call the Server                 | 2. Update the UI if successful |
| Faster UX but must reset if failed | Slower UX                      |

</details>

<details>
<summary> Project: Building a Video Game Discovery App ...
</summary>

</details>

<br/>
