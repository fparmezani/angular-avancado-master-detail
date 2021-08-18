import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDatabase {
    createDb() {
        const categories = [
            { id: 1, name: 'Moradia', description: 'Description 1' },
            { id: 2, name: 'Saúde', description: 'Description 2' },
            { id: 3, name: 'Lazer', description: 'Description 3' },
            { id: 4, name: 'Salário', description: 'Description 4' },
            { id: 5, name: 'Freelas', description: 'Description 5' },
        ];

        return categories;
    }
}
