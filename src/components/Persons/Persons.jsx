import React, {Component, Fragment} from 'react'

import Person from '../Person/Person'

class Persons extends Component {
        render () {
    return this.props.persons.map((person, index)=> {
    return (
     <Fragment>
      
    <Person 
    click={()=> this.props.clicked(index)}
    name={person.name}
    age={person.age}
    key={person.id}
    changed={(event)=>this.props.changed(event, person.id)}
    isAuth={this.props.auth}
    />
    </Fragment>)
    })
        }}

export default Persons