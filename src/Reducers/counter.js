import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//action creators
// export const increment = createAction("counter/increment");
// export const decrement = createAction("counter/decrement");
// export const incrementByAmount = createAction("counter/incrementByAmount");
// export const clearValue = createAction("counter/clearValue");

// //creating a reducer
// const initialState = { value: 0 };

// export const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.value++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.value--;
//     })
//     .addCase(incrementByAmount, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(clearValue, (state, action) => {
//       state.value = 0;
//     });
// });

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    clearValue(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, clearValue } =
  counterSlice.actions;
export default counterSlice.reducer;
