import { useState } from 'react';
import BookResisterButton from './bookResisterButton';
import InputComp from './inputComp';

const BookResister = ({
  handleClickButton,
}: {
  handleClickButton: (v: string) => void;
}) => {

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
