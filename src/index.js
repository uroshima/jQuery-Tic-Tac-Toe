const View = require("./ttt-view.js");// require appropriate file
const Game = require("./ttt-view.js");// require appropriate file

  $(() => {
    const game = new Game();
    const rootEl = $(".ttt");
    new View(game, rootEl);
  });
