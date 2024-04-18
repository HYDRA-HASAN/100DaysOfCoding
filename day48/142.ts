const myPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

myPromise.then((result) => {
    console.log(result);
});