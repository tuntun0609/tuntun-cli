export const promptList = [
  // {
  //   type: 'input',
  //   name: 'projectName',
  //   message: '你的项目名称为',
  //   default: 'mini-program',
  //   validate: (value) => {
  //     if (value === '') {
  //       console.log(chalk.red.bold('不能为空'));
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   },
  // },
  {
    type: 'input',
    name: 'author',
    message: '作者名',
  },
  {
    type: 'input',
    name: 'version',
    message: '你的项目版本号为',
    default: '0.1.0',
  },
  // {
  //   type: 'list',
  //   name: 'language',
  //   message: '你想要创建哪种类型的项目',
  //   choices: ['Js', 'Ts'],
  // },
  // {
  //   type: 'list',
  //   name: 'isUseCssPreprocessor',
  //   default: false,
  //   message: '是否使用css预处理器',
  //   choices: [
  //     {
  //       name: '不使用',
  //       value: false
  //     },
  //     {
  //       name: '使用',
  //       value: true
  //     }
  //   ],
  // },
  // {
  //   type: 'list',
  //   name: 'cssPreprocessor',
  //   default: 'less',
  //   message: '是否使用css预处理器',
  //   choices: ['less', 'sass'],
  //   when: (value) => {
  //     if (value.isUseCssPreprocessor) {
  //       return true;
  //     }
  //     return false;
  //   },
  // },
  // {
  //   type: 'list',
  //   name: 'isCloud',
  //   default: false,
  //   message: '是否使用云开发',
  //   choices: [
  //     {
  //       name: '不使用',
  //       value: false
  //     },
  //     {
  //       name: '使用',
  //       value: true
  //     }
  //   ],
  // }
];
