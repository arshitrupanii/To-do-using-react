import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const container = () => {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])


    const handleChange = (e) => {
        settodo(e.target.value)
    }

    const handlecheckbox = (e) => {
        settodo(e.target.value)
    }
    
    const handleAdd = () => {
        settodos([...todos, {id:uuidv4(), todo, iscompleted: false }])
        settodo("")
    }

    return (
        <div>
            <div className="w-[40%] h-[80vh] bg-indigo-100 rounded-xl m-auto mt-5 p-5">
                <p className="font-bold text-[30px] flex justify-center p-3 ">iTask - Manage your Task</p>

                <label className="font-bold text-[22px] flex justify-center" htmlFor="add">Add a Todo</label>

                <div className="flex items-center justify-center">
                    <input onChange={handleChange} value={todo} className="h-[30px] w-[75%] mt-3 rounded-3xl px-3" type="text" />
                    <button onClick={handleAdd} className='bg-violet-800 mt-3 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Add</button>
                </div>

                <div className="flex mb-5 gap-2 mt-5 justify-center items-center">
                    <input type="checkbox" name="show_finished" id="" />
                    <label className="" htmlFor="finished">Show finished</label>
                </div>

                <div className="border m-auto border-gray-400 opacity-35 w-[90%]"></div>

                <div className="mt-3">
                    <p className="text-[25px] font-bold flex justify-center">Your todos</p>

                    {/* this all the tasks */}

                    {todos.map(item => {
                         return (<div key={item.id} className="flex gap-4 mt-2 pl-2">

                            <div className="flex gap-4 mt-2 justify-start items-start">
                                <input type="checkbox" value={item.iscompleted} onChange={item.iscompleted =true} name="task_finished_not" id="" />
                                <p className={item.iscompleted ? "line-through items-start" : ""}>{item.todo}</p>
                            </div>


                            <div className="flex items-center justify-center">
                                <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><img className="w-[20px]" src="https://img.icons8.com/?size=100&id=6697&format=png&color=FFFFFF" alt="" /></button>

                                <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><img className="w-[20px]" src="https://img.icons8.com/?size=100&id=67884&format=png&color=FFFFFF" alt="" /></button>

                            </div>
                        </div>)
                    })}




                </div>
            </div>
        </div >
    )
}

export default container
