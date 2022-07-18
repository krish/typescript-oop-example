import {Data} from './types/data';

export interface FileProcessor {
  fetchData(): Promise<Data>;
  processData(data: Data): any;
  generateJSON(): any;
  generateCSV(): any;
  createZip(): void;
  uploadFile(): void;
}
