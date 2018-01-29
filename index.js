#! /usr/bin/env node

const path = require('path');
const exec = require('child_process').exec;
const verpatch = path.join(__dirname, 'bin', 'verpatch.exe');
exec(`${verpatch} ${`${process.argv[2]} ${process.argv[3]} /pv ${process.argv[3]} ${process.argv.splice(4).map(ar => `/s ${ar.split('=')[0]} "${ar.split('=')[1]}"`).join(' ')}`}`, (e) => {
  if (e) {
    throw new Error(e);
  }
})
.on('exit', () => console.log('all successful'));
