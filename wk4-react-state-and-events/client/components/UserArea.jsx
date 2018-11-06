import React from 'react'

function UserArea(props) {
  return (
    <form>
    <input type="submit" onClick={props.userAreaHandleClick} value="click!"/>
    </form>
)
}

export default UserArea
