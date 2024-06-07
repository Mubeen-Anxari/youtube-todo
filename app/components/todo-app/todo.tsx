import { useAppDispatch, useAppSelector } from "@/app/hooks/hook";
import { addTodo } from "@/app/redux/slice";
import { onChangeEventType } from "@/app/types/componentsType";
import React, { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState<string>("");
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const onChangeHandler = (event: onChangeEventType) => {
    setInput(event?.target.value);
  };
  return (
    <div>
      <div className="flex justify-center flex-col items-center mt-10">
        <h1 className=" font-bold text-2xl mt-2">Tasks List 2024</h1>
        <div className="flex  gap-2 ">
          <input
            onChange={onChangeHandler}
            className=" bg-slate-700 text-white rounded-lg p-1 w-[500px]"
            type="text"
            value={input}
            placeholder="What you have planned ?..."
          />
          <button
            onClick={() => dispatch(addTodo(input))}
            className=" font-bold text-2xl  text-pink-800"
          >
            Add Task
          </button>
        </div>
      </div>
      {todos?.todo?.map((item) => {
        return (
          <div className="">
            <div className="flex flex-1 ">
              <div className="flex justify-between ">
                <p>{item}</p>
              </div>
              <div className="flex gap-2">
                <button className=" text-white rounded-lg p-1 bg-red-700">Delete</button>
                <button className=" text-white rounded-lg p-1 bg-red-700">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
