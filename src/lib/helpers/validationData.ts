import { CarouselTypes, TransitionFnType } from './dtos.d';

export class ValidationData {
    private types: CarouselTypes[] = ['fading', 'slidingY', 'slidingX'];
    private transitionFnTypes: TransitionFnType[] = ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'];

    constructor() {}

    public timePerSlideChecker(timeFn: number): number {
        if(typeof timeFn !== 'number')
            throw new Error('The timePerSlide variable must be a number!');
        return timeFn;
    }

    public timingFnChecker(timeFn: number): number {
        if(typeof timeFn !== 'number')
            throw new Error('The timingFn variable must be a number!');
        return timeFn;
    }

    public transitionFnTypesChecker(transitionFn: TransitionFnType): TransitionFnType {
        if(!this.transitionFnTypes.includes(transitionFn))
            throw new Error(`The transitionFn variable must be one of those - ${this.types}!`);
        return transitionFn;
    }

    public typeChecker(type: CarouselTypes): CarouselTypes {
        if(!this.types.includes(type))
            throw new Error(`The type variable must be one of those - ${this.transitionFnTypes}!`);
        return type;
    }

    public progressBarChecker(bar: boolean): boolean {
        if(typeof bar !== 'boolean')
            throw new Error('The progressBar variable must be a boolean!');
        return bar;
    }

    public buttonsChecker(buttons: boolean): boolean {
        if(typeof buttons !== 'boolean')
            throw new Error('The buttons variable must be a boolean!');
        return buttons;
    }

    public parentChecker(parent: HTMLElement | string): HTMLElement {
        if(typeof parent === 'string')
            parent = <HTMLElement>document.querySelector(parent);
        if(!parent)
            throw new Error('Carousel parent is not defined!');
        if(!(parent instanceof HTMLElement))
            throw new Error('Carousel parent is not an instance of HTMLElement!');
        return parent;
    }

    public elementsChecker(elements: HTMLElement[] | string, parentEl: HTMLElement): HTMLElement[] {
        if(typeof elements === 'string')
            elements = <HTMLElement[]>Array.from(parentEl.querySelectorAll(elements));
        if(!elements || !elements.length)
            throw new Error('Array of carousel elements is empty!');
        if(!elements.every(e => e instanceof HTMLElement))
            throw new Error('Not every element of the array carousel is an instance of HTMLElement!');
        return elements;
    }
}
export const validationData = new ValidationData;