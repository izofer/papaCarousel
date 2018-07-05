import * as Carousels from './carousels';
import { ICarouselFactory, CarouselTypes, ICarousel } from './../helpers/dtos.d';

export class CarouselFactory implements ICarouselFactory {
    
    public getCarousel(type: CarouselTypes): ICarousel {
        switch(type) {
            case 'fading': return new Carousels.FadingCarousel();
            case 'slidingX': return new Carousels .SlidingXCarousel();
            case 'slidingY': return new Carousels.SlidingYCarousel();
        }
    } 
} 
 
export const carouselFactory = new CarouselFactory;