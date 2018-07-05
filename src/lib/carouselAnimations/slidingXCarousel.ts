import { ICarousel } from './../helpers/dtos.d';

export class SlidingXCarousel implements ICarousel {

    showAnimation(): {[ propertyName: string ]: string } {
        return { opacity: '1', transform: 'translateX(0)' };
    }

    hideAnimation(): {[ propertyName: string ]: string } {
        return { opacity: '1', transform: 'translateX(-100%)' };
    }

    starterPack(): {[ propertyName: string ]: string } {
        return { opacity: '0', transform: 'translateX(100%)' };
    }

    getTransitionProperties(): string {
        return 'transform';
    }
}
