export const selectCampers = ({ campers }) => {
  return campers.items;
};

export const selectFavorites = state => state.favorites.items;

export const selectFilters = ({ filters }) => filters;
