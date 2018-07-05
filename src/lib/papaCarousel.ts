import { carouselNavigation } from './carouselNavigation';
import { PapaCarouselBuilder } from './papaCarouselBuilder';
import { progressBar } from './progressBar';

import { carouselFactory } from './carouselAnimations/carouselFactory';

import { concreteSubject } from './helpers/concreteSubject';
import { listener } from './helpers/listener';
import { validationData } from './helpers/validationData';
import { pageVisibility } from './helpers/pageVisibility';
import { Calculation } from './helpers/calculation';
import { ICarousel, TransitionFnType } from "./helpers/dtos";

export class PapaCarousel {
    private carousel: ICarousel;
    private timePerSlide: number;
    private elements: HTMLElement[];
    private calculation: Calculation;
    private transitionProperty: string;

    readonly identificatorLoop: string = 'carouselLoop';

    constructor(builder: PapaCarouselBuilder) {
        const parentEl = validationData.parentChecker(builder.getParent());

        this.timePerSlide = validationData.timePerSlideChecker(builder.getTimePerSlide());
        this.carousel = carouselFactory.getCarousel(validationData.typeChecker(builder.getType()));
        this.elements = validationData.elementsChecker(builder.getElements(), parentEl);
        
        if(validationData.buttonsChecker(builder.getButtons())) {
            carouselNavigation.initButtons(parentEl);
            concreteSubject.attach(this.onNavClick.bind(this));
        }

        if(validationData.progressBarChecker(builder.getProgressBar())) {
            progressBar.initBar(parentEl, this.timePerSlide);
        }

        this.transitionProperty = `${this.carousel.getTransitionProperties()} ${validationData.timingFnChecker(builder.getTimingFn())}ms 
            ${validationData.transitionFnTypesChecker(builder.getTransitionFn())}`;

        this.calculation = new Calculation(this.elements.length - 1);
        pageVisibility.initListener();

        this.initSlider();
    }

    private transitionEndFn = (e: Event) => {
        this.addStyles((<HTMLElement>e.srcElement), this.carousel.starterPack());
        listener.removeListener(<any>this.transitionEndFn);
    };

    private carouselLoopFn = () => {

        return setTimeout(() => {
            const currentEl = this.elements[this.calculation.getIndex()];
            listener.addListener('transitionend', currentEl, <any>this.transitionEndFn);
            this.slideCarousel(1);

            listener.setTimeoutFn(this.identificatorLoop, this.carouselLoopFn());
        }, this.timePerSlide);
    };

    private slideCarousel(newIndex: number, fn?: (el: HTMLElement) => void): void {
        const [currentEl, newEl] = [this.elements[this.calculation.getIndex()], this.elements[this.calculation.getIndex(newIndex)]];

        this.addStyles(currentEl, this.carousel.hideAnimation());
        this.addStyles(newEl, this.carousel.showAnimation());

        if(typeof fn === 'function')
            fn(currentEl);
    }

    private initSlider(resetSlider?: boolean): void {
        if(!resetSlider)
            this.prepareItems(); 
        listener.setTimeoutFn(this.identificatorLoop, this.carouselLoopFn());
    }

    private prepareItems(): void {
        this.elements.map((e, i) => this.addStyles(e, 
            { ...(i === this.calculation.getIndex() ? this.carousel.showAnimation() : this.carousel.starterPack()), transition: this.transitionProperty}));
    }

    private addStyles(el: HTMLElement, styles: {[propertyName: string]: string}): void {
        for(let [property, value] of Object.entries(styles))
            el.style[property] = value;
    }

    private onNavClick(args: any): void {
        listener.clearTimeoutFn(this.identificatorLoop);

        if(args === 'pageHidden')
            return;
        if(typeof args === 'number')
            this.slideCarousel(args, el => listener.addListener('transitionend', el, <any>this.transitionEndFn));
        this.initSlider(true);
    }
}