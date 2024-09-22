const express = require('express');
const router = express.Router();
const { validateFile } = require('../utils/fileUtils');

router.post('/', (req, res) => {
    const { data, file_b64, file_mime_type } = req.body;

    const fileValidation = validateFile(file_b64, file_mime_type);

    res.json({
        is_success: true,
        user_id: "shubhanshu_tiwari_08062003", // Replace with actual logic if needed
        email: "sa5597@srmist.edu.in", // Replace with actual logic if needed
        roll_number: "RA2111003010163", // Replace with actual logic if needed
        numbers: [1], // Replace with actual logic if needed
        alphabets: ["a"], // Replace with actual logic if needed
        highest_lowercase_alphabet: ["a"], // Replace with actual logic if needed
        file_valid: fileValidation.isValid,
        file_mime_type: fileValidation.mimeType,
        file_size_kb: fileValidation.sizeKb,
    });
});

module.exports = router;
