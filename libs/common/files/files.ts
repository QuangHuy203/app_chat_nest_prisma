import { promises as fsPromises, readFileSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import * as dotenv from 'dotenv';

export class System {
  getENV(config: dotenv.DotenvConfigOptions): NodeJS.ProcessEnv {
    dotenv.config(config);
    return process.env;
  }

  // ✅ write to file SYNCHRONOUSLY
  syncWriteFile(filename: string, data: any) {
    //  - w = Open file for reading and writing. File is created if not exists
    //  - a+ = Open file for reading and appending. The file is created if not exists
    writeFileSync(join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = readFileSync(join(__dirname, filename), 'utf-8');
    // 👉️ "One Two Three Four"
    console.log(contents);

    return contents;
  }

  // ✅ write to file ASYNCHRONOUSLY
  async asyncWriteFile(filename: string, data: any) {
    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */
    try {
      await fsPromises.writeFile(join(__dirname, filename), data, {
        flag: 'w',
      });

      const contents = await fsPromises.readFile(
        join(__dirname, filename),
        'utf-8',
      );

      return contents;
    } catch (err) {
      console.log(err);
      return 'Something went wrong';
    }
  }
}
