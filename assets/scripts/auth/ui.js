'use strict'

const store = require('./../store')
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
  $('#addLift').show()
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
  $('#sign-in-message').text('Successfully changed password')
  // $('#sign-up').trigger('reset')
  $('.change-password').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onChangePasswordFailure = function (response) {
  $('#sign-in-message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#sign-in-message').text('Successfully signed out')
  $('.change-password').hide()
  $('#sign-out').hide()
  $('.main-header').hide()
  $('#addLift').hide()
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
  $('#sign-in-message').text('Failed to sign out')
}

const onGetLiftsSuccess = function (data) {
  const showLiftsHtml = showLiftsTemplate({ lifts: data.lifts })
  $('.content').html(showLiftsHtml)
}

const onGetLiftSuccess = function (lift) {
  console.log(lift)
  const showLiftHtml = showLiftTemplate(lift)
  $('.content').html(showLiftHtml)
}

const onGetLiftFailure = function (data) {
  console.log('failure')
}

const onAddLiftSuccess = function (data) {
  console.log(data)
  $('#sign-in-message').text('Successfully added lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  $('#addLift').trigger('reset')
}

const onAddLiftFailure = function (data) {
  $('#sign-in-message').text('Could not add lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  console.log(data)
}

const onUpdateLiftSuccess = function (data) {
  console.log('success')
  $('#sign-in-message').text('Successfully updated lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  $('#updateLift').trigger('reset')
}

const onUpdateLiftFailure = function (data) {
  $('#sign-in-message').text('Could not update lift')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  console.log('failure')
}
const onClearLifts = function () {
  $('.content').empty()
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
  onGetLiftSuccess,
  onGetLiftFailure,
  onAddLiftSuccess,
  onAddLiftFailure,
  onUpdateLiftSuccess,
  onUpdateLiftFailure,
  onClearLifts
}
