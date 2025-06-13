import BookResisterButton from './bookResisterButton';
import BookResisterInput from './bookResisterInput';

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
      <BookResisterInput isbn={isbn} inputChangeFunc={inputChangeFunc} />
      <BookResisterButton handleClickButton={handleClickButton} />
    </div>
  );
};

export default BookResister;
