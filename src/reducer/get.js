import { createSlice } from "@reduxjs/toolkit";
const cantidadDeBarras = 19;
export const userSlice = createSlice({
  name: "lista",
  initialState: {
    datos: [],
  },
  reducers: {
    setPeople: (state, action) => {
      state.datos = action.payload;
    },
  },
});
export const { setPeople } = userSlice.actions;
export default userSlice.reducer;
export function Valorrandom() {
  const generarValor = () => Math.round(Math.random() * (cantidadDeBarras + 1));
  return generarValor();
}

export const callapi = () => (dispatch) => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) => {
      res.results.map((element) => {
        element.ataque = Valorrandom();
        element.defensa = Valorrandom();
        element.vida = Valorrandom();
        element.agilidad = Valorrandom();
      });
      dispatch(setPeople(res.results));
    });
};

export const callapisearch = (path) => (dispatch) => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${path}`)
    .then((res) => res.json())
    .then((res) => {
      res.results.map((element) => {
        element.ataque = Valorrandom();
        element.defensa = Valorrandom();
        element.vida = Valorrandom();
        element.agilidad = Valorrandom();
      });
      dispatch(setPeople(res.results));
    });
};
