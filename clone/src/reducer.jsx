export const initialState = {
    // empty datalayer slices
    user: null,
    playlists: [],
    playing: false,
    item: null,
  };

  const reducer = (
    state, 
    action // how to manipulate what's a data layer looks like set the user ya set the playlists
        ) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };}}

        export default reducer;