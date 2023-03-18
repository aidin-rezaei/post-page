import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [undefined,12,12],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Darkmode: (state,action) => {
      state.value = action.payload
    },

  },
})

export const { Darkmode } = counterSlice.actions

export default counterSlice.reducer