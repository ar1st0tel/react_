    import React from "react";
    import classes from './Dialogs.module.css';
    import DialogItem from "./DialogItem";
    import Message from "./Message";


    const Dialogs = (props) => {
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                        <DialogItem name="Nikita" id="1"/>
                        <DialogItem name="Sasha" id="2"/>
                        <DialogItem name="Vanya" id="3"/>
                        <DialogItem name="Kirill" id="4"/>
                </div>
                <div className={classes.messages}>
                        <Message message="Go na sobes"/>
                        <Message message="Go v kachalku"/>
                        <Message message="Go v deadlock"/>
                        <Message message="Go v dotu"/>
                </div>
            </div>
    )
    }
    export default Dialogs;
