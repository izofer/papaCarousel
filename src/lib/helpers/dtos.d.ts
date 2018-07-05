
export type CarouselTypes = 'fading' | 'slidingX' | 'slidingY';

export type TransitionFnType = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface IBuilder {
    setType(val: CarouselTypes): IBuilder;
    setProgressBar(val: boolean): IBuilder;
    setTimingFn(val: number): IBuilder;
    setTransitionFn(val: TransitionFnType): IBuilder;
    setTimePerSlide(val: number): IBuilder;
    setElements(val: HTMLElement[] | string): IBuilder;
    setButtons(val: boolean): IBuilder;
    setParent(val: HTMLElement | string): IBuilder;
}

export interface ICarouselFactory {
    getCarousel(type: CarouselTypes): ICarousel;
}

export interface ICarousel {
    showAnimation(): {[ propertyName: string ]: string };
    hideAnimation(): {[ propertyName: string ]: string };
    starterPack(): {[ propertyName: string ]: string };
    getTransitionProperties(): string;
}

export interface Subject {
    notifyAll(): void;
    attach(fn: Function): void;
    detach(fn: Function): void;
}