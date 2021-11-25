import React from "react";
import { useHistory } from "react-router";
import { Button } from "shards-react";
import steps from "../../contexts/StepperContext/steps";

export const Home = () => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push(steps[0].path);
    }

    return (
        <Button onClick={handleClick}>Vender</Button>
    );

};