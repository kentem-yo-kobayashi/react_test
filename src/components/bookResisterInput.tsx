const BookResisterInput = ({
  isbn,
  inputChangeFunc,
}: {
  isbn: string;
  inputChangeFunc: (v: string) => void;
}) => {
  return (
      <div className="label-input">
        <label className="label">ISBNコード</label>
        <input
          className="input"
          placeholder="入力してください"
          value={isbn}
          onChange={(e) => inputChangeFunc(e.target.value)}
        ></input>
      </div>
  );
};

export default BookResisterInput;
