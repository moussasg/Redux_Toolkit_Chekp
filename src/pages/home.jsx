import React from 'react'
import Addtask from '../components/addtask/addtask'
import Listtask from '../components/ListTask/listtask'
export default function Home() {
  return (
    <div>
      <h1>My TODO APP</h1> 
    <Addtask/>
    <Listtask/> {/*use state raw dakhel Listtask */}
    </div>
  )
}
