import React from "react";
import Card from "../../UI/Card";
import classes from './AddUser.module.css';
import Button from "../../UI/Button";

const AddUser = props =>{

    const addUserHandler = (event) =>{
        event.preventDefault();
    }

    return (
        <Card className = {classes.input}>
        <form onSubmit={addUserHandler}>
            <div>
                <label htmlFor="username">UserName</label>
                <input id="username" type = "text" />
                <label htmlFor="age">Age (year)</label>
                <input id="age" type='number'/>
            </div>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    )
}

export default AddUser;