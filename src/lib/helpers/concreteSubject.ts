import { Subject } from './dtos.d';


export class ConcreteSubject implements Subject {
    private observableArray: Function[] = [];

    constructor() {}

    notifyAll(args?: any): void {
        this.observableArray.map(o => o(args));
    }

    attach(fn: Function): void {
        if(this.observableArray.some(o => o === fn))
            throw new Error('The function is already attached!');
        this.observableArray.push(fn);
    }

    detach(fn: Function): void {
        const index: number = this.observableArray.findIndex(o => o === fn);
        if(this.observableArray[index])
            this.observableArray.splice(index, 1);
    }
}

export const concreteSubject = new ConcreteSubject;