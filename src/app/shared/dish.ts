import { Comment } from './comment';

export class Dish{
    id : String;
    name: string;
    image: string;
    category: string;
    featured:boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
    
}
 