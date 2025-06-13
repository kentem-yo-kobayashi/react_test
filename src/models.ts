export interface BookItemModel {
  id: string;
  name: string;
  isOnLoan: boolean;
}

export interface FetchedDataModel {
  items: {
    volumeInfo: {
      title: string;
    };
  }[];
  totalItems: number;
}
