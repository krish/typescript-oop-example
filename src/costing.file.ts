import {AbstractFileProcessor} from './abstractFileProcessor.class';
import {Data} from './types/data';

export class Costing extends AbstractFileProcessor {
  fetchData(): Promise<Data> {
    console.log('fetch data from costing file');
    const tmp = {type: 'x', data: {}} as Data;
    return new Promise((resolve) => resolve(tmp));
  }

  uploadFile(): void {
    console.log('upload file from Costing class');
  }
}
