export const initialState = {
    // empty datalayer slices
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove the value of token after debugging because we don't want to authenticate directly without getting token from spotify
    token: 'BQBQeTDxxr4iUG5CQdjkPPpGXPDpPWXFZ5jHThJlbz2shGr1TvRfng6eTkFFhbHqHMT9a0oAERxSpVwLk2xNii248wg3LP9ba-7pWjNQx4z-N2N3A6kI5wbXMoRRl8v-j5__9mkICw3CnFPgogDRAtPXIjgW7bHlqEIMVVC0Lkos9WBQuui_HcLBYCCWM1lRRUkNjClEzpqEkupHZE9V',
    // hame directly token mil rha tha to hamre playlist show nhi hoo rhi thi kyuki phele hame soptify ko apne app ko authenticate karana hoga
    // Playlists:null,
  };

  const reducer = (
    state, 
    action // how to manipulate what's a data layer looks like set the user ya set the playlists
        ) => {
    console.log(action);  // jo hamne action app.jsx me set kiye hai like set user wala uska object print
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

      case "SET_TOKEN":
            return {
              ...state,
              token :action.token,
            }
      case "SET_PLAYLISTS":
            return {
              ...state,
              playlists :action.playlists,
            };

        default: return state;
      }}

        export default reducer;