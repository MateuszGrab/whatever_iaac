#!/usr/bin/env node
"use strict";

const fail = require('../');

return require('machine-as-script')({
  machine: fail.fail
}).exec({
  error:function(error){
    console.error('Got error:', error)
  },
  success:function(out){
    console.log('Got result:', out);
  }
});