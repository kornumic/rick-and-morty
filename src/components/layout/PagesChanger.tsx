import { PageList } from "../pages/Characters";

const PagesChanger: React.FC<{
  pages: PageList;
  prevButtonHandler: () => void;
  nextButtonHandler: () => void;
}> = ({ pages, prevButtonHandler, nextButtonHandler }) => {
  return (
    <div className="flex flex-row justify-between row-end-2 mx-80">
      <button
        className="flex uppercase w-32 h-12 text-xl justify-center items-center rounded-xl bg-[#181818] hover:bg-[#555555] disabled:bg-[#303030] transition-all"
        disabled={!pages.prev}
        onClick={prevButtonHandler}
      >
        Previous
      </button>
      <button
        className="flex uppercase w-32 h-12 text-xl justify-center items-center rounded-xl  bg-[#181818] hover:bg-[#555555] disabled:bg-[#303030] transition-all"
        disabled={!pages.next}
        onClick={nextButtonHandler}
      >
        Next
      </button>
    </div>
  );
};

export default PagesChanger;
