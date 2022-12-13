/* eslint-disable @typescript-eslint/no-var-requires */
import * as os from 'os';
import { System } from '../files/files';
require('dotenv').config();

const system = new System();
const data = `
generator client {
  provider        = "prisma-client-js"
  output          = "../node_modules/@prisma/mysql"
  previewFeatures = ["interactiveTransactions"]
}

datasource db {
  provider = "mysql"
  url      = env("MYSQL_DATABASE_URL")
}
`;

const { exec } = require('node:child_process');

const pushCustomSchema = () => {
  exec(
    `yarn sync:push:custom ${`./prisma/${os
      .hostname()
      .replace('.local', '')}.schema.prisma`}`,
    (err, stdout, stderr) => {
      if (err) {
        console.log(
          `Error generate database to your computer schema \n${stderr}`,
        );
        return;
      }
      console.log(`Push schema to database develop successfully.\nwaiting...`);
      exec(
        `yarn sync:generate:custom ${`./prisma/${os
          .hostname()
          .replace('.local', '')}.schema.prisma`}`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(
              `Error generate database to your computer schema \n${stderr}`,
            );
            return;
          }
          console.log(
            `Generate database develop successfully.\nCongratulation !!!`,
          );
        },
      );
    },
  );
};

const ENV = system.getENV({
  path: '.env.custom',
  override: true,
});
// ENV['HOST'] = 'localhost';
switch (ENV['CUSTOM_SCHEMA_PUSH']) {
  case 'PULL':
    const filename = `../../../prisma/${os
      .hostname()
      .replace('.local', '')}.schema.prisma`;

    system.asyncWriteFile(filename, data);

    exec(
      `cross-env MYSQL_DEV_PORT=50002 yarn sync:pull:custom ${`./prisma/${os
        .hostname()
        .replace('.local', '')}.schema.prisma`}`,
      (err, stdout, stderr) => {
        if (err) {
          console.log(
            `Error sync database to your computer schema.\n${stderr}`,
          );
          return;
        }

        console.log(
          `Pull database to your computer schema successfully.\nwaiting...`,
        );
        pushCustomSchema();
      },
    );
    break;
  case 'PUSH':
    pushCustomSchema();

    break;

  default:
    break;
}
