const INITIAL_STATE = {
   users: []
}

function handleAddUser(state, payload){
   return {
      users: [...state.users, payload.user]
   }
}

const CONSTANT = {
   ADD_USER: 'USER/ADD_USER'
}

const ACTION = {
   'USER/ADD_USER': handleAddUser
}

function makeActionCreator(type, ...argNames) {
   return function(...args) {
     const action = { type }
     argNames.forEach((arg, index) => {
       action[argNames[index]] = args[index]
     })
     return action
   }
}

export const setUser = makeActionCreator(ACTION.SET_USER, 'user')
export const addUser = makeActionCreator(CONSTANT.ADD_USER, 'user')

export default function users(state = INITIAL_STATE, action) {
   const handler = ACTION[action.type];
   state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
   return handler ? handler(state, action) : state;
}
