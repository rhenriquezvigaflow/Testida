import React, { useCallback, useEffect, useState } from "react";

export function useAbortController() {
  const [abortController, setAbortController] = useState(null);

  const createAbortController = useCallback(() => {
    if (abortController) abortController.abort();

    const controller = new AbortController();

    setAbortController(controller);

    return controller;
  }, [abortController]);

  useEffect(() => {
    return () => {
      if (abortController) abortController.abort();
    };
  }, [abortController]);

  return createAbortController;
}
