//practice Game
import React, { useState } from "react";
import Board from "../components/Board";
import RecordBoard from "../components/RecordBoard";

import "../app.css";

const Practice = () => {
  const InitialState: any[][] = [
    [
      { piece: "BR", color: 1, isKing: 0 },
      { piece: "BN", color: 1, isKing: 0 },
      { piece: "BB", color: 1, isKing: 0 },
      { piece: "BQ", color: 1, isKing: 0 },
      { piece: "BK", color: 1, isKing: 1 },
      { piece: "BB", color: 1, isKing: 0 },
      { piece: "BN", color: 1, isKing: 0 },
      { piece: "BR", color: 1, isKing: 0 },
    ],
    [
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
    ],
    [
      { piece: "WR", color: 0, isKing: 0 },
      { piece: "WN", color: 0, isKing: 0 },
      { piece: "WB", color: 0, isKing: 0 },
      { piece: "WQ", color: 0, isKing: 0 },
      { piece: "WK", color: 0, isKing: 1 },
      { piece: "WB", color: 0, isKing: 0 },
      { piece: "WN", color: 0, isKing: 0 },
      { piece: "WR", color: 0, isKing: 0 },
    ],
  ];

  const [boardState, setBoardState] = useState<any[][]>(InitialState);
  const [player, setPlayer] = useState<number>(0); // 0 -> white, 1 -> black
  const [firstSelectedSquare, setFirstSelectedSquare] = useState<any[]>([]);
  const [toPlay, setToPlay] = useState<number>(0); // 0 -> white, 1 -> black
  const [isKingCheck, setIsKingCheck] = useState<any>({}); //0->white,1->black,-1->not in check
  const [lastMove, setLastMove] = useState<any>("");
  // const [whiteKingCheck, setWhiteKingCheck] = useState<boolean>(false);
  // const [blackKingCheck, setBlackKingCheck] = useState<boolean>(false);
  // const [select2, setSelect2] = useState<number[]>([]);
  // const [nParsent, setNParsent] = useState<any>({});

  const getSquareState = (row: number, col: number): any => {
    return boardState[row][col];
  };

  const togglePlayerView = (): void => {
    if (player === 0) {
      setPlayer(1);
    } else {
      setPlayer(0);
    }
    // let newboardState: any[][] = [];
    // for (let i = 0; i < 8; i++) {
    //     newboardState.push([]);
    //     for (let j = 0; j < 8; j++) {
    //         newboardState[i].push(boardState[7 - i][7 - j]);
    //     }
    // }
    // setBoardState(newboardState);
  };

  // const isMove = (
  //   //like castle->null , move->true , cut->false
  //   firstSelectedColor: number,
  //   secondSelectedColor: number
  // ): any => {
  //   return firstSelectedColor === undefined
  //     ? undefined
  //     : firstSelectedColor === secondSelectedColor
  //     ? null
  //     : secondSelectedColor === undefined
  //     ? true
  //     : false;
  // };

  const movePiece = (firstPiece: number[], secondPiece: number[]): void => {
    console.log(`${firstPiece} moves to ${secondPiece}`);
    let newBoardState: string[][] = boardState;
    [
      newBoardState[firstPiece[0]][firstPiece[1]],
      newBoardState[secondPiece[0]][secondPiece[1]],
    ] = [
      newBoardState[secondPiece[0]][secondPiece[1]],
      newBoardState[firstPiece[0]][firstPiece[1]],
    ];
    setBoardState(newBoardState);
    setToPlay((toPlay + 1) % 2);
    setLastMove({
      piece: firstSelectedSquare[3].piece,
      prevRow: firstPiece[0],
      prevCol: firstPiece[1],
      row: secondPiece[0],
      col: secondPiece[1],
    });
  };

  const cutPiece = (
    firstPiece: number[],
    secondPiece: number[],
    destination: number[]
  ): void => {
    console.log(
      `${firstPiece} cuts ${secondPiece} and moves to ${destination}`
    );
    let newBoardState: any[][] = boardState;
    [
      newBoardState[firstPiece[0]][firstPiece[1]],
      newBoardState[secondPiece[0]][secondPiece[1]],
      newBoardState[destination[0]][destination[1]],
    ] = [
      { piece: "" },
      { piece: "" },
      newBoardState[firstPiece[0]][firstPiece[1]],
    ];
    setBoardState(newBoardState);
    setToPlay((toPlay + 1) % 2);
    setLastMove({
      piece: firstSelectedSquare[3].piece,
      prevRow: firstPiece[0],
      prevCol: firstPiece[1],
      row: secondPiece[0],
      col: secondPiece[1],
    });
  };

  const possibleMoves = (
    currentBoardState: any[][],
    row: number,
    col: number
  ): { moves: any[]; cuts: any[] } => {
    if (currentBoardState[row][col].piece === "")
      return { moves: [], cuts: [] };
    let possibleMoves: any[] = [];
    let possibleCuts: any[] = [];
    // let enPassent: any[] = [];
    let color: number = currentBoardState[row][col].color;
    let piece: string = currentBoardState[row][col].piece;
    let player = piece.startsWith("W") ? 0 : 1;
    // let isKing:number = currentBoardState[row][col].isKing;
    if (piece === "BP") {
      if (row === 1) {
        if (currentBoardState[row + 1][col].piece === "") {
          possibleMoves.push([row + 1, col]);
          if (currentBoardState[row + 2][col].piece === "") {
            possibleMoves.push([row + 2, col]);
          }
        }
      } else {
        if (currentBoardState[row + 1][col].piece === "") {
          possibleMoves.push([row + 1, col]);
        }
      }
      if (col < 7 && row < 7) {
        if (
          currentBoardState[row + 1][col + 1].piece !== "" &&
          currentBoardState[row + 1][col + 1].color !== color
        ) {
          possibleCuts.push([row + 1, col + 1]);
        }
      }
      if (col > 0 && row < 7) {
        if (
          currentBoardState[row + 1][col - 1].piece !== "" &&
          currentBoardState[row + 1][col - 1].color !== color
        ) {
          possibleCuts.push([row + 1, col - 1]);
        }
      }
      if (row === 4) {
        //nparsent Possible
        if (lastMove.piece == "WP" && lastMove.prevRow === 6) {
          if (
            col + 1 <= 7 &&
            lastMove.col === col + 1 &&
            lastMove.row === row
          ) {
            //possible to cut is lastMove.row , lastMove.col
            //possition after cut is row+1 , col+1
            possibleCuts.push([row + 1, col + 1, lastMove.row, lastMove.col]);
          }
          if (
            col - 1 >= 0 &&
            lastMove.col === col - 1 &&
            lastMove.row === row
          ) {
            //possible to cut is lastMove.row , lastMove.col
            //possition after cut is row+1 , col-1
            possibleCuts.push([row + 1, col - 1, lastMove.row, lastMove.col]);
          }
        }
      }
    } else if (piece === "WP") {
      if (row === 6) {
        if (currentBoardState[row - 1][col].piece === "") {
          possibleMoves.push([row - 1, col]);
          if (currentBoardState[row - 2][col].piece === "") {
            possibleMoves.push([row - 2, col]);
          }
        }
      } else {
        if (currentBoardState[row - 1][col].piece === "") {
          possibleMoves.push([row - 1, col]);
        }
      }
      if (col < 7) {
        if (
          currentBoardState[row - 1][col + 1].piece !== "" &&
          currentBoardState[row - 1][col + 1].color !== color
        ) {
          possibleCuts.push([row - 1, col + 1]);
        }
      }
      if (col > 0) {
        if (
          currentBoardState[row - 1][col - 1].piece !== "" &&
          currentBoardState[row - 1][col - 1].color !== color
        ) {
          possibleCuts.push([row - 1, col - 1]);
        }
      }
      if (row === 3) {
        //nparsent Possible
        if (lastMove.piece == "BP" && lastMove.prevRow === 1) {
          if (
            col + 1 <= 7 &&
            lastMove.col === col + 1 &&
            lastMove.row === row
          ) {
            //possible to cut is lastMove.row , lastMove.col
            //possition after cut is row+1 , col+1
            possibleCuts.push([row - 1, col + 1, lastMove.row, lastMove.col]);
          }
          if (
            col - 1 >= 0 &&
            lastMove.col === col - 1 &&
            lastMove.row === row
          ) {
            //possible to cut is lastMove.row , lastMove.col
            //possition after cut is row+1 , col-1
            possibleCuts.push([row - 1, col - 1, lastMove.row, lastMove.col]);
          }
        }
      }
    }
    if (piece === "WB" || piece === "BB" || piece === "WQ" || piece === "BQ") {
      let bishopMove = bishopMoves(row, col, player, currentBoardState);
      possibleMoves = [...bishopMove[0], ...possibleMoves];
      possibleCuts = [...bishopMove[1], ...possibleCuts];
    } else if (piece === "BN" || piece === "WN") {
      let r: number = row;
      let c: number = col;
      //up
      if (r - 2 >= 0 && r - 2 <= 7) {
        if (c + 1 >= 0 && c + 1 <= 7) {
          if (currentBoardState[r - 2][c + 1].piece === "") {
            possibleMoves.push([r - 2, c + 1]);
          } else if (currentBoardState[r - 2][c + 1].color !== player) {
            possibleCuts.push([r - 2, c + 1]);
          }
        }
        if (c - 1 >= 0 && c - 1 <= 7) {
          if (currentBoardState[r - 2][c - 1].piece === "") {
            possibleMoves.push([r - 2, c - 1]);
          } else if (currentBoardState[r - 2][c - 1].color !== player) {
            possibleCuts.push([r - 2, c - 1]);
          }
        }
      }
      //down
      if (r + 2 >= 0 && r + 2 <= 7) {
        if (c + 1 >= 0 && c + 1 <= 7) {
          if (currentBoardState[r + 2][c + 1].piece === "") {
            possibleMoves.push([r + 2, c + 1]);
          } else if (currentBoardState[r + 2][c + 1].color !== player) {
            possibleCuts.push([r + 2, c + 1]);
          }
        }
        if (c - 1 >= 0 && c - 1 <= 7) {
          if (currentBoardState[r + 2][c - 1].piece === "") {
            possibleMoves.push([r + 2, c - 1]);
          } else if (currentBoardState[r + 2][c - 1].color !== player) {
            possibleCuts.push([r + 2, c - 1]);
          }
        }
      }
      //left
      if (c - 2 >= 0 && c - 2 <= 7) {
        if (r + 1 >= 0 && r + 1 <= 7) {
          if (currentBoardState[r + 1][c - 2].piece === "") {
            possibleMoves.push([r + 1, c - 2]);
          } else if (currentBoardState[r + 1][c - 2].color !== player) {
            possibleCuts.push([r + 1, c - 2]);
          }
        }
        if (r - 1 >= 0 && r - 1 <= 7) {
          if (currentBoardState[r - 1][c - 2].piece === "") {
            possibleMoves.push([r - 1, c - 2]);
          } else if (currentBoardState[r - 1][c - 2].color !== player) {
            possibleCuts.push([r - 1, c - 2]);
          }
        }
      }
      //right
      if (c + 2 >= 0 && c + 2 <= 7) {
        if (r + 1 >= 0 && r + 1 <= 7) {
          if (currentBoardState[r + 1][c + 2].piece === "") {
            possibleMoves.push([r + 1, c + 2]);
          } else if (currentBoardState[r + 1][c + 2].color !== player) {
            possibleCuts.push([r + 1, c + 2]);
          }
        }
        if (r - 1 >= 0 && r - 1 <= 7) {
          if (currentBoardState[r - 1][c + 2].piece === "") {
            possibleMoves.push([r - 1, c + 2]);
          } else if (currentBoardState[r - 1][c + 2].color !== player) {
            possibleCuts.push([r - 1, c + 2]);
          }
        }
      }
    }
    if (piece === "BR" || piece === "WR" || piece === "WQ" || piece === "BQ") {
      let r: number = row;
      let c: number = col;
      let rookMove = rookMoves(r, c, player, currentBoardState);
      possibleMoves = [...rookMove[0], ...possibleMoves];
      possibleCuts = [...rookMove[1], ...possibleCuts];
      // console.log(possibleMoves);
    }
    if (piece === "BK" || piece === "WK") {
      //up
      if (row + 1 >= 0 && row + 1 <= 7) {
        if (currentBoardState[row + 1][col].piece === "") {
          possibleMoves.push([row + 1, col]);
        } else if (currentBoardState[row + 1][col].color !== player) {
          possibleCuts.push([row + 1, col]);
        }
      }

      //down
      if (row - 1 >= 0 && row - 1 <= 7) {
        if (currentBoardState[row - 1][col].piece === "") {
          possibleMoves.push([row - 1, col]);
        } else if (currentBoardState[row - 1][col].color !== player) {
          possibleCuts.push([row - 1, col]);
        }
      }
      //left
      if (col + 1 >= 0 && col + 1 <= 7) {
        if (currentBoardState[row][col + 1].piece === "") {
          possibleMoves.push([row, col + 1]);
        } else if (currentBoardState[row][col + 1].color !== player) {
          possibleCuts.push([row, col + 1]);
        }
      }
      //right
      if (col - 1 >= 0 && col - 1 <= 7) {
        if (currentBoardState[row][col - 1].piece === "") {
          possibleMoves.push([row, col - 1]);
        } else if (currentBoardState[row][col - 1].color !== player) {
          possibleCuts.push([row, col - 1]);
        }
      }
      //up
      if (row + 1 >= 0 && row + 1 <= 7 && col + 1 >= 0 && col + 1 <= 7) {
        if (currentBoardState[row + 1][col + 1].piece === "") {
          possibleMoves.push([row + 1, col + 1]);
        } else if (currentBoardState[row + 1][col + 1].color !== player) {
          possibleCuts.push([row + 1, col + 1]);
        }
      }

      //down
      if (row - 1 >= 0 && row - 1 <= 7 && col - 1 >= 0 && col - 1 <= 7) {
        if (currentBoardState[row - 1][col - 1].piece === "") {
          possibleMoves.push([row - 1, col - 1]);
        } else if (currentBoardState[row - 1][col - 1].color !== player) {
          possibleCuts.push([row - 1, col - 1]);
        }
      }
      //left
      if (row + 1 >= 0 && row + 1 <= 7 && col - 1 >= 0 && col - 1 <= 7) {
        if (currentBoardState[row + 1][col - 1].piece === "") {
          possibleMoves.push([row + 1, col - 1]);
        } else if (currentBoardState[row + 1][col - 1].color !== player) {
          possibleCuts.push([row + 1, col - 1]);
        }
      }
      //right
      if (row - 1 >= 0 && row - 1 <= 7 && col + 1 >= 0 && col + 1 <= 7) {
        if (currentBoardState[row - 1][col + 1].piece === "") {
          possibleMoves.push([row - 1, col + 1]);
        } else if (currentBoardState[row - 1][col + 1].color !== player) {
          possibleCuts.push([row - 1, col + 1]);
        }
      }
    }
    return { moves: possibleMoves, cuts: possibleCuts };
    // return { moves: possibleMoves, cuts: possibleCuts ,enpassent:enPassent };
  };

  const rookMoves = (
    row: number,
    col: number,
    player: number,
    currentBoardState = boardState
  ): any[] => {
    // dir 0:up 1:down 2:left 3:right

    //up r--;
    //down r++;
    //left c++;
    //right c--;

    let possibleMoves: number[][] = [];
    let possibleCuts: number[][] = [];

    for (let dir: number = 0; dir < 4; dir++) {
      let r: number = row;
      let c: number = col;
      dir === 0 ? r-- : dir === 1 ? r++ : dir === 2 ? c++ : c--;
      while (r >= 0 && r <= 7 && c >= 0 && c <= 7) {
        if (currentBoardState[r][c].piece === "") {
          possibleMoves.push([r, c]);
        } else if (currentBoardState[r][c].color !== player) {
          possibleCuts.push([r, c]);
          break;
        } else {
          break;
        }
        dir === 0 ? r-- : dir === 1 ? r++ : dir === 2 ? c++ : c--;
      }
    }
    return [possibleMoves, possibleCuts];
  };

  const bishopMoves = (
    row: number,
    col: number,
    player: number,
    currentBoardState = boardState
  ): any[] => {
    let possibleMoves: number[][] = [];
    let possibleCuts: number[][] = [];
    for (let dir: number = 0; dir < 4; dir++) {
      let r: number = row;
      let c: number = col;
      if (dir === 0) {
        //main down
        r++;
        c--;
      } else if (dir === 1) {
        //main up
        r--;
        c++;
      } else if (dir === 2) {
        //other down
        r++;
        c++;
      } else if (dir === 3) {
        // other up
        r--;
        c--;
      }
      while (r <= 7 && r >= 0 && c >= 0 && c <= 7) {
        if (currentBoardState[r][c].piece === "") {
          possibleMoves.push([r, c]);
        } else if (currentBoardState[r][c].color !== player) {
          possibleCuts.push([r, c]);
          break;
        } else {
          break;
        }
        if (dir === 0) {
          //main down
          r++;
          c--;
        } else if (dir === 1) {
          //main up
          r--;
          c++;
        } else if (dir === 2) {
          //other down
          r++;
          c++;
        } else if (dir === 3) {
          // other up
          r--;
          c--;
        }
      }
    }

    return [possibleMoves, possibleCuts];
  };

  const removeProhibitedMoves = (
    selectedRow: number,
    selectedCol: number,
    possiblePositions: {
      moves: any[];
      cuts: any[];
    }
  ): { moves: any[]; cuts: any[] } => {
    if (lastMove === "") return possiblePositions;

    let newPossiblePossitions: { moves: any[]; cuts: any[] } = {
      moves: [],
      cuts: [],
    };

    possiblePositions.moves.forEach((move) => {
      //stimulate move on the board
      let tempBoardState: any[][] = boardState.map((row) => {
        return [...row];
      });
      [
        tempBoardState[selectedRow][selectedCol],
        tempBoardState[move[0]][move[1]],
      ] = [
        tempBoardState[move[0]][move[1]],
        tempBoardState[selectedRow][selectedCol],
      ];

      // console.log(tempBoardState);
      // console.log(boardState);

      isCheck(lastMove.row, lastMove.col, tempBoardState, (toPlay + 1) % 2) ===
        false && newPossiblePossitions.moves.push([...move]);
    });

    possiblePositions.cuts.forEach((cut) => {
      //stimulate cut on the board
      let tempBoardState: any[][] = boardState.map((row) => {
        return [...row];
      });
      [
        tempBoardState[selectedRow][selectedCol],
        tempBoardState[cut[0]][cut[1]],
      ] = [{ piece: "" }, tempBoardState[selectedRow][selectedCol]];

      isCheck(lastMove.row, lastMove.col, tempBoardState, (toPlay + 1) % 2) ===
        false && newPossiblePossitions.cuts.push([...cut]);
    });
    // console.log(newPossiblePossitions.cuts);
    // return { moves: [], cuts: [] };
    return newPossiblePossitions;
  };

  const possitionsToReleaseKing = (
    selectedRow: number,
    selectedCol: number,
    possiblePositions: {
      moves: any[];
      cuts: any[];
    }
  ): { moves: any[]; cuts: any[] } => {
    console.log(`${lastMove.piece} -> { ${lastMove.row} , ${lastMove.col} }`);
    //find all checked possitions all pieces in the board
    //get all possible possitions for current selected opponant piece using possiblepossitions
    //create new possible positions removing all possible possitions other than checked possitions

    let newPossiblePossitions: { moves: any[]; cuts: any[] } = {
      moves: [],
      cuts: [],
    };

    possiblePositions.moves.forEach((move) => {
      //stimulate move on the board
      let tempBoardState: any[][] = boardState.map((row) => {
        return [...row];
      });
      [
        tempBoardState[selectedRow][selectedCol],
        tempBoardState[move[0]][move[1]],
      ] = [
        tempBoardState[move[0]][move[1]],
        tempBoardState[selectedRow][selectedCol],
      ];

      // console.log(tempBoardState);
      // console.log(boardState);

      isCheck(lastMove.row, lastMove.col, tempBoardState, (toPlay + 1) % 2) ===
        false && newPossiblePossitions.moves.push([...move]);
    });

    possiblePositions.cuts.forEach((cut) => {
      //stimulate cut on the board
      let tempBoardState: any[][] = boardState.map((row) => {
        return [...row];
      });
      [
        tempBoardState[selectedRow][selectedCol],
        tempBoardState[cut[0]][cut[1]],
      ] = [{ piece: "" }, tempBoardState[selectedRow][selectedCol]];

      isCheck(lastMove.row, lastMove.col, tempBoardState, (toPlay + 1) % 2) ===
        false && newPossiblePossitions.cuts.push([...cut]);
    });

    return newPossiblePossitions;
  };

  const onSquareClick = (
    evt: React.MouseEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    // console.log(evt.target);
    let target = evt.target as Element;

    // console.log(row, col);
    let currentSelectedSquareState: any = getSquareState(row, col);
    // console.log(currentSelectedSquareState);
    (currentSelectedSquareState.color === toPlay ||
      firstSelectedSquare.length === 6) &&
      target.classList.toggle("opacity-75");
    if (
      firstSelectedSquare.length === 0 &&
      currentSelectedSquareState.color === toPlay &&
      currentSelectedSquareState.piece !== ""
    ) {
      // let possibleCuts: any[] = [];
      let possiblePositions: { moves: any[]; cuts: any[] } = possibleMoves(
        boardState,
        row,
        col
      );
      // console.log(possiblePositions);
      if (isKingCheck.player === toPlay) {
        console.log("First release king from check");
        possiblePositions = possitionsToReleaseKing(
          row,
          col,
          possiblePositions
        );
      }
      possiblePositions = removeProhibitedMoves(row, col, possiblePositions);
      // console.log(possiblePositions);
      // add possible-move class to all possible positions
      possiblePositions.moves.forEach((position) => {
        let [row, col] = position;
        let target = document.getElementById(`S${row}${col}`) as Element;
        // if (
        //     getSquareState(row, col).piece !== "" &&
        //     getSquareState(row, col).color !== toPlay
        // ) {
        //     possibleCuts.push([row, col]);
        //     target.classList.toggle("possible-cut");
        // } else {
        target.classList.toggle("possible-move");
        // }
      });
      possiblePositions.cuts.forEach((position) => {
        let [row, col] = position;
        let target = document.getElementById(`S${row}${col}`) as Element;
        // if (
        //     getSquareState(row, col).piece !== "" &&
        //     getSquareState(row, col).color !== toPlay
        // ) {
        //     possibleCuts.push([row, col]);
        //     target.classList.toggle("possible-cut");
        // } else {
        target.classList.toggle("possible-cut");
        // }
      });

      // possiblePositions = possiblePositions.filter((position) => {
      //     return !possibleCuts.some((pos) => {
      //         return pos[0] === position[0] && pos[1] === position[1];
      //     });
      // });
      //try to return these both two arrays from possible moves function-low complexity

      console.log(
        `possible move possitions are ${
          possiblePositions.moves.length === 0
            ? "empty"
            : possiblePositions.moves
        }`
      );
      console.log(
        `possible cut possitions are ${
          possiblePositions.cuts.length === 0 ? "empty" : possiblePositions.cuts
        }`
      );

      setFirstSelectedSquare([
        row,
        col,
        target,
        currentSelectedSquareState,
        possiblePositions.moves,
        possiblePositions.cuts,
      ]);
    }
    if (firstSelectedSquare.length === 6) {
      console.log(
        `Selected ${
          firstSelectedSquare[3].piece
            ? firstSelectedSquare[3].piece
            : "an empty square"
        } on ( ${firstSelectedSquare[0]} , ${firstSelectedSquare[1]} ) at first`
      );
      console.log(
        `Selected ${
          currentSelectedSquareState.piece
            ? currentSelectedSquareState.piece
            : "an empty square"
        } on ( ${row} , ${col} ) at second`
      );
      const possiblePositions: any[] = firstSelectedSquare[4];
      const possibleCuts: any[] = firstSelectedSquare[5];
      if (possiblePositions.length > 0) {
        possiblePositions.forEach((position) => {
          let [row, col] = position;
          let target = document.getElementById(`S${row}${col}`) as Element;
          target.classList.toggle("possible-move");
        });
      }
      if (possibleCuts.length > 0) {
        possibleCuts.forEach((position) => {
          let [row, col] = position;
          let target = document.getElementById(`S${row}${col}`) as Element;
          target.classList.toggle("possible-cut");
        });
      }
      // const isPossibletoMove: boolean = [
      //     ...possiblePositions,
      //     ...possibleCuts,
      // ].some((position) => {
      //     return position[0] === row && position[1] === col;
      // });
      let moved: Boolean = false;
      if (
        possiblePositions.some((position) => {
          return position[0] === row && position[1] === col;
        })
      ) {
        //move
        movePiece([firstSelectedSquare[0], firstSelectedSquare[1]], [row, col]);
        moved = true;
      }
      let enPassant: any[] = [];
      if (
        possibleCuts.some((position) => {
          if (
            position[0] === row &&
            position[1] === col &&
            position[2] !== undefined &&
            position[3] !== undefined
          ) {
            enPassant = [position[2], position[3]];
          }

          return position[0] === row && position[1] === col;
        })
      ) {
        //cut
        if (enPassant.length === 0) {
          cutPiece(
            [firstSelectedSquare[0], firstSelectedSquare[1]],
            [row, col],
            [row, col]
          );
        } else if (enPassant.length === 2) {
          cutPiece(
            [firstSelectedSquare[0], firstSelectedSquare[1]],
            [enPassant[0], enPassant[1]],
            [row, col]
          );
        }
        moved = true;
      }
      moved === true && isCheck(row, col) === true
        ? setIsKingCheck({
            player: (toPlay + 1) % 2,
          })
        : setIsKingCheck({});
      // console.log(isPossibletoMove);
      // if (isPossibletoMove) {
      //     const isMovePiece: any = isMove(
      //         firstSelectedSquare[3].color,
      //         currentSelectedSquareState.color
      //     );

      //     if (isMovePiece === true) {
      //         movePiece(
      //             [firstSelectedSquare[0], firstSelectedSquare[1]],
      //             [row, col]
      //         );
      //     } else if (isMovePiece === false) {
      //         cutPiece(
      //             [firstSelectedSquare[0], firstSelectedSquare[1]],
      //             [row, col],
      //             [row, col]
      //         );
      //     } else if (isMovePiece === null) {
      //         console.log("castle should implement here");
      //     }
      //     //after move or cut
      //     // console.log("Now Board\n");
      //     // console.log(boardState);
      //     isCheck(row, col) === true
      //         ? setIsKingCheck({
      //               player: (toPlay + 1) % 2,
      //           })
      //         : setIsKingCheck({});
      // }
      firstSelectedSquare[2].classList.toggle("opacity-75");
      target.classList.toggle("opacity-75");
      setFirstSelectedSquare([]);
    }
  };

  const isCheck = (
    row: number,
    col: number,
    currentBoardState = boardState,
    player: number = toPlay
  ): Boolean => {
    // console.log(row, col);
    // console.log(currentBoardState);
    let nowPossiblePositions: { moves: any[]; cuts: any[] } = possibleMoves(
      currentBoardState,
      row,
      col
    );
    let kingCheck = 0;
    //check all opponant pieces who is attacking the king
    nowPossiblePositions.cuts.forEach((cut) => {
      let cutSquareState: any = currentBoardState[cut[0]][cut[1]];
      // console.log(cutSquareState);
      // console.log(`${cut[0]} , ${cut[1]}`);
      if (cutSquareState.color !== player && cutSquareState.isKing === 1) {
        console.log(`CHECK1 king in ${cut[0]} , ${cut[1]}`);
        kingCheck = 1;
        return;
      }
    });

    if (kingCheck === 1) return true;

    currentBoardState.forEach((boardRow, r) => {
      boardRow.forEach((square, c) => {
        if (
          square.piece !== "" &&
          square.color === player &&
          !(c === col && r === row)
        ) {
          // console.log(r, c);
          nowPossiblePositions = possibleMoves(currentBoardState, r, c);
          nowPossiblePositions.cuts.forEach((cut) => {
            let cutSquareState: any = currentBoardState[cut[0]][cut[1]];
            // console.log(currentBoardState);
            if (
              cutSquareState.color !== player &&
              cutSquareState.isKing === 1
            ) {
              console.log(`CHECK2 king in ${cut[0]} , ${cut[1]}`);
              kingCheck = 1;
              return true;
            }
          });
        }
        if (kingCheck === 1) return true;
      });
      if (kingCheck === 1) return true;
    });

    return kingCheck === 1 ? true : false;
  };

  // console.log(boardState);

  return (
    <>
      <h2 className="text-center text-light">Practice Game</h2>
      <div className="container row">
        <div className="col-lg-7 row">
          <Board
            player={player}
            state={boardState}
            onSquareClick={onSquareClick}
          />
        </div>
        <div className="col-lg-3">
          <RecordBoard onToggle={togglePlayerView} />
        </div>
        <div className="col-lg-1 text-light">{`${
          toPlay === 0 ? "White" : "Black"
        } to Play`}</div>
        <div className="col-lg-1 text-light">{`${
          isKingCheck.player === 0
            ? "White"
            : isKingCheck.player === 1
            ? "Black"
            : "No"
        } King is Check`}</div>
      </div>
    </>
  );
};

export default Practice;
