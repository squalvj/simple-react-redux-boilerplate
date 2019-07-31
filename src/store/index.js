import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from './../reducers'

export function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}

const store = configureAppStore()
export default store