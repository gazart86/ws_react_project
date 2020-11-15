import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


function DialogItem(props) {
  let path = '/dialogs/' + props.id;

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  )
}


function Message(props) {
  return (
    <div className={s.message}>{props.message}</div>
  )
}


function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name={'Artem'} id={'1'}/>
        <DialogItem name={'Artur'} id={'2'}/>
        <DialogItem name={'Johny'} id={'3'}/>
        <DialogItem name={'David'} id={'4'}/>
        <DialogItem name={'Narek'} id={'5'}/>
        <DialogItem name={'Karen'} id={'6'}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hi, there bro'}/>
        <Message message={'whats up, Emmy'}/>
        <Message message={'Hey, whats up ?'}/>
      </div>
    </div>
  )
}

export default Dialogs;