import { concreteSubject } from './helpers/concreteSubject';
export class ProgressBar {
    private progressBarEl: HTMLDivElement;

    constructor() {}

    initBar(parentEl: HTMLElement, timeAnimationFn: number): void {
        concreteSubject.attach(this.resetAnimation.bind(this));
        this.progressBarEl = this.createNavEl(parentEl, ['progress-bar', 'animate'], timeAnimationFn);
    }

    private createNavEl(parentEl: HTMLElement, className: string[], timeAnimationFn: number): HTMLDivElement {
        const divEl = document.createElement('div');
        divEl.classList.add(...className);
        divEl.style.animationDuration = timeAnimationFn + 'ms';
        parentEl.appendChild(divEl);
        return divEl;
    }

    private resetAnimation(): void {
        this.progressBarEl.classList.remove('animate');
        void this.progressBarEl.offsetWidth;
        this.progressBarEl.classList.add('animate')
    }
}

export const progressBar = new ProgressBar;