import { Status } from './status';
import { Product } from './product';

export class Cart {
    id: number;
    status: Status;
    products: Array<Product>;
}