export const WEB_ROUTES = {
  homepage: '',
  pokemon: {
    path: 'pokemon/list',
    title: 'Pokémon List',
    favorites: {
      path: 'pokemon/favorites',
      title: 'Pokémon favorites',
    },
  },
  errors: {
    root_path: 'error',
    e404: { path: '404', title: 'Not Found' },
    e500: { path: '500', title: 'Internal Server' },
  },
};
