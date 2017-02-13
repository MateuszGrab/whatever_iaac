#!/usr/bin/env node
"use strict";

const npm = require('../');

return require('machine-as-script')({
  machine: npm.install
}).exec({
  error:function(error){
    console.error('Got error:', error)
  },
  success:function(out){
    console.log('Got result:', out);
  }
});