import { connect } from 'react-redux'
import {
   addUser,
   setUser,
   deleteAllUser
} from 'reducers/User'
import Home from './component/Home'

const mapStateToProps = state => {
   return {
      users: state.users.users
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addTheUser: user => {
         dispatch(addUser(user))
      },
      setTheUser: user => {
         dispatch(setUser(user))
      },
      deleteAllUser: () => {
         dispatch(deleteAllUser())
      }
   }
 }

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
// SOMETIMES IF WE USE REDUX, THIS FILE WILL BE USED TO CONNECTING REDUX STATE