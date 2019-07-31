const INITIAL_STATE = {
   users: []
}

const ACTION = {
   GET_USERS: 'USER/GET_USER',
   SET_USER: 'USER/SET_USER'
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

export const setUser = makeActionCreator(ACTION.GET_USERS, 'user')

export default function users(state = INITIAL_STATE, action) {
   const handler = ACTION[action.type];
   state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
   return handler ? handler(state, action) : state;
}
