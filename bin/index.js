#!/usr/bin/env node
'use strict' //严格模式

import { init } from '../commands/index.js'
import { Command } from 'commander';
const program = new Command();
program.usage('<command>')

program
  .command('create <projectName>')
  .description('create a project')
  .action((projectName) => {
    init(projectName);
  })

program.parse(process.argv);
