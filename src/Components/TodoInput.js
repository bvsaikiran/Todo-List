import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem}=this.props;
        return (
            <div className="card card-body bg-light my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-dark text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add a todo Item" value={item} onChange={handleChange}/>
                    </div>
                    <button type="submit" className={
                        editItem ? 'btn btn-block text-capitalize bg-success mt-3' :'btn btn-block text-capitalize bg-info mt-3'
                    } >{editItem ? 'EditItem/Submit': 'add item'}</button>
                </form>
            </div>
        )
    }
}
export default TodoInput
