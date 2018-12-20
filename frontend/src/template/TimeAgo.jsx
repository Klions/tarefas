import React from 'react';
import TimeAgo from 'react-timeago'
import StringPTBR from 'react-timeago/lib/language-strings/pt-br'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatar = buildFormatter(StringPTBR)

export default props => (
    <TimeAgo date={props.data} formatter={formatar} />
)