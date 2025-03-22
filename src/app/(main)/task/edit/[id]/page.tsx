//動的ルーティング
//localhost:3000/task/edit/[id]のid部分を表示している
const TaskEditIdPage = ({ params }: { params: { id: string } }) => {
  return <div>TaskEditIdPage{params.id}</div>;
};

export default TaskEditIdPage;
