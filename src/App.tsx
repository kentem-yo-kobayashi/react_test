import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel, FetchedDataModel } from './models';
import BookResister from './components/bookResister';
import uuid from 'react-uuid';
import { fetchData } from './api/fetchData';

function App() {
  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleClickButton = (isbn: string): void => {
    fetchData<FetchedDataModel>(isbn).then((data) => {
      if (data.totalItems === 0) {
        alert('登録されていない ISBN コードです。');
        return;
      }
      onPostCompleted({
        name: data.items[0].volumeInfo.title,
        isOnLoan: false,
      });
    });
  };

  const onPostCompleted = (postedItem: Omit<BookItemModel, 'id'>): void => {
    setBooks((prev) => [...prev, { id: uuid(), ...postedItem }]);
  };

  return (
    <div className="App">
      <BookResister handleClickButton={handleClickButton} />
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
          setBooks((prev) => prev.filter((book) => book.id !== id));
        }}
        onClickLendingSwitch={(id) => {
          setBooks((prev) =>
            prev.map((book) => {
              if (book.id === id) return { ...book, isOnLoan: !book.isOnLoan };
              return book;
            }),
          );
        }}
      />
    </div>
  );
}

export default App;
