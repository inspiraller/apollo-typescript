import { gql } from 'apollo-server';

const typeDefs = gql`
  type Player {
    id: String
    name: String
  }
  type Query {
    players: [Player]!
  }

  input PlayerInput {
    name: String
  }

  type Mutation {
    addPlayer(player: PlayerInput!): Player
  }
`;

/* for posting data
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

*/

// add this into queryVariables
/*
{
  "name": "steve"
}
*/

export default typeDefs;
