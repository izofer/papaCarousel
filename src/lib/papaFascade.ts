import { listener } from './helpers/listener';
import { PapaCarouselBuilder } from './papaCarouselBuilder';
import { PapaCarousel } from "./papaCarousel";

import { TransitionFnType, CarouselTypes } from './helpers/dtos.d';

export class PapaFascade {
    private papaBuilder: PapaCarouselBuilder

    constructor() {
        this.papaBuilder = new PapaCarouselBuilder();
    }

    public destroyListeners() {
        listener.destroyListeners();
    }

    public setParent(val: HTMLElement | string): PapaCarouselBuilder {
        return this.papaBuilder.setParent(val);
    }

    public setElements(val: HTMLElement[] | string): PapaCarouselBuilder {
        return this.papaBuilder.setElements(val);
    }

    public setType(val: CarouselTypes): PapaCarouselBuilder {
        return this.papaBuilder.setType(val);
    }

    public setButtons(val: boolean): PapaCarouselBuilder {
        return this.papaBuilder.setButtons(val);
    }

    public setProgressBar(val: boolean): PapaCarouselBuilder {
        return this.papaBuilder.setProgressBar(val);
    }

    public setTimePerSlide(val: number): PapaCarouselBuilder {
        return this.papaBuilder.setTimePerSlide(val);
    }

    public setTimingFn(val: number): PapaCarouselBuilder {
        return this.papaBuilder.setTimingFn(val);
    }

    public setTransitionFn(val: TransitionFnType): PapaCarouselBuilder {
        return this.papaBuilder.setTransitionFn(val);
    }

    public getPapa(): PapaCarousel {
        return this.papaBuilder.getPapa();
    }
}