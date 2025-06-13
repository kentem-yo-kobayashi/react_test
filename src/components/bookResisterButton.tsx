type Props = {
  handleClickButton: () => void;
};

const BookResisterButton = ({ handleClickButton }: Props) => {
  return (
    <button className="button" onClick={handleClickButton}>
      書籍登録
    </button>
  );
};

export default BookResisterButton;
