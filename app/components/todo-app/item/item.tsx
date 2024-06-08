import { useAppDispatch, useAppSelector } from "@/app/hooks/hook";
import React from "react";
import { deleteTodo } from "@/app/redux/slice";

export default function ItComp() {
  const todos=  useAppSelector(state=>state.todo)
  const dispatch =useAppDispatch()
  return (
    <div>
      <div className=" mt-2 ml-[400px]">
        <div className="flex  justify-between bg-slate-900 w-[450px] rounded-lg p-1 px-2 ">
          <div className="flex ">
            <p className="text-white mt-1 ">{item}</p>
          </div>
          <div className="flex gap-2">
            <button className=" font-bold rounded-lg p-1 w-16 text-xl text-pink-500">
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodo(item))}
              className=" font-bold text-xl rounded-lg p-1 text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
