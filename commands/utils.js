import fs from 'fs';
import path from 'path';

export const removePromise = (dir) => {
  return new Promise(function (resolve, reject) {
    //先读文件夹
    fs.stat(dir,function (err, stat) {
      if(stat.isDirectory()){
        fs.readdir(dir,function (err, files) {
          files = files.map(file=>path.join(dir,file)); // a/b  a/m
          files = files.map(file=>removePromise(file)); //这时候变成了promise
          Promise.all(files).then(function () {
            fs.rmdir(dir,resolve);
          })
        })
      }else {
        fs.unlink(dir,resolve)
      }
    })
  })
}
