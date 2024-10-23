import { createSlice } from "@reduxjs/toolkit";

const inititalsates = 0;

export const usuariosslices = createSlice({


  name: "usuariosslices",
  initialState: inititalsates,
  reducers: {
    alluser: ( state ,  action  ) => {},
    meternuevo: ( state, action ) => {},
  },
});



export const { alluser, meternuevo } = usuariosslices.actions;
