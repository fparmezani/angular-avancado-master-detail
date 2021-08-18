import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Description 1' },
            { id: 2, name: 'Saúde', description: 'Description 2' },
            { id: 3, name: 'Lazer', description: 'Description 3' },
            { id: 4, name: 'Salário', description: 'Description 4' },
            { id: 5, name: 'Freelas', description: 'Description 5' },
        ];

        return categories;
    }
}
