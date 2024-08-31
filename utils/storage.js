// utils/storage.js

import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadImageToStorage = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // Your bucket name
    Key: `${Date.now()}-${file.name}`, // Unique file name
    Body: file,
    ContentType: file.type,
  };

  const data = await s3.upload(params).promise();
  return data.Location; // This is the URL of the uploaded image
};
