import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {
   _isMounted = false;
   
   constructor(props) {
      super(props);
      this.state = {
         input: ''
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
         users,
         deleteAllUser
      } = this.props
      const {
         input
      } = this.state
      return (
        <div className="container">
           <div className="wrapper-input">
            <input type="text" onChange={e => this.setState({input: e.target.value})} value={input} />
            <button onClick={() => addTheUser({
               name: input,
               id: Math.random()
            })} >
               Add user
            </button>
            <button onClick={deleteAllUser} >
               Delete All User
            </button>
           </div>

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
