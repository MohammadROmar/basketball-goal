import { isColor } from '../is-color';
import type { Symbol } from '../../types/symbol';
import type { Cell } from '../../types/cell';
import type { MoveInfo } from '../../types/move-info';

export function handleMoveUp(cell: Cell, moveInfo: MoveInfo) {
  const { x, y, symbol } = cell;
  const { grid, prevGrid } = moveInfo;

  let offset = 0;
  let merged = false;
  const rows = grid.length;

  const column: Symbol[] = [];
  for (let i = 0; i < rows; i++) {
    column.push(prevGrid ? prevGrid[i][y] : grid[i][y]);
  }

  for (let i = 0; i < x; i++) {
    const cell = column[i];
    const nextCell = column[i + 1];

    if (isColor(nextCell) && (cell === '.' || cell === nextCell)) {
      column[i] = nextCell;
      column[i + 1] = '.';
      i = -1;
    }
  }

  for (let i = x; i >= 0; i--) {
    if (column[i] === symbol) {
      offset = i - x;
      break;
    }
  }

  for (let i = x - 1; i >= 0; i--) {
    const cell = prevGrid ? prevGrid[i][y] : grid[i][y];

    if (cell === symbol) {
      merged = true;
      break;
    } else if (cell === '#' || (isColor(cell) && cell !== symbol)) {
      break;
    }
  }

  return { offsetX: 0, offsetY: offset, merged };
}