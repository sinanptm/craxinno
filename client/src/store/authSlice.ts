import { IUser } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { userId: string; user: IUser; } = {
  userId: localStorage.getItem("userId") ?? "",
  user: JSON.parse(localStorage.getItem("user") || "{}")
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<{ userId: string; }>) => {
      state.userId = action.payload.userId;
      localStorage.setItem("userId", action.payload.userId);
    },
    setUser: (state, action: PayloadAction<{ user: IUser; }>) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    removeId: (state) => {
      state.userId = '';
      localStorage.removeItem("userId");
    },
  },
});

export const { setId, removeId, setUser } = authSlice.actions;
export default authSlice.reducer;
