Videos:

- [ ] Revisit CSS modules (Resolved by tailwind)
- [ ] Revisit CSS in JS

      Additional exercises:

- [ ] Implement immer in setState
  - [ ] Game.tsx
  - [ ] Cart.tsx

Refactor:

- TS: resolve types that are 'any' and correct
- Nav Bar / Contents Page to separately display components

```typescript
// TODO: try Immer here
setGame(
  produce((draft: any) => {
    // const name = draft.find((game: any) => game.player);
  })
);
```

Other:

- [ ] Typescript (Generics — later)
