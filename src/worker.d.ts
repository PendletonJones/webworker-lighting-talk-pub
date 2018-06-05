declare module 'worker-loader!*' {
    class LoadedWebpackWorker extends Worker {
        constructor();
    }
    export default LoadedWebpackWorker;
}