// 제네릭 genenic

class Item<T> {
    #contnet: T | null;

    constructor() {
        this.#contnet = null;
    }

    setItem(value: T) {
        this.#contnet = value;
    }

    getItem(): T | null {
        return this.#contnet;
    }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환
const itemNum = numberItem.getItem();

console.log(itemNum);

const stringItem = new Item<string>();
stringItem.setItem('Hello');
stringItem.getItem();

console.log(stringItem.getItem());

// 사용자 데이터 / User

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    price: number;
    name: string;
}

interface WithId {
    id: number;
}

interface Store<T extends WithId> {
    findById(id: number): T | undefined;
    save(item: T): void;
}

class UserRepository implements Store<User> {
    #users: User[] = [];

    findById(id: number): User | undefined {
        return this.#users.find((user) => user.id == id);
    }

    save(user: User): void {
        this.#users.push(user);
    }
}

const userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: 'John',
});

userRepo.save({
    id: 2,
    name: 'Amy',
});

console.log(userRepo.findById(1));

class ProductRepository implements Store<Product> {
    #products: Product[] = [];

    findById(id: number): Product | undefined {
        return this.#products.find((product) => product.id === id);
    }

    save(product: Product): void {
        this.#products.push(product);
    }
}

const productRepo = new ProductRepository();

productRepo.save({
    id: 10,
    price: 100,
    name: 'Mouse',
});

console.log(productRepo.findById(10));
