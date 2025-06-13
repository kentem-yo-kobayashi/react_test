import { useState } from 'react';
import BookResisterButton from './bookResisterButton';
import BookResisterInput from './bookResisterInput';

const BookResister = ({
  handleClickButton,
}: {
  handleClickButton: (v: string) => void;
}) => {
  const [isbn, setIsbn] = useState('');
  return (
    <div className="book-register">
      <BookResisterInput isbn={isbn} inputChangeFunc={setIsbn} />
      <BookResisterButton
        handleClickButton={() => {
          handleClickButton(isbn);
          setIsbn('');
        }}
      />
    </div>
  );
};

export default BookResister;
