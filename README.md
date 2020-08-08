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

***

# Prerequisites
- node 10
- windows (other os should work too but maybe variations)

# Steps to run 
#### Using cmd - Create a directory you want to work in and cd into it
```
mkdir myproject && cd myproject
```

#### Using cmd - clone this project into your folder
```
git clone https://github.com/inspiraller/apollo-typescript.git
```
Creates

```
myproject 
|_ apollo-typescript
```

#### Using cmd - npm install dependencies
```
npm i
```

#### run project 
```
npm start
```

#### visit browser  - chrome, firefox, internet explorer
localhost:4000

#### Add this to left hand side 
```javascript
query players {
  players {
    id
    name
  }
}

 mutation AddPlayer($name: String!) {
  addPlayer(
    player: {
      name: $name
    }
  ) {
    id
    name
  }
}
```
#### Press Play button - select - players
- View right hand side 
```javascript
{
  "data": {
    "players": [
      {
        "id": "alpha",
        "name": "terry"
      },
      {
        "id": "beta",
        "name": "pc"
      },
    ]
  }
}
```
#### Add query variable below by clicking - query variables 
- Add 
```javascript 
{
  "name": "john"
}
```

#### Press Play button - select - addPlayer
- See
```javascript
  {
    "id": "544ec342a36903fa047c",
    "name": "john"
  }
```
#### Press Play button - select - players - to see your added player
```javascript
{
  "data": {
    "players": [
      {
        "id": "alpha",
        "name": "terry"
      },
      {
        "id": "beta",
        "name": "pc"
      },
      {
        "id": "544ec342a36903fa047c",
        "name": "john"
      }
    ]
  }
}
```

# done!!!