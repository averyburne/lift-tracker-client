'use strict'

const store = require('./../store')
// const events = require('./events')
const showLiftsTemplate = require('./../templates/lift-listing.handlebars')
const showLiftTemplate = require('./../templates/single-lift-listing.handlebars')

const onSignUpSuccess = function (response) {
  $('#sign-in-message').text(response.user.email + ' Successfully signed up')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onSignUpFailure = function (response) {
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#sign-in-message').text(response.user.email + ' Successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  $('.change-password').show()
  $('#sign-out').show()
  $('.main-header').show()
  $('#getLift').show()
  $('.row').show()
  $('#updateLift').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  setTimeout(function () {
    $('#sign-in-message').text('').removeClass('failure')
  }, 3000)
}

const onSignInFailure = function (response) {
  $('#sign-in-message').text('Failed to sign in')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
}

const onChangePasswordSuccess = function (response) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  $('#sign-in-message').text('Successfully changed password')
  // $('#sign-up').trigger('reset')
  $('.change-password').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onChangePasswordFailure = function (response) {
  $('#sign-in-message').removeClass('success')
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  $('#sign-in-message').text('Successfully signed out')
  $('.change-password').hide()
  $('#sign-out').hide()
  $('.main-header').hide()
  $('#getLift').hide()
  $('.row').hide()
  $('#updateLift').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  store.user = null
  $('.content').empty()
}

const onSignOutFailure = function (response) {
  $('#sign-in-message').removeClass('success')
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Failed to sign out')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('failure')
  }, 3000)
}

const onGetLiftsFailure = function (data) {
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Could not return Lifts')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 5000)
}

const onGetLiftsSuccess = function (data) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  const showLiftsHtml = showLiftsTemplate({ lifts: data.lifts })
  $('.content').html(showLiftsHtml)
  if (data.lifts.length === 0) {
    $('#sign-in-message').addClass('failure')
    $('#sign-in-message').text("You don't have any!")
  } else {
    $('#sign-in-message').text('Got them, check below')
  }
}

const onGetLiftsSuccess2 = function (data) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  const showLiftsHtml = showLiftsTemplate({ lifts: data.lifts })
  $('.content').html(showLiftsHtml)
  if (data.lifts.length === 0) {
    $('#sign-in-message').addClass('failure')
    $('#sign-in-message').text("You don't have any!")
  } else {
    $('#sign-in-message').text('Successfully added lift')
  }
}

const onGetLiftSuccess = function (lift) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  $('#sign-in-message').text('Got it, check below')
  const showLiftHtml = showLiftTemplate(lift)
  $('.content').html(showLiftHtml)
  $('#getLift').trigger('reset')
}

const onGetLiftFailure = function (data) {
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Could not get requested lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 5000)
}

const onAddLiftSuccess = function (data) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  $('#sign-in-message').text('Successfully added lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  $('#addLift').trigger('reset')
}

const onAddLiftFailure = function (data) {
  $('#sign-in-message').removeClass('success')
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Could not add lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onUpdateLiftSuccess = function (data) {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  $('#sign-in-message').text('Successfully updated lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  $('#updateLift').trigger('reset')
}

const onUpdateLiftFailure = function (data) {
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Could not update lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}
const onClearLifts = function () {
  $('#sign-in-message').removeClass('failure')
  $('#sign-in-message').addClass('success')
  $('#sign-in-message').text("They're gone!")
  $('.content').empty()
}

const onGetAverageWeightSuccess = function (data) {
  const lifts = data.lifts
  let sum = 0
  let count = 0
  for (let i = 0; i < lifts.length; i++) {
    if (lifts[i].exercise === $('#averageExercise').val()) {
      sum += lifts[i].weight
      count++
    }
  }
  const average = (sum / count).toFixed(2)
  if (isNaN(average)) {
    $('#averageWeightDisplay').text("You haven't done any")
  } else {
    $('#averageWeightDisplay').text(average + ' lbs.')
  }
}

const onGetAverageWeightFailure = function (data) {
  $('.sign-in-message').text('Could not return average weight')
}

const onGetAverageRepsSuccess = function (data) {
  const lifts = data.lifts
  let sum = 0
  let count = 0
  for (let i = 0; i < lifts.length; i++) {
    if (lifts[i].exercise === $('#averageReps').val()) {
      sum += lifts[i].reps
      count++
    }
  }
  const average = (sum / count).toFixed(2)
  if (isNaN(average)) {
    $('#averageRepsDisplay').text("You haven't done any")
  } else {
    $('#averageRepsDisplay').text(average)
  }
}

const onGetAverageRepsFailure = function (data) {
  $('.sign-in-message').text('Could not return average reps')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onGetLiftsSuccess,
  onGetLiftsSuccess2,
  onGetLiftsFailure,
  onGetLiftSuccess,
  onGetLiftFailure,
  onAddLiftSuccess,
  onAddLiftFailure,
  onUpdateLiftSuccess,
  onUpdateLiftFailure,
  onGetAverageWeightSuccess,
  onGetAverageWeightFailure,
  onGetAverageRepsSuccess,
  onGetAverageRepsFailure,
  onClearLifts
}
