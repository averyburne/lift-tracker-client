const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Sign in event handler
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// Change password event handler
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// Sign out event handler
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onGetLifts = function (event) {
  event.preventDefault()
  api.getLifts()
    .then(ui.onGetLiftsSuccess)
    .catch(ui.onGetLiftsFailure)
}

const onClearLifts = function (event) {
  event.preventDefault()
  ui.clearLifts()
}

const onDeleteLift = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteLift(id)
    .then(function () {
      onGetLifts(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#getLiftsButton').on('click', onGetLifts)
  $('#clearLiftsButton').on('click', onClearLifts)
  $('.content').on('click', '.remove-lift', onDeleteLift)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetLifts,
  onDeleteLift,
  addHandlers
}
