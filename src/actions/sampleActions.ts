"use server";
//サーバーアクションズのために必要
interface FromState {
  error: string;
}

export const createTask = async (
  taskId: number,
  state: FromState,
  formData: FormData
) => {
  //DBにタスクを作成する
  console.log("タスクを作成しました");
  console.log(formData.get("name"));
  console.log(taskId);
  state.error = "エラーが発生しました";
  return state;
};
