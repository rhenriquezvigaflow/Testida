import React, { Fragment, useMemo, useState } from "react";
import { Checkbox } from "../../../../commons/components/Checkbox/checkbox";
import { Input } from "../../../../commons/components/Input/Input";
import { Label } from "../../../../commons/components/Label/Label";
import { useGetPlantasByEmpresa } from "../../../../commons/hooks/useGetPlantasByEmpresa";
import "./empresa-planta-selector.css";
import { useFormContext } from "react-hook-form";
import { SearchIcon } from "../../../../commons/components/Icons";
import { SkeletonPlantaSelector } from "./skeleton-planta-selector";

export function EmpresaPlantaSelector() {
  const { empresas, loading, error } = useGetPlantasByEmpresa();
  const {
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useFormContext();

  const [search, setSearch] = useState("");

  // Verificar plantas seleccionadas
  const selectedPlantas = watch("plantas") || [];

  const filteredEmpresas = useMemo(() => {
    if (!search) return empresas;

    const loweredSearch = search.toLowerCase();

    return (empresas || []).filter(
      (empresa) =>
        empresa.nombre_empresa.toLowerCase().includes(loweredSearch) ||
        empresa.plantas.some((planta) =>
          planta.nombre_planta.toLowerCase().includes(loweredSearch)
        )
    );
  }, [search, empresas]);

  const handlePlantaChange = (empresaId, plantaId, event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setValue("plantas", [
        ...selectedPlantas,
        { id_empresa: empresaId, id_planta: plantaId }
      ]);
    } else {
      setValue(
        "plantas",
        selectedPlantas.filter(
          (p) => !(p.id_planta === plantaId && p.id_empresa === empresaId)
        )
      );
    }
  };

  return (
    <Fragment>
      <section>
        {loading && <SkeletonPlantaSelector />}
        {error && <div>error</div>}
        {!loading && !error && (
          <section>
            {/* Barra de búsqueda */}
            <section className="wrapper-search">
              <SearchIcon className="custom__search-icon" />
              <Input
                disabled={isSubmitting}
                value={search}
                type="text"
                onChange={(event) => setSearch(event.target.value)}
              />
            </section>

            {/* Listado de empresas y plantas */}
            <section className="wrapper-empresas-plantas">
              {[...filteredEmpresas]
                .sort((a, b) => a.plantas.length - b.plantas.length)
                .map((empresa) =>
                  empresa.plantas.length === 1 ? (
                    // Renderizar solo la planta si la empresa tiene una sola planta
                    <section
                      key={`planta-${empresa.plantas[0].id_planta}`}
                      className="wrapper-checkbox-label wrapper-empresa-planta">
                      <Checkbox
                        disabled={isSubmitting}
                        onChange={(event) => {
                          handlePlantaChange(
                            empresa.id_empresa,
                            empresa.plantas[0].id_planta,
                            event
                          );
                        }}
                        id={`planta-${empresa.plantas[0].id_planta}`}
                        checked={selectedPlantas.some(
                          (p) => p.id_planta === empresa.plantas[0].id_planta
                        )}
                      />
                      <Label htmlFor={`planta-${empresa.plantas[0].id_planta}`}>
                        {empresa.plantas[0].nombre_planta}
                      </Label>
                    </section>
                  ) : (
                    // Renderizar el label de la empresa y todas las plantas si hay más de una
                    <section
                      key={empresa.id_empresa}
                      className="wrapper-empresa-planta">
                      <Label className="empresa-label">
                        {empresa.nombre_empresa}
                      </Label>
                      <section>
                        {empresa.plantas.map((planta) => (
                          <section
                            key={planta.id_planta}
                            className="wrapper-checkbox-label"
                            style={{ marginInlineStart: "24px" }}>
                            <Checkbox
                              disabled={isSubmitting}
                              onChange={(event) => {
                                handlePlantaChange(
                                  empresa.id_empresa,
                                  planta.id_planta,
                                  event
                                );
                              }}
                              id={`planta-${planta.id_planta}`}
                              checked={selectedPlantas.some(
                                (p) => p.id_planta === planta.id_planta
                              )}
                            />
                            <Label htmlFor={`planta-${planta.id_planta}`}>
                              {planta.nombre_planta}
                            </Label>
                          </section>
                        ))}
                      </section>
                    </section>
                  )
                )}
            </section>
          </section>
        )}
      </section>
      {errors.plantas && <small>{errors.plantas.message}</small>}
    </Fragment>
  );
}
