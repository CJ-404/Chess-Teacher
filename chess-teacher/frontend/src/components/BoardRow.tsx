interface Props {
  digit: number;
}

const BoardRow = ({ digit }: Props) => {
  return (
    <div className="wrapper-side text-light d-flex justify-content-center align-items-center">
      <div>{digit}</div>
    </div>
  );
};

export default BoardRow;
