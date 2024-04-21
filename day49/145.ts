function invokeCallback(callback: (...args: any[]) => void, ...args: any[]): void {
    callback(...args);
}