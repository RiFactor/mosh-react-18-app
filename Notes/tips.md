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
<ul className="list-group">
  {users.map((user) => (
    <li className="list-group-item" key={user.id}>
      {user.name}
      {"   "} // to add white space between adjacent elements for when JSX compiled
      <button
        className="btn btn-outline-danger"
        onClick={() => handleDelete(user)}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
```

### TypeScript

```Typescript
const {
    register,
    handleSubmit,
    formState: { errors }, // Nested destructuring
  } = useForm<TExpense>();
```
