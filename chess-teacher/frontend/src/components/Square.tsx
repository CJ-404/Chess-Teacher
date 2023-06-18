//squre can has one piece on it.
import React from "react";
import { useState } from "react";
import "../app.css";

interface Props {
    color: string;
    state: any;
    onSquareClick: (
        evt: React.MouseEvent<HTMLDivElement>,
        row: number,
        col: number
    ) => void;
    col: number;
    row: number;
}

const Square = ({ color, state, onSquareClick, col, row }: Props) => {
    const [backgroundImage, setBackgroundImage] = useState<string>("");
    //src/assets/pieces/wP.svg
    //src/assets/pieces/BP.webp
    // let backgroundImage ="https://cdn.shopify.com/s/files/1/2209/1479/products/additional_megachess-14_600x.png?v=1535653091";

    if (backgroundImage !== `src/assets/pieces/${state.piece}.svg`) {
        setBackgroundImage(`src/assets/pieces/${state.piece}.svg`);
    }
    // console.log(backgroundImage);
    return (
        <>
            <div
                className="wrapper"
                onClick={(evt) => {
                    onSquareClick(evt, row, col);
                }}
            >
                <div
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className={`main text-dark ${color}`}
                    id={`S${row}${col}`}
                ></div>
            </div>
        </>
    );
};

export default Square;
