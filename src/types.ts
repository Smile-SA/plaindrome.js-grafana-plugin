type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  palindromeConfig: string;
  customConfig: string;
  datasource: string;
  remote: URL;
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}
