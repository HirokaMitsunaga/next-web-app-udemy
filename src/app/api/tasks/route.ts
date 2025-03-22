import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const tasks: Task[] = [
  {
    id: 1,
    name: "プログラミング",
  },
  {
    id: 2,
    name: "ランニング",
  },
];

export const GET = async () => {
  await sleep(3000);
  return NextResponse.json({ tasks }, { status: 200 });
};

//以下を実行することで、リクエストごとに処理される(動的に処理される)
export const dyanamic = "force-dynamic";
