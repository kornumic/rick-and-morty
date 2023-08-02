import { PageList } from "../../pages/Characters";
import React from "react";

const PagesChanger: React.FC<{
  pages: PageList;
  prevButtonHandler: () => void;
  nextButtonHandler: () => void;
}> = ({ pages, prevButtonHandler, nextButtonHandler }) => {
  return (
    <div className="flex flex-row justify-between row-end-2 my-4">
      <div>
        {pages.prev && (
          <button className="btn-primary" onClick={prevButtonHandler}>
            Previous
          </button>
        )}
      </div>
      <div>
        {pages.next && (
          <button className="btn-primary" onClick={nextButtonHandler}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PagesChanger;
