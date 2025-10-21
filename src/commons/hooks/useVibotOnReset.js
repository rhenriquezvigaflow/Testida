import { useMemo } from "react";
import { getEPO } from "../scada/scada";

export default function useVibotOnReset(datosScada) {
  const estadoRoD0 = getEPO(datosScada.d0);
  const estadoRoD1 = getEPO(datosScada.d1);

  // estado RO para Clariant
  const estadoRoD2 = getEPO(datosScada.d2);

  // estado RO para Iloca
  const estadoRo = getEPO(datosScada.estadoRO);

  // estado RO para MBR
  const estadoMbr = getEPO(datosScada.d17);

  const isParadaBrusca = estadoRoD1 === "Parada brusca";
  const allValuesAreZero = Object.keys(datosScada).length > 22;

  // si el estado RO es Parada brusca y todos los valores del scada están en 0
  // significa que el vibot se esta reiniciando
  const isVibotReset = useMemo(() => {
    if (isParadaBrusca && allValuesAreZero) {
      return Object.values(datosScada)
        .slice(2, 23)
        .every((value) => value === "0");
    }

    return false;
  }, [datosScada]);

  return {
    estadoRo,
    estadoRoD0,
    estadoMbr,
    estadoRoD1,
    estadoRoD2,
    isVibotReset
  };
}
