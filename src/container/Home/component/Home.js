import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {
   _isMounted = false;
   
   constructor(props) {
      super(props);
      this.state = {
         
      };
   }
   componentDidMount() {
      this._isMounted = true;
   }

   componentWillUnmount() {
      this._isMounted = false;
   }

   render() {
      const {
         addTheUser,
         setTheUser
      } = this.props
      return (
        <div className="container">
           This is Home
           <button onClick={() => addTheUser({
              name: 'test',
              id: 100
           })} >
              wow
           </button>
           <button onClick={() => setTheUser({
              name: 'test change',
              id: 100
           })} >
              set
           </button>
        </div>
      )
   }
}
