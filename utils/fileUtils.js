const validateFile = (fileBase64, mimeType) => {
  if (!fileBase64) return { isValid: false, mimeType: '', sizeKb: 0 };

  try {
      const buffer = Buffer.from(fileBase64, 'base64');
      const sizeKb = buffer.length / 1024;
      return {
          isValid: true,
          mimeType: mimeType,
          sizeKb,
      };
  } catch (error) {
      return { isValid: false, mimeType: '', sizeKb: 0 };
  }
};

module.exports = { validateFile };
