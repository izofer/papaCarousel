type ListenerType = { eventName: string, element: HTMLElement, fn: (e: Event) => EventListenerOrEventListenerObject };
type TimeoutType = { identificator: string, timer: NodeJS.Timer }; 

export class Listener {
    private listenerArray: ListenerType[] = [];
    private timeoutArray: TimeoutType[] = [];

    constructor() {}

    public addListener(eventName: string, element: HTMLElement, fn: (e: Event) => EventListenerOrEventListenerObject): void {
        const length = this.listenerArray.push({eventName, element, fn}) - 1;
        element.addEventListener(eventName, fn);
    }

    public removeListener(fn: (e: Event) => EventListenerOrEventListenerObject): void {
        const index: number = this.listenerArray.findIndex(l => l.fn === fn);
        if(this.listenerArray[index]) {
            const item: ListenerType = this.listenerArray.splice(index, 1)[0];
            item.element.removeEventListener(item.eventName, item.fn);
        }
    }

    public destroyListeners(): void {
        this.listenerArray.map(l => l.element.removeEventListener(l.eventName, l.fn));
        this.timeoutArray.map(t => clearTimeout(t.timer));
    }

    public setTimeoutFn(identificator: string, timer: any): void {
        const index: number = this.timeoutArray.findIndex(t => t.identificator === identificator);
        if(this.timeoutArray[index]) 
            this.timeoutArray[index].timer = timer;
        else
            this.timeoutArray.push({identificator, timer});
    }

    public clearTimeoutFn(identificator: string): void {
        const index: number = this.timeoutArray.findIndex(t => t.identificator === identificator);
        if(this.timeoutArray[index]) {
            const item: TimeoutType = this.timeoutArray.splice(index, 1)[0];
            clearTimeout(item.timer);
        }

    }
}

export const listener = new Listener;