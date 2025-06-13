const BookResister = ({
  isbn,
  inputChangeFunc,
  handleClickButton,
}: {
  isbn: string;
  inputChangeFunc: (v: string) => void;
  handleClickButton: () => void;
}) => {
  return (
    <div className="book-register">
      <div className="label-input">
        <label className="label">ISBNコード</label>
        <input
          className="input"
          placeholder="入力してください"
          value={isbn}
          onChange={(e) => inputChangeFunc(e.target.value)}
        ></input>
      </div>
      <button className="button" onClick={handleClickButton}>
        書籍登録
      </button>
    </div>
  );
};

export default BookResister;
