import React, { useEffect, useState } from "react";
import NavbarApp from "../../components/Navbar";
import { Container } from "bootstrap-4-react";
import {
    getProvinces,
    getKabupatens,
    getKecamatan,
    getDesa,
} from "../../services";
import { useDispatch, useSelector } from "react-redux";
import {
    setProvinces,
    setSelectedProvinces,
} from "../../redux/reducer/Province";

import { setKabp, setSelectedKabp } from "../../redux/reducer/Kabupaten";

import {
    setKecamatan,
    setSelectedKecamatan,
} from "../../redux/reducer/Kecamatan";

import { setDesa, setSelectedDesa } from "../../redux/reducer/Desa";
import { Button } from "bootstrap-4-react/lib/components";

const TestSelect = () => {
    const dispatch = useDispatch();

    // STATES
    const dataProvinces = useSelector((state) => state.PROVINCES.data);
    const selectedProvince = useSelector((state) => state.PROVINCES.selected);

    const dataKabupaten = useSelector((state) => state.KABUPATEN.data);
    const selectedKabupaten = useSelector((state) => state.KABUPATEN.selected);

    const dataKecamatan = useSelector((state) => state.KECAMATAN.data);
    const selectedKecamatan = useSelector((state) => state.KECAMATAN.selected);

    const dataDesa = useSelector((state) => state.DESA.data);
    const selectedDesa = useSelector((state) => state.DESA.selected);

    const getDataProvinces = async () => {
        dispatch(setProvinces([]));
        dispatch(setKabp([]));
        dispatch(setKecamatan([]));
        dispatch(setDesa([]));

        const { data } = await getProvinces();

        dispatch(setProvinces(data));
    };

    const getDataKabupaten = async () => {
        dispatch(setKabp([]));
        dispatch(setKecamatan([]));
        dispatch(setDesa([]));

        const { data } = await getKabupatens(selectedProvince);
        dispatch(setKabp(data));
    };

    const getDataKecamatan = async () => {
        dispatch(setKecamatan([]));
        dispatch(setDesa([]));

        const { data } = await getKecamatan(selectedKabupaten);
        dispatch(setKecamatan(data));
    };

    const getDataDesa = async () => {
        dispatch(setDesa([]));

        const { data } = await getDesa(selectedKecamatan);
        dispatch(setDesa(data));
    };

    useEffect(() => {
        getDataProvinces();
    }, []);

    useEffect(() => {
        if (selectedProvince !== "") getDataKabupaten();
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedKabupaten !== "") getDataKecamatan();
    }, [selectedKabupaten]);

    useEffect(() => {
        if (selectedKecamatan !== "") getDataDesa();
    }, [selectedKecamatan]);

    const handleChangeSelect = (event) => {
        const id = event.target.value;
        const nameSelect = event.target.name;

        switch (nameSelect) {
            case "prov":
                dispatch(setSelectedProvinces(id));

                dispatch(setKabp([]));
                dispatch(setKecamatan([]));
                dispatch(setDesa([]));
                break;
            case "kabp":
                dispatch(setSelectedKabp(id));
                dispatch(setKecamatan([]));
                dispatch(setDesa([]));
                break;
            case "kect":
                dispatch(setSelectedKecamatan(id));
                dispatch(setDesa([]));
                break;

            default:
                dispatch(setSelectedDesa(id));
                break;
        }
    };

    console.log(dataKecamatan);
    return (
        <div>
            <NavbarApp />

            <Container>
                <label>Provinsi</label>
                <select
                    className="form-select mb-3"
                    onChange={(event) => handleChangeSelect(event)}
                    name="prov"
                    value={selectedProvince}
                >
                    {dataProvinces.length !== 0 &&
                        dataProvinces.map((prov) => (
                            <option value={prov.id}>{prov.name}</option>
                        ))}
                </select>
                <label>Kabupaten</label>
                <select
                    className="form-select mb-3"
                    name="kabp"
                    onChange={(event) => handleChangeSelect(event)}
                    value={selectedKabupaten}
                >
                    {dataKabupaten.length !== 0 &&
                        dataKabupaten.map((kab) => (
                            <option value={kab.id}>{kab.name}</option>
                        ))}
                </select>
                <label>Kecamatan</label>
                <select
                    className="form-select mb-3"
                    name="kect"
                    onChange={(event) => handleChangeSelect(event)}
                >
                    {dataKecamatan.length !== 0 &&
                        dataKecamatan.map((kec) => (
                            <option value={kec.id}>{kec.name}</option>
                        ))}
                </select>
                <label>Desa</label>
                <select
                    className="form-select mb-3"
                    name="desa"
                    onChange={(event) => handleChangeSelect(event)}
                >
                    {dataDesa.length !== 0 &&
                        dataDesa.map((desa) => (
                            <option value={desa.id}>{desa.name}</option>
                        ))}
                </select>
            </Container>
        </div>
    );
};

export default TestSelect;
