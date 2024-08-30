require('events').EventEmitter.defaultMaxListeners = 20;

const express = require('express');
const path = require('path');
const AWS = require('aws-sdk');
const multer = require('multer');
const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose;

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Configure AWS SDK
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// Connect to MongoDB

mongoose.connect(process.env.MONGODB_URL, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});


// MongoDB Schema
const imageSchema = new Schema({
    url: String,
});

const Image = mongoose.model('Image', imageSchema);
app.use(express.static(__dirname));
app.get('./public', (req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});
// Upload route
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        const params = {
            Bucket: 'ubuntutestbucket',
            Key: `${Date.now()}_${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read'
        };

        // Upload image to S3
        const uploadResult = await s3.upload(params).promise();

        // Save the image URL to MongoDB
        const newImage = new Image({ url: uploadResult.Location });
        await newImage.save();

        res.json({ success: true, url: uploadResult.Location });
    } catch (err) {
        console.error('Error uploading image:', err);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
