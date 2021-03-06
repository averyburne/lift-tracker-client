'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./auth/events.js')

// On document ready
$(() => {
  events.addHandlers()
  $('.main-header').hide()
  $('#getLift').hide()
  $('.row').hide()
  $('#updateLift').hide()
  $('.change-password').hide()
  $('#sign-out').hide()
})
