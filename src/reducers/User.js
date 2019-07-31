import {
   makeActionCreator
} from 'utils'

const INITIAL_STATE = {
   users: [],
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

const CONSTANT = {
   ADD_USER: 'USER/ADD_USER',
   SET_USER: 'USER/SET_USER'
}

const ACTION = {
   'USER/ADD_USER': handleAddUser,
   'USER/SET_USER': handleSetUser
}

export const setUser = makeActionCreator(CONSTANT.SET_USER, 'user')
export const addUser = makeActionCreator(CONSTANT.ADD_USER, 'user')

export default function users(state = INITIAL_STATE, action) {
   const handler = ACTION[action.type];
   state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
   return handler ? handler(state, action) : state;
}
