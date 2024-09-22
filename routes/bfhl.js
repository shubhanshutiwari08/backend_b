// const express = require('express');
// const router = express.Router();
// const { validateFile } = require('../utils/fileUtils');

// router.post('/', (req, res) => {
//     const { data, file_b64, file_mime_type } = req.body;

//     const fileValidation = validateFile(file_b64, file_mime_type);

//     res.json({
//         is_success: true,
//         user_id: "shubhanshu_tiwari_08062003", // Replace with actual logic if needed
//         email: "sa5597@srmist.edu.in", // Replace with actual logic if needed
//         roll_number: "RA2111003010163", // Replace with actual logic if needed
//         numbers: [], // Replace with actual logic if needed
//         alphabets: [""], // Replace with actual logic if needed
//         highest_lowercase_alphabet: [""], // Replace with actual logic if needed
//         file_valid: fileValidation.isValid,
//         file_mime_type: fileValidation.mimeType,
//         file_size_kb: fileValidation.sizeKb,
//     });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { validateFile } = require('../utils/fileUtils');

router.post('/', (req, res) => {
    const { data, file_b64, file_mime_type } = req.body;

    // Validate the uploaded file
    const fileValidation = validateFile(file_b64, file_mime_type);

    // Extract numbers and alphabets from the input data
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';
    let highestUppercase = '';

    // Assuming `data` is an array of strings
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (typeof item === 'number') {
                numbers.push(item);
            } else if (typeof item === 'string') {
                // Match both lowercase and uppercase characters
                const lowercaseChars = item.match(/[a-z]/g);
                const uppercaseChars = item.match(/[A-Z]/g);

                if (lowercaseChars) {
                    alphabets.push(...lowercaseChars);
                    const highestChar = lowercaseChars.reduce((a, b) => (a > b ? a : b), '');
                    highestLowercase = highestLowercase > highestChar ? highestLowercase : highestChar;
                }

                if (uppercaseChars) {
                    alphabets.push(...uppercaseChars);
                    const highestChar = uppercaseChars.reduce((a, b) => (a > b ? a : b), '');
                    highestUppercase = highestUppercase > highestChar ? highestUppercase : highestChar;
                }
            }
        });
    }

    // Prepare the response
    res.json({
        is_success: true,
        user_id: "shubhanshu_tiwari_08062003", // Replace with actual logic if needed
        email: "sa5597@srmist.edu.in", // Replace with actual logic if needed
        roll_number: "RA2111003010163", // Replace with actual logic if needed
        numbers: numbers, // Extracted numbers
        alphabets: [...new Set(alphabets)], // Unique alphabet characters
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [], // Highest lowercase letter
        highest_uppercase_alphabet: highestUppercase ? [highestUppercase] : [], // Highest uppercase letter
        file_valid: fileValidation.isValid,
        file_mime_type: fileValidation.mimeType,
        file_size_kb: fileValidation.sizeKb,
    });
});

module.exports = router;
