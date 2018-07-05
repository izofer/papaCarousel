import { concreteSubject } from './concreteSubject';
import { listener } from './listener';

export class PageVisibility {
    readonly pageVisibilityFn: string = 'pageVisibilityFn';

    constructor() {}
    
    private onPageVisiblityChangeFn = (e: Event) => {
        concreteSubject.notifyAll(document.hidden ? 'pageHidden' : 'pageVisible');
    };

    initListener(): void {
        listener.addListener('visibilitychange', <any>document, <any>this.onPageVisiblityChangeFn);
    }
}

export const pageVisibility = new PageVisibility;