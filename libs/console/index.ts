const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
require('dotenv').config({ path: '.env.dev' });

class Console {
  private static db_username = process.env['MONGO_INITDB_ROOT_USERNAME'];
  private static db_password = process.env['MONGO_INITDB_ROOT_PASSWORD'];
  private static db_host = process.env['HOST'];
  private static db_port = process.env['PORT'];
  private static db_name = process.env['MONGO_DATABASE'];

  static uri = `mongodb://${this.db_username}:${this.db_password}@${this.db_host}:${this.db_port}/${this.db_name}?authMechanism=SCRAM-SHA-1&authSource=admin`;

  static async backup() {
    const outFileName = `"${new Date()
      .toISOString()
      .slice(0, 13)
      .replace('T', '-')}"`;
    const outDir = path.join(__dirname, `mongo/${outFileName}`);
    const cmd = `mongodump --uri="${this.uri}" --out=${outDir}`;

    try {
      console.log('In progress');
      await exec(cmd);
      console.log('Back up successfully');
    } catch (err) {
      console.log(err);
    }
  }

  static async restore() {
    const backupPath = path.join(__dirname, 'mongo');
    const listFile = await fs.promises.readdir(backupPath);
    try {
      const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'fileName',
          message: 'Select date to back up your data',
          choices: listFile,
        },
      ]);
      const filePath = backupPath + `/${answer.fileName}/dev`;
      const backupChoice = await inquirer.prompt([
        {
          type: 'expand',
          name: 'choice',
          message: 'Do you want to backup your current data before restoring?',
          choices: [
            {
              key: 'y',
              value: 'yes',
            },
            {
              key: 'n',
              value: 'no',
            },
          ],
        },
      ]);
      if (backupChoice.choice === 'yes') {
        await this.backup();
      }
      const cmd = `mongorestore --uri="${this.uri}" ${filePath}`;
      const result = await exec(cmd);
      console.log('Restore successfully');
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Console;
