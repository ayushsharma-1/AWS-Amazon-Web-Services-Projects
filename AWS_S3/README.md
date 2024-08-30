
---

# Image Storage and Metadata Management with AWS S3 and MongoDB

This project demonstrates how to build a Node.js server that integrates with Amazon S3 for image storage and MongoDB for metadata management. The primary objective is to create a system where users can upload images via a web interface (built with HTML or React), store these images directly in AWS S3, and save the image URLs along with relevant metadata in a MongoDB database.

## Table of Contents

- [Project Description](#project-description)
- [Objectives](#objectives)
- [AWS Services Used](#aws-services-used)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [AWS Setup](#aws-setup)
- [Usage](#usage)
- [Example Screenshots](#example-screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project demonstrates how to build a Node.js server that integrates with Amazon S3 for image storage and MongoDB for metadata management. The primary objective is to create a system where users can upload images via a web interface (built with HTML or React), store these images directly in AWS S3, and save the image URLs along with relevant metadata in a MongoDB database.

## Objectives

- **Image Upload and Storage**: Allow users to upload images through a web interface and store them securely in an Amazon S3 bucket.
- **Metadata Management**: Store the image URLs and any associated metadata in MongoDB for easy retrieval and management.
- **Scalability and Flexibility**: Leverage AWS's scalable infrastructure and MongoDB's flexible schema to handle various image types and metadata requirements.

## AWS Services Used

- **Amazon S3**: For secure, scalable storage of images.
- **Amazon IAM**: To manage access to the S3 bucket.
- **AWS SDK**: To interact with S3 and perform operations such as uploading files.

## Technologies Used

- **Node.js**: Backend server for handling image uploads and managing API requests.
- **Express.js**: Web framework for building the server-side logic.
- **MongoDB**: Database to store image URLs and metadata.
- **Mongoose**: ORM for MongoDB, simplifying database interactions.
- **HTML/React**: Frontend interface for user interactions (uploading images, viewing uploads).

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or higher)
- npm or yarn
- MongoDB (locally or a cloud instance)
- An AWS account

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushsharma-1/AWS-Amazon-Web-Services-Projects/.git
   cd AWS_S3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project:

   ```bash
   touch .env
   ```

   Add the following variables to the `.env` file:

   ```env
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_REGION=your-region
   MONGODB_URL=your-mongodb-connection-string
   ```

   > **Important:** Never share your AWS credentials or MongoDB connection string. Use environment variables to keep these details secure.

## AWS Setup

### 1. Create an S3 Bucket

1. Log in to your AWS account and navigate to the S3 service.
2. Click on **Create Bucket**.
3. Enter a unique bucket name and select a region.
4. Disable **Block all public access** under **Bucket settings for Block Public Access** to make the bucket public.
5. Click on **Create bucket**.

### 2. Make the Bucket Public

1. Go to your bucket and select the **Permissions** tab.
2. Scroll down to the **Bucket policy** section and click on **Edit**.
3. Add the following policy to make your bucket public:

   ```json
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Sid": "PublicReadGetObject",
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::your-bucket-name/*"
           }
       ]
   }
   ```

   Replace `your-bucket-name` with the name of your S3 bucket.

### 3. Create AWS Access Keys

1. Go to the **IAM** (Identity and Access Management) service in AWS.
2. Click on **Users** and then **Add user**.
3. Enter a username, select **Programmatic access**, and click **Next**.
4. Attach the **AmazonS3FullAccess** policy to the user.
5. Click through the next steps to create the user and download the **.csv** file containing your **Access Key ID** and **Secret Access Key**.

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open your browser:**

   Navigate to `http://localhost:3000` to access the web interface.

3. **Upload an Image:**
4. 
   Use the interface to upload an image, which will be stored in the S3 bucket with its URL saved in MongoDB.

## Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

