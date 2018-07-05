import { PapaCarousel } from './papaCarousel';
import { IBuilder, CarouselTypes, TransitionFnType } from './helpers/dtos.d';

export class PapaCarouselBuilder implements IBuilder {
    private progressBar: boolean = false;
    private buttons: boolean = false;
    private type: CarouselTypes = 'fading';
    private timePerSlide: number = 5000;
    private transitionFn: TransitionFnType = 'ease-in';
    private timingFn: number = 250;
    private parent: HTMLElement | string;
    private elements: HTMLElement[] | string;
    
    constructor() {}

    public setType(val: CarouselTypes): PapaCarouselBuilder {
        this.type = val;
        return this;
    }

    public getType(): CarouselTypes {
        return this.type;
    }

    public setParent(val: HTMLElement | string): PapaCarouselBuilder {
        this.parent = val;
        return this;
    }

    public getParent(): HTMLElement | string {
        return this.parent;
    }

    public setButtons(val: boolean): PapaCarouselBuilder {
        this.buttons = val;
        return this;
    }

    public getButtons(): boolean {
        return this.buttons;
    }

    public setTimePerSlide(val: number): PapaCarouselBuilder {
        this.timePerSlide = val;
        return this;
    }

    public setTransitionFn(val: TransitionFnType): PapaCarouselBuilder {
        this.transitionFn = val;
        return this;
    }

    public getTransitionFn(): TransitionFnType {
        return this.transitionFn;
    }

    public getTimePerSlide(): number {
        return this.timePerSlide;
    }

    public setTimingFn(val: number): PapaCarouselBuilder {
        this.timingFn = val;
        return this;
    }

    public getTimingFn(): number {
        return this.timingFn;
    }

    public setProgressBar(val: boolean): PapaCarouselBuilder {
        this.progressBar = val;
        return this;
    }

    public getProgressBar(): boolean {
        return this.progressBar;
    }

    public setElements(val: HTMLElement[] | string): PapaCarouselBuilder {
        this.elements = val;
        return this;
    }

    public getElements(): HTMLElement[] | string {
        return this.elements;
    }

    public getPapa(): PapaCarousel {
        return new PapaCarousel(this);
    }
}