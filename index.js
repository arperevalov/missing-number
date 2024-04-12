// Firstly, remove any duplicated values to make the array shorter.
// Although not stated, parsing string values can stabilize our program.
// Next, filter values to omit types like undefined, null, and NaN, which can appear after parseInt operation.
// After filtering values, sort the final array and then iterate over it to find the missing value.
// We find the missing value by comparing each element with the next one in the array.
// If the next value is not equal to the expected value (current value plus 1), return the expected value.
// Finally, return the length of the array if no missing values are found, or if the array is empty.

function findMissingNumber(array) {
    // Creating a Set to remove duplicated values
    const unique = [...new Set(array)];

    // Parsing string values if provided
    const parsed = unique.map((item) => {
        if (typeof item === 'string') {
            return parseInt(item, 10);
        }
        return item;
    });

    // Filtering array to handle types like undefined, null, and NaN values
    const ommited = parsed.filter((item) => {
        if (typeof item === 'number' && !isNaN(item)) return true;
        return false;
    });

    // Sorting array for later iteration over each value
    const sorted = ommited.sort((a, b) => a - b);

    // Iterating over each value in the array to find the missing number
    for (let i = 0; i < sorted.length; i++) { 
        const current = sorted[i];
        const next = sorted[i + 1];
        const expected = current + 1;

        // If the next value isn't equal to the expected value, return the expected value
        if (next !== expected) {
            return expected;
        };
    }

    // Return the length of the array if no missing values are found, covering the empty array case as well
    return array.length;
}

module.exports = findMissingNumber;