'use strict'

const test = require('tape')
const deepFreeze = require('deep-freeze')

const feathersAction = require('../src/')
const cats = feathersAction('cats')

const catsRecords = {
  0: { id: 0, name: 'honey', description: 'sweet and delicious.' },
  1: { id: 1, name: 'tea' },
  2: { id: 2, name: 'mug' }
}

test('updater returns correct default state', function(t) {
  state = cats.updater({type: 'woof'})() 
  expectedState = {
    cats: {},
    feathersAction: {
      requests: {} 
    }
  }
  t.deepEqual(state, expectedState)
  t.end()
})

test('find', function (t) {
})

test('get', function (t) {
})

test('create', function (t) {
})

test('update', function (t) {
})

test('patch', function (t) {
})

test('remove', function (t) {
  const actions = cats.actions 

  let state = { cats: { [thing.id]: thing } }
  const cid = '1234'
  const startAction = actions.remove.start(cid, { id: thing.id })
  state = reducer(state, startAction)
  t.deepEqual(state.records, {})
  const successAction = actions.remove.success(cid, thing)
  state = reducer(state, successAction)
  t.deepEqual(state.records, {})
  t.end()
})
