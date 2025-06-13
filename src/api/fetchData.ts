import { FetchedDataModel } from '../models';

const BOOK_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes?q=isbn';

export const fetchData = async (isbn: string): Promise<FetchedDataModel> => {
  const response = await fetch(`${BOOK_ENDPOINT}:${isbn}`);
  // check fetching error
  if (response.status === 404) throw new Error('Not Found');
  if (!response.ok) throw new Error('Error occurred by fetching data');
  return await response.json();
};
