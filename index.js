#!/usr/bin/env node
"use strict";

const recipe = require(process.argv[2]),
  Bluebird = require('bluebird'),
  spawn = require('child-process-promise').spawn;

let len = recipe.length;
let i;

let cmds = [];

for (i = 0; i < len; i++) {
  let args = ['./machines/' + recipe[i].namespace + '/machinepack-' + recipe[i].machinepack + '/bin/test.js'];
  args = args.concat(recipe[i].args);
  cmds.push({cmd: 'node', args: args});
}

Bluebird.mapSeries(cmds, function (oneCmd) {
  return spawnOne(oneCmd)
    .then(function () {
      console.log("DONE!");
    })
    .catch(function (error) {
      console.error("ERROR!: ", error);
    })
}, {concurrency: 1});

function spawnOne(oneCmd) {
  let promise = spawn(oneCmd.cmd, oneCmd.args);
  let childProcess = promise.childProcess;
  console.log('[spawn] childProcess.pid: ', childProcess.pid);

  childProcess.stdout.on('data', function (data) {
    console.log('[spawn] stdout: ', data.toString());
  });
  childProcess.stderr.on('data', function (data) {
    console.log('[spawn] stderr: ', data.toString());
  });

  return promise;

}