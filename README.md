# Description
This is a boilerplate example. Implementing:
- apollo server / graphql
- one query and one mutation
- nodemon for debugging
- strict typescript (The types declared are primitive, and ideally would use a typing helper like typegraphql to reduce unncessary primitive writing, but for the case of this repo is to see the necessary detail in understanding the types used.)
- eslint
- babel instead of ts-node for flexibility in additional features (note, ts-node is faster and less cumbersome in addons)

# Todo: 
## Troubleshoot
Missing return type on function.eslint@typescript-eslint/explicit-module-boundary-types
Argument 'parent' should be typed.eslint@typescript-eslint/explicit-module-boundary-types

```javascript
Query: {
  players: () => players
}
```

## Write tests against example