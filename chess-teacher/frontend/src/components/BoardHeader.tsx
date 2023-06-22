//  a - h letters
import React from "react";

interface Props {
    player: number;
}

const BoardHeader = ({ player }: Props) => {
    let headerStructure: string[] = [];
    player === 0
        ? (headerStructure = ["a", "b", "c", "d", "e", "f", "g", "h"])
        : (headerStructure = ["h", "g", "f", "e", "d", "c", "b", "a"]);
    return (
        <div className="d-flex text-center text-light">
            <div className="wrapper-side"></div>
            {headerStructure.map((letter, index) => {
                return (
                    <div className="wrapper-header" key={index}>
                        <div>{letter}</div>
                    </div>
                );
            })}
            <div className="wrapper-side"></div>
        </div>
    );
};

export default BoardHeader;
