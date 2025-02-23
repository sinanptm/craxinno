import { createSlice } from '@reduxjs/toolkit';

const initialState: { isAuthenticated: boolean } = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true", 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true"); 
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); 
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
