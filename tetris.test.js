const {
  blocks,
  createBoard,
} = require('tetrisjs');

describe('tetrisjs', () => {
  describe('createBoard', () => {
    test('create tetris board with 2x2 size', () => {
      const board = createBoard(2, 2);
      expect(board).toEqual([[0, 0], [0, 0]]);
    });

    test('create tetris board with 2x3 size', () => {
      const board = createBoard(2, 3);
      expect(board).toEqual([[0, 0, 0], [0, 0, 0]]);
    });
  });
  describe('blocks', () => {
    test('block:0', () => {
      expect(blocks[0]).toEqual([[1, 1], [1, 1]]);
    });
  });
});
