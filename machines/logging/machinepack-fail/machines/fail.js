module.exports = {

  friendlyName: 'Fail',

  description: 'Will Fail and cancel process',

  extendedDescription: 'This machine fails the progress with a custom message. It can be useful for bailing out when a certain condition is met using',

  inputs: {

    msg: {

      example: 'Failed as requested from task',

      description: 'The customized message used for failing execution. If omitted, fail will simple bail out with a generic message.',

      required: false
    }

  },

  defaultExit: 'success',

  exits: {

    error: {
      description: 'An unexpected error occurred.'
    },

    success: {
      example: {
        msg: 'The system may not be provisioned according to the CMDB status.'
      }
    }
  },

  fn: function (inputs, exits) {

    /**
     * Module Dependencies
     */

      // ...

    let msg = inputs.msg;

    //console.log(msg);

    // Generate a secret code.
    // var secretCode = '' + (Math.random());
    //
    // // Get the number of characters in the provided `name`.
    // var myLength = inputs.name.length;
    //
    // // Log the provided name and the secret code.
    // console.log("Hello %s, your secret code is %s", inputs.name, secretCode);

    // Return an object containing myLength and the secretCode
    return exits.success({
      msg: msg
    });

  }

};
