import React from "react";

export default function CharacterID(props) {
    return (
        <form onSubmit={props.charcSubmit}>
            <label htmlFor="charcID">Character ID:</label>
            <input type="number" id="id" name="id"/>
            <input type="submit"/>
        </form>
    )
}