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
         setTheUser
      } = this.props
      return (
        <div className="container">
           This is Home
           <button onClick={() => setTheUser('tot')} >
              wow
           </button>
        </div>
      )
   }
}
