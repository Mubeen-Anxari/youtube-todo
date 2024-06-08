import { useAppDispatch, useAppSelector } from "@/app/hooks/hook";
import React, { useState } from "react";
import { deleteTodo, todoType } from "@/app/redux/slice";
import uuid4 from "uuid4";
interface Props {
  item: todoType;
}
export default function ItComp({ item }: Props) {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=" mt-2 ml-[400px]">
        <div className="flex  justify-between bg-slate-900 w-[450px] rounded-lg p-1 px-2 ">
          <div className="flex ">
            <p className="text-white mt-1 ">{item?.title}</p>
          </div>
          <div className="flex gap-2">
            <button className=" font-bold rounded-lg p-1 w-16 text-xl text-pink-500"></button>
            <button
              onClick={() => dispatch(deleteTodo(item.id))}
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
