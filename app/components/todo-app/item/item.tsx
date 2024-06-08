import { useAppDispatch, useAppSelector } from "@/app/hooks/hook";
import React, { useState } from "react";
import { deleteTodo, todoType, updatetodo } from "@/app/redux/slice";
import uuid4 from "uuid4";
import { onChangeEventType } from "@/app/types/componentsType";
interface Props {
  item: todoType;
}
export default function ItComp({ item }: Props) {
  const todos = useAppSelector((state) => state.todo);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState<string>("");

  const dispatch = useAppDispatch();
  const onChangeHandler = (event: onChangeEventType) => {
    setInput(event?.target.value);
  };
  return (
    <div className="flex  justify-between bg-slate-900  rounded-lg p-1 px-2 ">
      <div className="flex ">
        {isEdit ? (
          <input
            onChange={onChangeHandler}
            className="  text-pink-500 rounded-lg p-1 bg-transparent"
            type="text"
            value={input}
            placeholder="What you have planned ?..."
          />
        ) : (
          <p className="text-white mt-1 ">{item?.title}</p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            if (isEdit) {
              dispatch(
                updatetodo({
                  id: item.id,
                  title: input,
                })
              );
              setIsEdit(false);
            } else {
              setIsEdit(true);
              setInput(item.title);
            }
          }}
          className=" font-bold rounded-lg p-1 w-16 text-xl text-pink-500"
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(item.id))}
          className=" font-bold text-xl rounded-lg p-1 text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
