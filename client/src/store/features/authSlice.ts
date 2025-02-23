import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { userId: string; } = {
  userId: localStorage.getItem("userId") ?? "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<{ userId: string; }>) => {
      state.userId = action.payload.userId;
      localStorage.setItem("userId", action.payload.userId);
    },
    removeId: (state) => {
      state.userId = '';
      localStorage.removeItem("userId");
    },
  },
});

export const { setId, removeId } = authSlice.actions;
export default authSlice.reducer;
