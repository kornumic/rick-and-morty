import { useEffect, useState } from "react";
import useUrlState from "@ahooksjs/use-url-state";
import useHttp from "./use-http";
import { PageList } from "../pages/Characters";
import { RM_API } from "../constants/fe-urls";

const useEntityList = <T>(endpoint: string, ids?: number[]) => {
  const [fetchedEntities, setFetchedEntities] = useState<T[]>([]);
  const [pages, setPages] = useState<PageList>({ prev: false, next: false });
  const [currentPage, setCurrentPage] = useUrlState({ page: 1 });
  const { isLoading, error, sendRequest } = useHttp();
  const charactersUrl = RM_API + endpoint; // e.g. "https://rickandmortyapi.com/api/character"
  const idsJoined = (ids?: number[]) => {
    return ids ? "/" + ids.join(",") : "";
  };

  useEffect(() => {
    async function applyData(data: any) {
      const entities: T[] = data.results;
      const pages: PageList = {
        prev: !!data.info.prev,
        next: !!data.info.next,
      };
      setFetchedEntities(entities);
      setPages(pages);
    }

    sendRequest(
      {
        url:
          charactersUrl +
          (ids ? idsJoined(ids) : "/?page=" + currentPage.page.toString()),
      },
      applyData,
    ).then();
  }, [sendRequest, currentPage, charactersUrl, ids]);

  const pageButtonHandler = (move: number) => {
    if (move === -1 && pages.prev) {
      setCurrentPage({ page: +currentPage.page + move });
    } else if (move === 1 && pages.next) {
      setCurrentPage({ page: +currentPage.page + move });
    } else {
      throw new Error("Page is not defined");
    }
  };

  return { fetchedEntities, pages, isLoading, error, pageButtonHandler };
};

export default useEntityList;
