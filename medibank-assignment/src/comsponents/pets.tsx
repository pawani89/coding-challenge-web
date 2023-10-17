import React from "react";
import { GenderData } from "../types";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Pets = (props: GenderData) => {
    const { title, pets } = props;
    return (
        <List>
            <p>{title}</p>
            {pets.map((p, ind) => {
                return (
                    <ListItem key={ind}>
                        <ListItemText>{p}</ListItemText>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default Pets;