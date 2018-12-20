import React from 'react'

export default props => {
    if(props.hide){
        return null
    } else {
        return (
            <i className={'fa fa-'+ props.icon}></i>    
        )
    }
}