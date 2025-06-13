export interface BookItemModel {
  id: string;
  name: string;
  isOnLoan: boolean;
}

export type FetchedDataModel = {
  items: {
    volumeInfo: {
      title: string;
    };
  }[];
  totalItems: number;
};
