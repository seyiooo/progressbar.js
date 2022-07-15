const ProgressBar = require('../lib/index');

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