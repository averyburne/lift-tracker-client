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

const onGetOneLift = function () {
  event.preventDefault()
  const num = $('#single-lift-value').val()
  api.getLift(num)
    .then(ui.onGetLiftSuccess)
    .catch(ui.onGetLiftFailure)
}

const onAddLift = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addLift(data)
    .then(ui.onAddLiftSuccess)
    .then(api.getLifts)
    .catch(ui.onAddLiftFailure)
}

const onUpdateLift = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateLift(data)
    .then(ui.onUpdateLiftSuccess)
    .catch(ui.onUpdateLiftFailure)
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

const onGetAverageWeight = (event) => {
  event.preventDefault()
  api.getLifts()
    .then(ui.onGetAverageWeightSuccess)
    .catch(ui.onGetAverageWeightFailure)
}

const onGetAverageReps = (event) => {
  event.preventDefault()
  api.getLifts()
    .then(ui.onGetAverageRepsSuccess)
    .catch(ui.onGetAverageRepsFailure)
}

const addHandlers = () => {
  $('#addLift').on('submit', onAddLift)
  $('#updateLift').on('submit', onUpdateLift)
  $('#get-single-lift').on('click', onGetOneLift)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#getLiftsButton').on('click', onGetLifts)
  $('#clearLiftsButton').on('click', ui.onClearLifts)
  $('#getAverageWeight').on('click', onGetAverageWeight)
  $('#getAverageReps').on('click', onGetAverageReps)
  $('.content').on('click', '.remove-lift', onDeleteLift)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetLifts,
  onGetOneLift,
  onUpdateLift,
  onDeleteLift,
  onGetAverageWeight,
  onGetAverageReps,
  addHandlers
}
