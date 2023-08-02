import React, { useEffect, useState } from "react";
import useUrlState from "@ahooksjs/use-url-state";
import useHttp from "../../hooks/use-http";
import PagesChanger from "./PagesChanger";
import { Link } from "react-router-dom";

export type PageList = {
  prev: boolean;
  next: boolean;
};

export type ItemType = {
  id: number;
};

export interface ListProps<T> {
  baseUrl: string;
  renderItem: (item: T) => React.FC;
}

const List = <T extends ItemType>(props: ListProps<T>) => {
  const [fetchedItems, setFetchedItems] = useState<T[]>([]);
  const [pages, setPages] = useState<PageList>({ prev: false, next: false });
  const [currentPage, setCurrentPage] = useUrlState({ page: 1 });

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    async function applyData(data: any) {
      const items: T[] = data.results;
      const pages: PageList = {
        prev: !!data.info.prev,
        next: !!data.info.next,
      };
      setFetchedItems(items);
      setPages(pages);
    }

    sendRequest(
      { url: props.baseUrl + "/?page=" + currentPage.page.toString() },
      applyData,
    ).then();
  }, [sendRequest, currentPage, props.baseUrl]);

  const pageButtonHandler = (move: number) => {
    if (move === -1 && pages.prev) {
      setCurrentPage({ page: +currentPage.page + move });
    } else if (move === 1 && pages.next) {
      setCurrentPage({ page: +currentPage.page + move });
    } else {
      throw new Error("Page is not defined");
    }
  };

  return (
    <>
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="my-6">
          <PagesChanger
            pages={pages}
            prevButtonHandler={pageButtonHandler.bind(null, -1)}
            nextButtonHandler={pageButtonHandler.bind(null, 1)}
          />
          <ul className="flex-col my-12">
            {fetchedItems.map((item) => {
              return (
                <li className="text-center" key={item.id}>
                  <Link to={`${item.id}`}>{renderItem(item)}</Link>
                </li>
              );
            })}
          </ul>

          <PagesChanger
            pages={pages}
            prevButtonHandler={pageButtonHandler.bind(null, -1)}
            nextButtonHandler={pageButtonHandler.bind(null, 1)}
          />
        </div>
      )}
    </>
  );
};

export default List;
