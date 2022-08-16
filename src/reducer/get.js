import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "lista", //alias aca
  initialState: {
    datos: [],
  },
  reducers: {
    setPeople: (state, action) => {
      state.datos = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setPeople } = userSlice.actions;
//console.log(userSlice);
export default userSlice.reducer;

export const callapi = () => (dispatch) => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) => {
      dispatch(setPeople(res.results));
    });
};
export const callapisearch = (path) => (dispatch) => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${path}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(setPeople(res.results));
    });
};
