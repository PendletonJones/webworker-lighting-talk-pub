declare module 'document-offset' {
    interface IOffs { left: number, top: number };
    type Maybe<T> = T | undefined;
    export default (element: any): Maybe<IOffs>;
};

declare module 'when-dom-ready' {
    function domready(callback: () => any): void;
    export default domready;
};

declare module JSX {
    interface IntrinsicElements {
        // define custom elements here
        // "animateMotion": SVGAnimationElement;
        // "mpath": SVGElement;
    }
}