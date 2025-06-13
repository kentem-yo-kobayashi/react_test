import { useState } from 'react';
import BookResisterButton from './bookResisterButton';
import InputComp from './inputComp';

type Props = {
  handleClickButton: (v: string) => void;
};

const BookResister = ({ handleClickButton }: Props) => {
  const [isbn, setIsbn] = useState('');

  return (
    <div className="book-register">
      <InputComp
        labelText="ISBNコード"
        valueState={isbn}
        stateChangeFunc={(e) => setIsbn(e.target.value)}
      />
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
