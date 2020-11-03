SampleCalc
=====================
SampleCalc is my university project. It can calculate entropy of text, frequency, quantity of chars and etc.
### Dependencies for building
Install these packages via npm (without "sudo" on Windows OS):
```
sudo npm i -g --save-dev electron electron-packager
```
### Building
First of all you need clone this repo:
```
git clone https://github.com/Shtraikher/SampleCalc
```
Then change directory:
```
cd ./SampleCalc
```
And build it with electron-packager.
For Linux-based OS:
```
electron-packager ./ SampleCalc --platform=linux --arch=x64
```
Or for Windows OS:
```
electron-packager ./ SampleCalc --platform=win32 --arch=x64
```
***
***Created using Node.js and Electron***
