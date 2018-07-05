export class Calculation {
    private index: number = 0;
    private quantity: number;

    constructor(quantity: number) {
        this.quantity = quantity;
    }

    public getIndex(addedNumber?: number): number {
        if(typeof addedNumber === 'undefined')
            return this.index;
        return this.index = this.calculateIndex(this.index + addedNumber);
    }

    private calculateIndex(val: number): number {
        if(this.isGreaterThanQuantity(val))
            return 0;
        if(this.isLowerThanZero(val))
            return this.quantity;
        return val;
    }

    private isGreaterThanQuantity(val: number): boolean {
        return val > this.quantity;
    }
    
    private isLowerThanZero(val: number): boolean {
        return val < 0;
    }
}