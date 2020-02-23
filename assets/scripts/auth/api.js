'use strict'
const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getLifts = function () {
  return $.ajax({
    url: config.apiUrl + '/lifts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addLift = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lifts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateLift = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lifts/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteLift = function (id) {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getLifts,
  addLift,
  updateLift,
  deleteLift
}
