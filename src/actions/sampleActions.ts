"use server";
//サーバーアクションズのために必要

export const createTask = async (taskId: number, formData: FormData) => {
  //DBにタスクを作成する
  console.log("タスクを作成しました");
  console.log(formData.get("name"));
  console.log(taskId);
};
