import { ResultObj } from "./Game";

type ResultProps = {
  result: ResultObj;
};

const Results = ({ result }: ResultProps) => {
  //player selection
  //cpu logic
  //tie caller
  //then we can implement
  return (
    <div className="mt-5 flex gap-3">
      <div>You {result.xplayer}</div>
      <div>Ties {result.ties}</div>
      <div>Computer {result.oplayer}</div>
    </div>
  );
};

export default Results;
