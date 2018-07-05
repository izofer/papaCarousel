import { ICarousel } from './../helpers/dtos.d';

export class SlidingYCarousel implements ICarousel {

    showAnimation(): {[ propertyName: string ]: string } {
        return { opacity: '1', transform: 'translateY(0)' };
    }

    hideAnimation(): {[ propertyName: string ]: string } {
        return { opacity: '1', transform: 'translateY(-100%)' };
    }

    starterPack(): {[ propertyName: string ]: string } {
        return { opacity: '0', transform: 'translateY(100%)' };
    }

    getTransitionProperties(): string {
        return 'transform';
    }
}
 