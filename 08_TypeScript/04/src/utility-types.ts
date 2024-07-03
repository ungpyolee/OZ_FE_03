// utility types 유틸리티 타입

// Partial<T>

type User10 = {
    id: number;
    name: string;
    email: string;
};

type PartialUser = Partial<User10>;

type Product = {
    id: number;
    price: number;
};

type PartialProduct = Partial<Product>;

const product: PartialProduct = {}; // 타입의 모든 속성을 선택적으로 들어서 값을 할당하지 않아도 문제가 되지 않는다.

// Readonly<T>
type User11 = {
    id: number;
    name: string;
};

const readonlyUser: Readonly<User11> = {
    // 타입의 모든 속성을 읽기전용으로 바꾼다.
    id: 1,
    name: 'John',
};

// Pick<T,K> 타입 T에서 속성 K만을 선택하여 타입을 생성
type User12 = {
    id: number;
    name: string;
    email: string;
};

type UserWithNameOnly = Pick<User12, 'name'>;

const user12: UserWithNameOnly = {
    name: 'Lee',
};

// Omit<T, K> 타입 T에서 속성 K를 제외한 타입을 생성
type Product10 = {
    id: number;
    name: string;
    price: number;
    uniqueCode: number;
};

type ProductWithOmit = Omit<Product10, 'uniqueCode' | 'price'>;

// Record<K, T> K타입의 키와 T 타입의 값으로 구성된 타입을 생성
type Country = 'South Korea' | 'United States' | 'Japan';
type Capital = string;

type CountryCapitals = Record<Country, Capital>;

const capitals: CountryCapitals = {
    'South Korea': 'Seoul',
    'United States': 'Washington D.C.',
    Japan: 'Tokyo',
};

type CountryInfo = {
    capital: string;
    population: number;
    continent: string;
};

type CountryInfoMap = Record<Country, CountryInfo>;

const countryInfo: CountryInfoMap = {
    'South Korea': {
        capital: 'Seoul',
        population: 51_000_000,
        continent: 'Asia',
    },
    'United States': {
        capital: 'Washington D.C.',
        population: 331_000_000,
        continent: 'North America',
    },
    Japan: {
        capital: 'Tokyo',
        population: 150_000_000,
        continent: 'Asia',
    },
};

// Parameter<T>
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>;

function someFunction(...param: Param) {
    const [id] = param;
}

someFunction(100);

type SaveUser = (name: string, age: number) => void;

type Params = Parameters<SaveUser>;

function saveUser(...params: Params) {
    const [name, age] = params;
}

saveUser('David', 33);
