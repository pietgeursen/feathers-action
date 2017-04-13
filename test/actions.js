'use strict'

const test = require('tape')

const feathersAction = require('../src/')

const cats = feathersAction('cats')

test('action creators have correct keys', function (t) {
  const keys = ['create, update, patch, remove, start, complete, error']
  t.deepEqual(Object.keys(cats.actions), keys)
  t.end()
})

test('start', function(t) {

  t.end()
})

test('complete', function(t) {

  t.end()
})

test('error', function(t) {

  t.end()
})

test('create returns the correct action', function(t) {
  const createAction = cats.actions.create({name: 'fluffy'})
  const expectedAction = {
    type: 'FEATHERS_ACTION',
    payload: {
      serviceName: 'cats',
      method: 'create',
      args: {
        data: {
          name: 'fluffy'
        },
        query: {}
      }
    }
  } 
  t.deepEqual(createAction, expectedAction)
  t.end()
})

test('find returns the correct action', function(t) {
  const createAction = cats.actions.create({name: 'fluffy'})
  const expectedAction = {
    type: 'FEATHERS_ACTION',
    payload: {
      serviceName: 'cats',
      method: 'find',
      args: {
        data: {
          name: 'fluffy'
        },
        query: {}
      }
    }
  } 
  t.deepEqual(createAction, expectedAction)
  t.end()
})

test('patch returns the correct action', function(t) {
  const createAction = cats.actions.create({id: 1, name: 'fluffy'})
  const expectedAction = {
    type: 'FEATHERS_ACTION',
    payload: {
      serviceName: 'cats',
      method: 'patch',
      args: {
        data: {
          id: 1,
          name: 'fluffy'
        },
        query: {}
      }
    }
  } 
  t.deepEqual(createAction, expectedAction)
  t.end()
})

test('remove returns the correct action', function(t) {
  const createAction = cats.actions.create({id: 1})
  const expectedAction = {
    type: 'FEATHERS_ACTION',
    payload: {
      serviceName: 'cats',
      method: 'remove',
      args: {
        data: {
          id: 1
        },
        query: {}
      }
    }
  } 
  t.deepEqual(createAction, expectedAction)
  t.end()
})
