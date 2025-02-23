export declare const enum EventTrigger {
    Keyboard = 0,
    Focus = 1
}
export interface AutocompleteItem {
    label?: string;
    group?: string;
}
export interface AutocompleteSettings<T extends AutocompleteItem> {
    input: HTMLInputElement;
    render?: (item: T, currentValue: string) => HTMLDivElement | undefined;
    renderGroup?: (name: string, currentValue: string) => HTMLDivElement | undefined;
    className?: string;
    minLength?: number;
    emptyMsg?: string;
    strict: boolean;
    autoselectfirst: boolean;
    onFreeTextSelect?: (item: T, input: HTMLInputElement) => void;
    onSelect: (item: T | undefined, input: HTMLInputElement, event: KeyboardEvent | MouseEvent) => void;
    /**
     * Show autocomplete on focus event. Focus event will ignore the `minLength` property and will always call `fetch`.
     */
    showOnFocus?: boolean;
    fetch: (text: string, update: (items: T[] | false) => void, trigger: EventTrigger) => void;
    debounceWaitMs?: number;
    /**
     * Callback for additional autocomplete customization
     * @param {HTMLInputElement} input - input box associated with autocomplete
     * @param {ClientRect | DOMRect} inputRect - size of the input box and its position relative to the viewport
     * @param {HTMLDivElement} container - container with suggestions
     * @param {number} maxHeight - max height that can be used by autocomplete
     */
    customize?: (input: HTMLInputElement, inputRect: ClientRect | DOMRect, container: HTMLDivElement, maxHeight: number) => void;
}
export interface AutocompleteResult {
    destroy: () => void;
}
export default function autocomplete<T extends AutocompleteItem>(settings: AutocompleteSettings<T>): AutocompleteResult;
