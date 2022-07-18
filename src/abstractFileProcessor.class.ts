import {FileProcessor} from './fileprocess.interface';
import {Data} from './types/data';

export class AbstractFileProcessor implements FileProcessor {
  fetchData(): Promise<Data> {
    throw new Error('Method not implemented.');
  }
  processData() {
    console.info('data processed from supper class');
  }
  generateJSON() {
    console.info('generateJSON from supper class');
  }
  generateCSV() {
    console.info('generateCSV from supper class');
  }
  createZip(): void {
    console.info('createZip from supper class');
  }
  uploadFile(): void {
    console.info('uploadFile from supper class');
  }

  processDataFile() {
    this.fetchData();
    this.processData();
    this.generateJSON();
    this.generateCSV();
    this.createZip();
    this.uploadFile();
  }
}
