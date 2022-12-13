import { createObjectCsvWriter } from 'csv-writer';
import { Storage } from '@google-cloud/storage';

export const uploadFile = async (file, storage: Storage, bucket: string): Promise<string> => {
  return new Promise((resolves, rejects) => {
    const fileUpload = storage
      .bucket(bucket)
      .file(file.originalname);
    const stream = fileUpload.createWriteStream({
      resumable: true,
      metadata: {
        contentType: file.mimetype,
      },
    });
    stream.on('finish', async () => {
      resolves(fileUpload.id);
    });
    stream.on('error', err => {
      rejects(err);
    });
    stream.end(file.buffer);
  });
}

export const uploadFileFromPath = async (path, storage: Storage, bucket: string): Promise<string> => {
  return new Promise((resolves, rejects) => {
    storage.bucket(bucket).upload(path, (error, file) => {
      if (error) {
        rejects(error);
        return;
      }
      resolves(file.id);
    });
  });
}

export const deleteFile = async (fileName, storage: Storage, bucket: string) => {
  return new Promise(async (resolves, rejects) => {
    try {
      await storage
        .bucket(bucket)
        .file(fileName)
        .delete({ ignoreNotFound: true });
      resolves({});
    } catch (error) {
      rejects(error);
    }
  })
}

export const exportDataToCsv = (
  data: any[],
  header: any[],
  filePath: string,
): Promise <string> => {
  return new Promise(async (resolves, rejects) => {
    try {
      const writer = createObjectCsvWriter({
        path: filePath,
        header,
        encoding: 'utf8'
      });
      await writer.writeRecords(data);
      resolves(filePath);
    } catch (error) {
      rejects(error);
    }
  })
}