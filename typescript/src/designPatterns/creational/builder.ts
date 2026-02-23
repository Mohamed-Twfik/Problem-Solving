class Product {
  public parts: string[] = [];
}

/**
 * Builder is a creational design pattern that lets you construct complex objects step by step.
 */
export class Builder {
  private product: Product = new Product();

  public buildPartA(): void {
    this.product.parts.push('PartA');
  }

  public buildPartB(): void {
    this.product.parts.push('PartB');
  }

  public buildPartC(): void {
    this.product.parts.push('PartC');
  }

  public getProduct(): Product {
    return this.product;
  }
}

export class FindQueryBuilder {
  private query: string = '';

  public select(...fields: string[]): FindQueryBuilder {
    this.query += `SELECT ${fields.join(', ')} `;
    return this;
  }

  public from(table: string): FindQueryBuilder {
    this.query += `FROM ${table} `;
    return this;
  }

  public where(condition: string): FindQueryBuilder {
    this.query += `WHERE ${condition} `;
    return this;
  }

  public build(): string {
    return this.query;
  }
}