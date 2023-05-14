import { useState } from "react";

export const useIsDataUpdate = () => {
  const [isDateUpdate, setIsDateUpdate] = useState(true);

  const setExportIsDateUpdate = (props) => {
    setIsDateUpdate(props);
  };

  const buildUseIsDateUpdatea = () => {
    return {
      isDateUpdate,
      setExportIsDateUpdate,
    };
  };

  return buildUseIsDateUpdatea();
};
