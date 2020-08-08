import * as crypto from 'crypto';

// ####################################################
interface shapePlayer {
  id: string;
  name: string;
}

type shapeHandleError = null;

interface shapeResolver {
  Mutation: {
    addPlayer: (
      parent: null | undefined,
      args: {
        player: {
          name: string;
        };
      }
    ) => Promise<shapePlayer | shapeHandleError>;
  };
  Query: {
    players: () => Array<shapePlayer> | null | undefined | void;
  };
}

// ####################################################
const players: Array<shapePlayer> = [
  {
    id: 'alpha',
    name: 'terry'
  },
  {
    id: 'beta',
    name: 'pc'
  }
];

const generateId = (): string => crypto.randomBytes(10).toString('hex');

const handleError = (err: string): shapeHandleError => {
  console.warn(err);
  return null;
};

const resolvers: shapeResolver = {
  Query: {
    players: () => players
  },
  Mutation: {
    addPlayer: async (parent, args) => {
      const {
        player: { name }
      } = args;
      const arrPlayerNames: Array<string> = players.map((item) => item.name);
      if (arrPlayerNames.indexOf(name) === -1) {
        const id = generateId();
        const newPlayer = {
          name,
          id: id
        };
        players.push(newPlayer);
        return newPlayer;
      }
      return handleError(`players name: "${name}" already exists.`);
    }
  }
};

export default resolvers;
