import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // revisar combinaciones ganadoras para saber ganador
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(boardToCheck[a] && // 0 hay x u o
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ) {
          return boardToCheck[a]
        }
    }

    return null
  }

export const checkEndGame = (newBoard) => {
    //revisar caso de empate
    return newBoard.every((square) => square !== null)
  }