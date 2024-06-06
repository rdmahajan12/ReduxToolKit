import { createSlice } from "@reduxjs/toolkit";
import { clearUser } from "../actions";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    // clearUser() {
    //   return [];
    // },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(clearUser, () => {
      return [];
    });
  },
});

export default UserSlice.reducer;
export const { addUser, deleteUser } = UserSlice.actions;
