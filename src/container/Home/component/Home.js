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
         setTheUser,
         users
      } = this.props
      return (
        <div className="container">
           This is Home
           <br />
           <button onClick={() => addTheUser({
              name: 'test',
              id: 100
           })} >
              Add user
           </button>
           <br />
           <button onClick={() => setTheUser({
              name: 'test change',
              id: 100
           })} >
              Set User
           </button>

           <ul>
              {
                 users.map((e, i) => (
                    <li key={i}>
                       {e.name}
                    </li>
                 ))
              }
           </ul>
        </div>
      )
   }
}
