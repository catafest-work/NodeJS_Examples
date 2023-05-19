// import fs and create a file named 'test_file.txt'
import fs from 'fs';

// create a file named 'open_test_file.txt' withot any text 
fs.open('open_test_file.txt', 'w+', function (err, f) {
  if (err) {
      return console.error(err);
  }
  console.log(f);
  console.log("File opened!!");
});

// create a file named 'test_file.txt with this test : 'This is a test file for NodeJS with FS module and writeFile'

// writeFile function with filename, content and callback function
fs.writeFile('writeFile_test_file.txt', 'This is a test file for NodeJS with FS module and writeFile', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

// appendFile function with filename, content and callback function
// NOTE : using the async function, the args can be inside function appendToFile
import appendFile from 'fs/promises'; 

async function appendToFile() {
  const filePath = "appendFile_test_file.txt";
  const content = 'This is a test file for NodeJS with FS module and appendToFile';
  
  try {
    await fs.promises.appendFile(filePath, content);
    console.log('Content appended to file successfully!');
  } catch (error) {
    console.error('Error appending content to file:', error);
  }
}
// run this async function 
appendToFile();

// renameFile function with filename, content and callback function
import { rename } from 'fs/promises';

async function renameToFile() {
  const fileToRename = "appendFile_test_file.txt"; 
  const fileRenamedPath = "appendFile_test_file_renamed.txt"; 
  try {
    await rename(fileToRename, fileRenamedPath); 
    console.log(`Renamed ${fileToRename} to ${fileRenamedPath}`); 
  } catch (error) { 
    console.error(`Got an error trying to rename the file: ${error.message}`); 
  } 
}

// run this async function 
renameToFile();

// deleteFile function with filename, content and callback function
import {unlink}  from 'fs/promises'; 

async function delete_unlinkToFile() {
  const fileRenamedPath = "appendFile_test_file_renamed.txt"; 
  try {
    await unlink(fileRenamedPath); 
    console.log(`Deleted ${fileRenamedPath}`); 
  } catch (error) { 
    console.error(`Got an error trying to delete the file: ${error.message}`); 
  } 
}

// run this async function 
delete_unlinkToFile();

// createWriteStream for write a readable stream to file
const file = fs.createWriteStream('createWriteStream_test_file.txt');
file.write('This is a test file for NodeJS with FS module and createWriteStream');

// createReadStream for reading a readable stream from file
async function createReadStreamToFile() {
  //empty data stream variable will be fill with the contents from the file
  var data = '';
  try {
    var readerStream = fs.createReadStream('writeFile_test_file.txt');
    readerStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

    // Handle stream events --> data, end, and error
    readerStream.on('data', function(chunk) {
      data += chunk;
    });

    readerStream.on('end',function() {
      console.log(data);
    });

    readerStream.on('error', function(err) {
      console.log(err.stack);
    });
  } catch (error) {
    console.error('Error appending content to file:', error);
  }
}

createReadStreamToFile();