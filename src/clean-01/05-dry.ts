type Size = '' | ' S' | 'M' | 'L' | 'XL';

class Product {

    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ) { }

isProductReady(): boolean {
    for (const key in this) {
        switch(typeof this[key]){
         case 'string':
             if( (<string>this[key]).length <= 0) throw new Error('The name is empty');
             break;
             case 'number':
                if( (<number>this[key]) <= 0) throw new Error('is zero');
                break;
                default:
                    throw new Error(`The type ${typeof this[key]} is not valid`);
        }
     }
     return true;
}

    toString() {
        // todo: no dry
        // if( this.name.length <= 0)throw new Error('The name is empty');
        // if( this.price <= 0)throw new Error('Prize is zero');
        // if( this.size.length <= 0)throw new Error('size is empty');

        for (const key in this) {
           switch(typeof this[key]){
            case 'string':
                if( (<string>this[key]).length <= 0) throw new Error('The name is empty');
                break;
           }
        }

        return ` ${this.name} ${this.price} ${this.size}`;

    }
}


(() => {
    const bluePants = new Product('blue pants');
})();