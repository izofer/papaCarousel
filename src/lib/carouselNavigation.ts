import { concreteSubject } from './helpers/concreteSubject';
import { listener } from './helpers/listener';

export class CarouselNagivation {
    private prevSvg: string = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
            <path fill="none" d="M0,0h24v24H0V0z"/>
        </svg>
    `;
    private nextSvg: string = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
            <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
            <path fill="none" d="M0,0h24v24H0V0z"/>
        </svg>
    `;

    private onNavClick = (e: Event) => {
        concreteSubject.notifyAll(this.getDivRef(<HTMLElement>e.target).className === 'prev-btn' ? -1 : 1);
    };

    initButtons(parentEl: HTMLElement): void {
        [this.createNavEl(parentEl, this.prevSvg, 'prev-btn'), this.createNavEl(parentEl, this.nextSvg, 'next-btn')]
            .map(b => listener.addListener('click', b, <any>this.onNavClick));
    }

    private createNavEl(parentEl: HTMLElement, svg: string, className: string): HTMLDivElement {
        const divEl = document.createElement('div');
        divEl.classList.add(className);
        divEl.innerHTML = svg;
        parentEl.appendChild(divEl);
        return divEl;
    }

    private getDivRef(el: HTMLElement): HTMLDivElement {
        if(el instanceof HTMLDivElement)
            return el;
        return this.getDivRef(el.parentElement);
    }
}

export const carouselNavigation = new CarouselNagivation;