import {
   makeActionCreator
} from 'utils'

const INITIAL_STATE = {
   users: [],
}

const prefix = 'USER/';
const injectPrefix = name => {
   return `${prefix}${name}`
}

function handleAddUser(state, payload){
   return {
      ...state,
      users: [...state.users, payload.user]
   }
}

function handleSetUser(state, payload){
   const {
      user
   } = payload
   const {
      id,
      name
   } = user
   const userChanged = state.users.map(e => {
      if (e.id === id) {
         return { ...e, name: name }
       }
       return e
   })
   return {
      ...state,
      users: userChanged
   }
}

const ACTION = {
   ADD_USER: handleAddUser,
   SET_USER: handleSetUser,
}

export const setUser = makeActionCreator(injectPrefix('SET_USER'), 'user')
export const addUser = makeActionCreator(injectPrefix('ADD_USER'), 'user')

export default function users(state = INITIAL_STATE, action) {
   const typeWithoutPrefix = (action.type && action.type.split('/')[1])
   const handler = ACTION[typeWithoutPrefix];
   state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
   return handler ? handler(state, action) : state;
}
