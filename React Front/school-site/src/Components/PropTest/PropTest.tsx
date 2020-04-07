import React, { Component } from 'react'

interface Props {
    matricula: string
}

class PropTest extends React.Component <Props>{
    static defaultProps: Props

    render () {
        return <h1>{this.props.matricula}</h1>
    }
}

export default PropTest