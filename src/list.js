import React, { Component } from 'react';


class List extends Component {
    //state = {}

    render() {
        const dogs = this.props.dogs
        return (
            <div>
                <div> {this.props.children} </div>

                {dogs.map((item) => {
                    return <li>{item}</li>
                })
                }

                <button onClick={() => { this.props.funky() }} />
            </div>
        );
    }
}

export default List;