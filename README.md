<div align="center"><h1>ProgressBar.JS</h1></div>
An easy way to create terminal progress bar !

# Summary
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

# Requirements
- [Node](https://nodejs.org/en/) - 16.15.0
- [NPM](https://www.npmjs.com/) - 8.5.5

# Installation
To install the package, execute this command in the terminal:
```bash
npm install @seyioo/progressbar.js
```

# Usage
Create a customizable progress bar !

## Quick Start
You just have to import the functions as well:
```js
// Import the functions
const ProgressBar = require('@seyioo/progressbar.js');
```

### Example
```js
// Import the functions
const ProgressBar = require('@seyioo/progressbar.js');

// Init your progress bar
const bar = new ProgressBar(
    3, // The number of stages.
    ['%', '-'] // [%%%%%%%%%%----------]
    ['|', '|'] // |%%%%%%%%%%----------|
);
// |--------------------|

bar.reload(); // |--------------------|
bar.next(); // |%%%%%%--------------|
bar.next(); // |%%%%%%%%%%%%%-------|
bar.next(); // |%%%%%%%%%%%%%%%%%%%%|
bar.next(); // |--------------------|
bar.previous(); // |%%%%%%%%%%%%%%%%%%%%|
bar.previous(); // |%%%%%%%%%%%%%-------|
bar.previous(); // |%%%%%%--------------|
bar.previous(); // |--------------------|
bar.previous(); // |%%%%%%%%%%%%%%%%%%%%|
bar.set(0); // |--------------------|
bar.set(4); // |%%%%%%--------------|
bar.set(7); // |%%%%%%--------------|
bar.set(-1); // |--------------------|
bar.set(-4); // |--------------------|
```