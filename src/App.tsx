import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import BookResister from './components/bookResister';
import uuid from 'react-uuid';

function App() {
  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleClickButton = (isbn: string): void => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((response) => response.json())
      .then((data) => {
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
    setBooks((prev) => [
      ...prev,
      {
        id: uuid(),
        ...postedItem,
      },
    ]);
  };

  return (
    <div className="App">
      <BookResister handleClickButton={handleClickButton} />
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
          {
            setBooks((prev) => {
              return prev.filter((book) => book.id !== id);
            });
          }
        }}
        onClickLendingSwitch={(id) => {
          {
            setBooks((prev) => {
              const newBooks = [...prev];
              return newBooks.map((book) => {
                if (book.id === id)
                  return { ...book, isOnLoan: !book.isOnLoan };
                return book;
              });
            });
          }
        }}
      />
    </div>
  );
}

export default App;
