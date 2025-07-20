import React from 'react'
import { Todoitems } from './Todoitems'
export const Todos = (props) => {
  return (
    <div >
        <h3 className='text-center'>To-Dos List</h3>
        {props.todos.length ==0? "No-Todo to dispalay :)" : props.todos.map((todo) => {
          return ( <>
          <Todoitems  todo = {todo } key = {todo.sno} onDelete = {props.onDelete}/> <hr/>
          </>)
        })
        }
        
        
    </div>
  )
}
