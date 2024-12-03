import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// import { generateInitialGrid } from '../../utils/generate-initial-grid';
import type { Game } from '../../types/game';

const initialGameState: { data: Game } = {
  data: {
    rows: 3,
    cols: 5,
    grid: [
      ['blue', 'red', 'blue', 'blue', '.'],
      ['purple', '#', '#', 'red', '.'],
      ['.', 'blue', 'purple', 'red', 'blue'],
    ],
  },
  // data: { rows: 4, cols: 4, grid: generateInitialGrid(4, 4) },
};

const initialGameSlice = createSlice({
  name: 'initialGame',
  initialState: initialGameState,
  reducers: {
    setInitialGame(state, action: PayloadAction<Game>) {
      state.data = action.payload;
    },
  },
});

export default initialGameSlice.reducer;

export const { setInitialGame } = initialGameSlice.actions;
