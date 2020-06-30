export interface IPagination {
  totalPages: number;
  totalCount: number;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
