"use strict";
// 제네릭 genenic
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Item_contnet, _UserRepository_users, _ProductRepository_products;
class Item {
    constructor() {
        _Item_contnet.set(this, void 0);
        __classPrivateFieldSet(this, _Item_contnet, null, "f");
    }
    setItem(value) {
        __classPrivateFieldSet(this, _Item_contnet, value, "f");
    }
    getItem() {
        return __classPrivateFieldGet(this, _Item_contnet, "f");
    }
}
_Item_contnet = new WeakMap();
const numberItem = new Item();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환
const itemNum = numberItem.getItem();
console.log(itemNum);
const stringItem = new Item();
stringItem.setItem('Hello');
stringItem.getItem();
console.log(stringItem.getItem());
class UserRepository {
    constructor() {
        _UserRepository_users.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _UserRepository_users, "f").find((user) => user.id == id);
    }
    save(user) {
        __classPrivateFieldGet(this, _UserRepository_users, "f").push(user);
    }
}
_UserRepository_users = new WeakMap();
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
class ProductRepository {
    constructor() {
        _ProductRepository_products.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _ProductRepository_products, "f").find((product) => product.id === id);
    }
    save(product) {
        __classPrivateFieldGet(this, _ProductRepository_products, "f").push(product);
    }
}
_ProductRepository_products = new WeakMap();
const productRepo = new ProductRepository();
productRepo.save({
    id: 10,
    price: 100,
    name: 'Mouse',
});
console.log(productRepo.findById(10));
