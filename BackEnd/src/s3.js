import S3 from 'aws-sdk/clients/s3';
import fs from 'fs';
import { config } from 'dotenv';
config();

const bucketName =  process.env.AWS_BUCKECT_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_KEY_ID;
const secretAccessKey = process.env.AWS_KEY_SECRET;


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

//upload a file to s3
export const uploadImageToAWS = (file) =>{
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename,
    }
    return s3.upload(uploadParams).promise();
};

//download an image from s3
export const getImageFromAWS = (fileKey) => {
    const downloadParams = {
        Key:fileKey,
        Bucket:bucketName
    }
    return s3.getObject(downloadParams).createReadStream();
};