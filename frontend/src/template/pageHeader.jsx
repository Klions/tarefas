import React from 'react'

import Icone from '../template/icone'

export default props => (
    <header className='page-header'>
        <h2>{props.name} <small>{props.icon ? <Icone icon={props.icon} />:'-'} {props.small}</small></h2>
    </header>
)