import {AbstractFileProcessor} from './abstractFileProcessor.class';
import {Data} from './types/data';

export class Product extends AbstractFileProcessor {
  fetchData(): Promise<Data> {
    console.log('fetch data from product file');
    const tmp = {type: 'x', data: {}} as Data;
    return new Promise((resolve) => resolve(tmp));
  }
}
