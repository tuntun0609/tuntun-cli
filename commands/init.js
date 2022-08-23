import inquirer from "inquirer";
import { exec } from "child_process";
import ora from "ora";
import ls from "log-symbols";
import fs from "fs/promises";
import util from "util";

import { removePromise } from './utils.js';

const execPromise = util.promisify(exec);

import { promptList } from "./prompt-list.js";
import { gitAddress } from "./git-address.js";

// 克隆项目
const cloneTemplete = async (url, options) => {
  console.log(ls.info, `开始初始化项目: ${options.name}`);
  const spinner = ora('拉取项目中');
  spinner.start();
  try {
    await execPromise(`git clone ${url} ${options.name}`);
    spinner.succeed('项目拉取完成');
  } catch (error) {
    spinner.stop();
    console.log(ls.error, '项目拉取失败', error.message);
    process.exit();
  }
};

// 修改配置项
const changePackage = async (options) => {
  let nowPath = process.cwd();
  try {
    const spinner = ora('初始化...');
    spinner.start();
    let data = await fs.readFile(`${nowPath}/${options.name}/package.json`);
    
    // 覆盖信息
    data = JSON.parse(data.toString());
    data.author = options.author;
    data.version = options.version;
    data.name = options.name;

    // 重写package.json文件，初始化仓库
    try {
      await fs.writeFile(`${nowPath}/${options.name}/package.json`, JSON.stringify(data, '', 2));
      await removePromise(`${nowPath}/${options.name}/.git`);
      await execPromise(`cd ${options.name} && git init`);
      spinner.stop();
      console.log(ls.success, `项目创建成功`);
    } catch (error) {
      spinner.stop();
      console.log(ls.error, error.message);
    }

  } catch (error) {
    console.log(ls.error, error.message);
  } finally {
    process.exit();
  }

};

export const init = (projectName) => {
  inquirer
    .prompt(promptList)
    .then(async (answer) => {
      let options = {
        name: projectName,
        ...answer,
      }
      await cloneTemplete(gitAddress.test, options);
      await changePackage(options);
    })
    .catch((err) => {
      console.log(ls.error, err);
    });
};
