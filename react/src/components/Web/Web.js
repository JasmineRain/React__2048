import PropTypes from 'prop-types';
import React from 'react'

let startX=0;
let startY=0;
let endX=0;
let endY=0;

class Web extends React.Component{
    static propTypes = {
        onHand:PropTypes.func.isRequired
    };

    componentWillMount(){
        document.addEventListener('keydown',this.handler,false)
        document.addEventListener('touchstart',this.handleTouchStart,false)
        document.addEventListener('touchend',this.handleTouchEnd,false)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.handler,false)
        document.removeEventListener('touchstart',this.handleTouchStart,false)
        document.removeEventListener('touchend',this.handleTouchEnd,false)
    }

    handler = e => {
        //e.preventDefault();
        //console.log(this.props);
        this.props.onHand(e,this.props.board);
    };

    handleTouch = () =>{
        let X = endX-startX;
        let Y = endY-startY;
        //console.log(X);
        //console.log(Y);
        if( X>0 && Math.abs(X)>=Math.abs(Y) ){
            this.props.onHand({key:"SwipeRight"},this.props.board)
        }
        if(X<=0 && Math.abs(X)>Math.abs(Y) ){
            this.props.onHand({key:"SwipeLeft"},this.props.board)
        }
        if(Y>0 && Math.abs(Y)>=Math.abs(X)){
            this.props.onHand({key:"SwipeDown"},this.props.board)
        }
        if(Y<=0 && Math.abs(Y)>Math.abs(X)){
            this.props.onHand({key:"SwipeUp"},this.props.board)
        }
    };

    handleTouchStart = e => {
        //console.log(e);
        startX=e.changedTouches[0].pageX;
        startY=e.changedTouches[0].pageY;
    };

    handleTouchEnd = e => {
        //console.log(e);
        endX=e.changedTouches[0].pageX;
        endY=e.changedTouches[0].pageY;
        this.handleTouch();
    };


    render(){
        return(
            <div>
            </div>
        )
    }
}

export default Web;