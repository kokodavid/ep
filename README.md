# Eduweb Mobile App (Android / iOS)
<img src="/screenshots.png" height="400" />

The code includes the node dependencies (node_modules) directory. This is so that this repo acts as a snap-shot of the running app to avoid inconsistencies of the dependencies between the running app and updates that come with ``` npm install ```.


## Getting Started
- Clone the repository
- Ensure you have Node and Yarn on your PC
- The node_modules folder will allow you to skip running an npm install

## Getting Started With A Fresh Install Of Node dependencies
Delete the node_modules folder after cloning.

Run ``` npm install ```.

Ensure you have node and yarn on your PC using the commands ``` npm -v ```, ``` yarn -v``` and ``` node -v ```
> These will return the installed versions (If they are installed)

Next, start you can either use
```
ng-serve
```
to test on a browser Or you can build bundles using
```
ionic cordova build android --verbose --prod --release -- -- --packageType=bundle
```

Other variants of building or running on a virtual / real device will also work
