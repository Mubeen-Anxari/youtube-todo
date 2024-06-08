import { useAppDispatch, useAppSelector } from "@/app/hooks/hook";
import { addTodo, deleteTodo, todoType } from "@/app/redux/slice";
import { onChangeEventType } from "@/app/types/componentsType";
import React, { useState } from "react";
import Item from "./item/item";
import uuid4 from "uuid4";
import { title } from "process";
interface Props {
  item: todoType;
}

export default function Todo(Props: Props) {
  const [input, setInput] = useState<string>("");
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const onChangeHandler = (event: onChangeEventType) => {
    setInput(event?.target.value);
  };
  return (
    <div className="p-4 max-w-[650px] m-auto">
      <h1 className=" font-bold text-2xl text-center">Tasks List 2024</h1>
      <div className="flex gap-2 items-center mt-4">
        <input
          onChange={onChangeHandler}
          className=" bg-slate-700 text-white rounded-lg flex-1 p-1"
          type="text"
          value={input}
          placeholder="What you have planned ?..."
        />
        <button
          disabled={input == ""}
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid4(),
                title: input,
              }),
              setInput("")
            );
          }}
          className=" font-bold text-2xl  text-pink-800"
        >
          Add Task
        </button>
      </div>
      <div className="flex flex-col gap-2  mt-4">
        {todos?.todo?.map((item) => {
          return <Item item={item} />;
        })}
      </div>
      {todos?.todo?.length === 0 && (
        <h1 className="text-center">No todo item</h1>
      )}
    </div>
  );
}
