import { ICarousel } from './../helpers/dtos.d';

export class FadingCarousel implements ICarousel {

    showAnimation(): {[ propertyName: string ]: string } {
        return { opacity: '1' };
    }

    hideAnimation(): {[ propertyName: string ]: string } {
         return { opacity: '0' };
    }

    starterPack(): {[ propertyName: string ]: string } {
        return { opacity: '0' };
    }

    getTransitionProperties(): string {
        return 'opacity';
    }
}
