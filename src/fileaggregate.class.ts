import {Costing} from './costing.file';
import {Product} from './product.file';

export class Aggregate {
  async sendData() {
    console.info('---------Product costing---------');
    const product: Product = new Product();
    product.processDataFile();

    console.info('---------Process costing---------');
    const costing: Costing = new Costing();
    costing.processDataFile();
    return;
  }
}
