import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Button } from "shards-react";
import { PropertyContext } from "../../contexts/PropertyContext";

export const Home = () => {
    const {steps} = useContext(PropertyContext);
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push(steps[0].path);
    }

    return (
        <Button onClick={handleClick}>Vender</Button>
    );

};