const fs = require('fs-extra');


// Каждый пункт задания выполнил отдельно, но я понимаю, что например создать папку с файлом можно одно строчкой.
fs.emptyDirSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir');

const file = 'C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir/tmpText.txt';
fs.ensureFileSync(file);

fs.emptyDirSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_2');

fs.moveSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir/tmpText.txt', 'C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_2/tmpText.txt');

fs.emptyDirSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_3');

fs.copySync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_2/tmpText.txt', 'C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_3/tmpText_copy.txt');

fs.removeSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_2/tmpText.txt');
fs.removeSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_3/tmpText_copy.txt');

fs.removeSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir');
fs.removeSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_2');
fs.removeSync('C:/Users/user/Desktop/25-1/homework/lesson3_homework/tmpDir_3');