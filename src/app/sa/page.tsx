"use client";
import { useFormState, useFormStatus } from "react-dom";
import { createTask } from "@/actions/sampleActions";

const SeverActionsPAge = () => {
  const taskId = 1;
  //以下を指定することでtaskIdをサーバーアクションズに渡すことができる
  const createTaskWithTaskId = createTask.bind(null, taskId);
  const initialState = { error: "" };
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-300"
        disabled={pending}
      >
        送信
      </button>
    );
  };
  return (
    <div>
      <form action={formAction}>
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default SeverActionsPAge;
