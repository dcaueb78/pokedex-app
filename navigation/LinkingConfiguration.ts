import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Moves: {
            screens: {
              MovesScreen: 'moves',
            },
          },
          Pokemon: {
            screens: {
              PokemonScreen: 'pokemon',
            },
          },
          Items: {
            screens: {
              ItemsScreen: 'items',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
