### VS Code Tips

Select item to import

> Cmd + .

shorthand: tab to complete; then add id etc.
_(ignore spaces, auto-save forces this here)_

```typescript
div.mb - 3 > label.form - label + input[(type = number)].form - control; // > to  nest; + next to
button.btn.btn - primary; // to add multiple classes
```

### React

```typescript
{
  ("  "); // add white space between elements when JSX compiled
}
```

### TypeScript

```Typescript
const {
    register,
    handleSubmit,
    formState: { errors }, // Nested destructuring
  } = useForm<TExpense>();
```
