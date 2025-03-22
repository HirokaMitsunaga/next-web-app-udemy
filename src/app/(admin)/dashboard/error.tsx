//エラーページの場合use clientしないといけない
"use client";

const DashBoardErrorPage = () => {
  throw new Error();
  return <div>DashBoardErrorPage</div>;
};

export default DashBoardErrorPage;
