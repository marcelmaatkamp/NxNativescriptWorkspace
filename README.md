# NxNativescriptWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0 using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png"></a>

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

 * https://nrwl.io/nx/guide-getting-started
 * https://github.com/nrwl/nx
 * https://github.com/NathanWalker/template-nativescript-nx

## Quick Start & Documentation

[Watch a 5-minute video on how to get started with Nx.](http://nrwl.io/nx)

## Generate your first application

The steps I took to create this workspace and build the application for the Google Playstore: 

```
Install the workspace with the stable version:

$ curl -fsSL https://raw.githubusercontent.com/nrwl/nx/master/packages/install/install.sh |\
  bash -s NxNativescriptWorkspace

OR install the 'unstable' branch:
  
$ curl -fsSL https://raw.githubusercontent.com/nrwl/nx/master/packages/install/install-next.sh |\
  bash -s NxNativescriptWorkspace
  
$ cd NxNativescriptWorkspace 
$ yarn install
$ cd apps
$ tns create mobile-app-name --template https://github.com/NathanWalker/template-nativescript-nx
```

The outcome of those steps are what I commited in this Github repository and the following are the steps I took to build publish this sample application to the Google Playstore:

```
$ cd mobile-app-name
$ yarn install
$ ANDROID_HOME=/Users/marcel/Library/Android/sdk tns prepare android
$ ANDROID_HOME=/Users/marcel/Library/Android/sdk tns build android
$ ANDROID_HOME=/Users/marcel/Library/Android/sdk tns run android
$ keytool -genkey -v -keystore keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
$ ANDROID_HOME=/Users/marcel/Library/Android/sdk tns build android \
   --release \
   --key-store-path ./keystore.jks \
   --key-store-alias my-alias \
   --key-store-password <<PASSWORD>> \
   --key-store-alias-password <<PASSWORD>>
```

I have submitted this sample application to proof that NxNative with Angular5 is indeed capable of producing an apk which can be subitted in the Google Playstore:

<a href="https://play.google.com/store/apps/details?id=org.nativescript.mobileappname"><img src="https://raw.githubusercontent.com/marcelmaatkamp/NxNativescriptWorkspace/master/.github/google_playstore_screenshot.png" width="250" ></a><br /> https://play.google.com/store/apps/details?id=org.nativescript.mobileappname

## iOS

See discussions:

 * https://github.com/NativeScript/nativescript-cli/issues/2716
 * https://github.com/angular/angular-cli/issues/4551
 * https://github.com/angular/angular-cli/issues/7151

```
$ yarn install
$ cd apps/mobile-app-name
$ tns appstore upload m.maatkamp@gmail.com \
   dvov-jzxm-bbbz-twbc e389cb52-557d-497d-a80c-e96dab78e044 "org.nativescript.workspace"
```

TODO: These steps for npm compile?

* mobileapp: 
 * package.json: webpack -> 1.8.0
 * AotCompiler -> AngularCompilerPlugin
 
```
npm install -save @ngtools/webpack@1.8.0
npm install -save @angular/cli@1.5.0
npm install
node_modules/.bin/update-ns-webpack
npm install
```

and 

```
$ npm install
$ npm run build-ios-bundle -- --release --for-device
$ tns prepare ios
$ tns build ios
$ tns appstore upload m.maatkamp@gmail.com \
   dvov-jzxm-bbbz-twbc e389cb52-557d-497d-a80c-e96dab78e044 "org.nativescript.workspace"
```

Take screenshots from the following devices in Xcode:
 * iPhone X
 * iPhone 6 Plus
 * iPad Pro 12.
 
Submit for review and publish application in itunesconnect.

## Development server

Run `ng serve --app=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --app=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --app=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Google Playstore and iOS applications

I have submitted this sample application in the appstore:

| OS | Link | 
| -- | -- |
| Android | <a href="https://play.google.com/store/apps/details?id=org.nativescript.mobileappname"><img src="https://raw.githubusercontent.com/marcelmaatkamp/NxNativescriptWorkspace/master/.github/google_playstore_screenshot.png" width="250" ></a><br /> https://play.google.com/store/apps/details?id=org.nativescript.mobileappname|
| iOS | <a href=""><img src="" width="250" ></a><br />| 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
