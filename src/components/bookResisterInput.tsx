import InputComp from './inputComp';

const BookResisterInput = ({
  isbn,
  inputChangeFunc,
}: {
  isbn: string;
  inputChangeFunc: (v: string) => void;
}) => {
  return (
    <InputComp
      labelText="ISBNコード"
      valueState={isbn}
      stateChangeFunc={(e) => inputChangeFunc(e.target.value)}
    />
  );
};

export default BookResisterInput;
