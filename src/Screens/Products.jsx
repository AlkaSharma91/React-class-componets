import React, { Component } from 'react'
import { connect } from 'react-redux';
import { profile } from '../redux/actions/userAction';

 class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userInfo:null
           
             
        }
    }

    componentDidMount=()=>{
        console.log("component did mount of products called");
        if(!(this.props.userProfileReducer?.userInfo)){
            this.props.dispatch(profile());
            
        }
    
      }
    
    componentDidUpdate=(previousProps, previousState)=>{
        console.log("component did update of product called");
        if(previousProps!==this.props){
            if(this.props.userProfileReducer?.userInfo?.name){
                this.setState({
                    ...this.state,userInfo:this.props.userProfileReducer?.userInfo
                })
            }

        }
       
        
     }  

    
    render() {
        return (
            <div>
                {this.state.userInfo&& (
                    <div>
                        <h1>welcome {this.state.userInfo.name}</h1>
                        
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state is", state);
    return state;
  };
  export default connect(mapStateToProps)(Products)


