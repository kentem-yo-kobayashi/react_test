const BOOK_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes?q=isbn';

export const fetchData = async <T>(isbn: string): Promise<T> => {
  const response = await fetch(`${BOOK_ENDPOINT}:${isbn}`);
  // check fetching error
  if (response.status === 404) throw new Error('Not Found');
  if (!response.ok) throw new Error('Error occurred by fetching data');
  const data: T = await response.json();
  return data;
};
