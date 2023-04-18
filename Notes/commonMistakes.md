## Common Mistakes

Check for brackets!

```typescript
onClick={handleClick}

onClick={() => handleClick()}

onClick={() => {
  handleClick();
}}

// THIS IS DIFFERENT
onClick={handleClick()} // the function is initalised on render

```

- **return** maps, components etc. when not in single-line shorthand

```typescript
array.map(a =>
return {abc}
)
```

st else??

Remember to put the new value inside the object with the spread

```typescript
onChange={(event) => {
              setExpense({ ...expense, category: event.target.value });
            }}
```

NOT

```typescript
onChange={(event) => {
setExpense({ ...expense }, category: event.target.value ); // this is wrong
}}
```
