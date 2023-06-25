// Record Board is a Table that has two RecordLists for while player and black player respectively.
import React from "react";
import RecordList from "./RecordList";

interface Props {
    onToggle: () => void;
}

const RecordBoard = ({ onToggle }: Props) => {
    return (
        <button className="btn btn-light text-center" onClick={onToggle}>
            Toggle
        </button>
    );
};

export default RecordBoard;
