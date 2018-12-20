import React from 'react'

import Icone from '../template/icone'

export default props => (
    <h3>
        {props.name} <small>{props.icon ? <Icone icon={props.icon} />:'-'} {props.small}</small>
    </h3>
)