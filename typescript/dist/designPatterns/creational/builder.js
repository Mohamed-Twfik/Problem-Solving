"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindQueryBuilder = exports.Builder = void 0;
class Product {
    constructor() {
        this.parts = [];
    }
}
/**
 * Builder is a creational design pattern that lets you construct complex objects step by step.
 */
class Builder {
    constructor() {
        this.product = new Product();
    }
    buildPartA() {
        this.product.parts.push('PartA');
    }
    buildPartB() {
        this.product.parts.push('PartB');
    }
    buildPartC() {
        this.product.parts.push('PartC');
    }
    getProduct() {
        return this.product;
    }
}
exports.Builder = Builder;
class FindQueryBuilder {
    constructor() {
        this.query = '';
    }
    select(...fields) {
        this.query += `SELECT ${fields.join(', ')} `;
        return this;
    }
    from(table) {
        this.query += `FROM ${table} `;
        return this;
    }
    where(condition) {
        this.query += `WHERE ${condition} `;
        return this;
    }
    build() {
        return this.query;
    }
}
exports.FindQueryBuilder = FindQueryBuilder;
