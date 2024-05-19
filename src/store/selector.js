export const selectFilter = ({ contacts }) => {
  return contacts.filter;
};

export const selectCampers = ({ campers }) => {
  return campers.items;
};

export const selectFavorites = state => state.favorites.items;
