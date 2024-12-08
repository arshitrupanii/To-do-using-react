import { useState } from "react"

const container = () => {
    const [checked, setchecked] = useState(false)

    const check_handler = () => {
        setchecked(!checked)
    }

    return (
        <div>
            <div className="w-[40%] h-[42vw] bg-indigo-100 rounded-xl m-auto mt-5 p-4">
                <p className="font-bold text-[30px] flex justify-center p-3 ">iTask - Manage your Task at one place</p>

                <label className="font-bold text-[26px] mt-4" htmlFor="add">Add a Todo</label>

                <div className="flex items-center">
                    <input className="h-[35px] w-[75%] mt-3 rounded-3xl p-3" type="text" />
                    <button className='bg-violet-800 mt-3 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Save</button>
                </div>

                <div className="flex mb-5 gap-2 mt-5">
                    <input type="checkbox" name="show_finished" id="" />
                    <label className="" htmlFor="finished">Show finished</label>
                </div>

                <div className="border m-auto border-gray-400 opacity-35 w-[90%]"></div>

                <div className="mt-3">
                    <p className="text-[25px] font-bold">Your todos</p>

                    {/* this all the tasks */}
                    <div className="flex gap-4 mt-2 justify-between">
                        <div className="flex gap-4 mt-2 justify-center">
                            <input type="checkbox" onChange={check_handler} name="task_finished_not" id="" />
                            <p className={checked ? "line-through text-gray-500" : ""}>Sabji lena hain</p>
                        </div>

                        <div>
                            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><img className="w-[20px]" src="https://img.icons8.com/?size=100&id=6697&format=png&color=FFFFFF" alt="" /></button>
                            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><img className="w-[20px]" src="https://img.icons8.com/?size=100&id=67884&format=png&color=FFFFFF" alt="" /></button>

                        </div>
                    </div>

                    <div className="flex gap-4 mt-2 justify-between">
                        <div className="flex gap-4 mt-2 justify-center">
                            <input type="checkbox" checked={checked} onChange={check_handler} name="task_finished_not" id="" />
                            <p className={checked ? "line-through text-gray-500" : ""}>Sabji lena hain</p>
                        </div>

                        <div>
                            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><img className="w-[20px]" src="https://img.icons8.com/?size=100&id=6697&format=png&color=FFFFFF" alt="" /></button>
                            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><img className="w-[20px]" src="https://img.icons8.com/?size=100&id=67884&format=png&color=FFFFFF" alt="" /></button>

                        </div>
                    </div>



                </div>
            </div>
        </div >
    )
}

export default container
