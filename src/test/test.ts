import { batch } from '../index';

// Example usage:
try {
    batch.set.set({ VAR1: "abcd", VAR2: "1234" }); // Adds "set VAR1=abcd" and "set VAR2=1234" to the file
    batch.echo.echo("%VAR1%"); // Adds "echo %VAR1%" to the file
    batch.echo.echo("%VAR2%"); // Adds "echo %VAR2%" to the file

    // Test with duplicate values to see the error handling
    batch.set.set({ VAR1: "dddd" }); // Throws an error because VAR1 is already set to "abcd"
} catch (error) {
    console.error(error);
}