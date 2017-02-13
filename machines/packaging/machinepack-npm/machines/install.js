"use strict";

const exec = require('child_process').exec;

module.exports = {

  friendlyName: 'npm install',

  description: 'Install an npm package',

  extendedDescription: '',

  inputs: {

    package: {

      example: 'os-name',

      description: 'The name of the package that should be installed',

      required: true
    },
    dest:{
      example: './',

      description: 'The path to the installation destination',

      required: true
    }

  },

  defaultExit: 'success',

  exits: {

    error: {
      description: 'An unexpected error occurred.'
    },

    success: {
      example: {
        numLettersInName: 4,
        secretCode: "e9ec627220bc9e8ca66f916b7fba92f3"
      }
    }
  },

  fn: function (inputs, exits) {

    /**
     * Module Dependencies
     */
    exec('npm install --prefix '+ inputs.dest+' '+ inputs.package,
      function (error, stdout, stderr) {
        if (error) {
          return exits.error(error);
        }
        else if (stderr) {
          return exits.error(stderr);
        }
        else {
          return exits.success(null, stdout);
        }
      });
  }

};
