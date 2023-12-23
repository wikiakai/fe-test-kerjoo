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
    clearProvince,
    setSelectedProvinces,
    clearSelectedProvince,
} from "../../redux/reducer/Province";

import {
    setKabp,
    clearKabp,
    setSelectedKabp,
    clearSelectedKabp,
} from "../../redux/reducer/Kabupaten";

import {
    setKecamatan,
    clearKecamatan,
    setSelectedKecamatan,
    clearSelectedKecamatan,
} from "../../redux/reducer/Kecamatan";

import {
    setDesa,
    clearDesa,
    setSelectedDesa,
    clearSelectedDesa,
} from "../../redux/reducer/Desa";

const TestSelect = () => {
    const dispatch = useDispatch();

    // STATES
    const dataProvinces = useSelector((state) => state.PROVINCES.data);
    const selectedProvince = useSelector((state) => state.PROVINCES.selected);

    const dataKabupaten = useSelector((state) => state.KABUPATEN.data);
    const selectedKabupaten = useSelector((state) => state.KABUPATEN.selected);

    const dataKecamatan = useSelector((state) => state.KECAMATAN.data);
    const selectedKecamatan = useSelector((state) => state.KECAMATAN.selected);

    const [loadingProv, setLoadingProv] = useState(false);

    const getDataProvinces = async () => {
        setLoadingProv(true);
        const { data } = await getProvinces();

        dispatch(setProvinces(data));
        setLoadingProv(false);
    };

    const getDataKabupaten = async () => {
        const { data } = await getKabupatens(selectedProvince);
        dispatch(setKabp(data));
    };

    const getDataKecamatan = async () => {
        const { data } = await getKecamatan(selectedKabupaten);
        dispatch(setKecamatan(data));
    };

    const getDataDesa = async () => {
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

                break;
            case "kabp":
                dispatch(setSelectedKabp(id));
                break;
            case "kect":
                dispatch(setSelectedKecamatan(id));
                break;

            default:
                dispatch(setSelectedDesa(id));
                break;
        }
    };

    return (
        <div>
            <NavbarApp />
            <Container>
                <label>Provinsi</label>
                <select
                    className="form-select mb-3"
                    onChange={(event) => handleChangeSelect(event)}
                    name="prov"
                >
                    {dataProvinces &&
                        dataProvinces.map((prov) => (
                            <option value={prov.id}>{prov.name}</option>
                        ))}
                </select>
                <label>Kabupaten</label>
                <select
                    className="form-select mb-3"
                    name="kabp"
                    onChange={(event) => handleChangeSelect(event)}
                >
                    {dataKabupaten &&
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
                    {dataKecamatan &&
                        dataKecamatan.map((kec) => (
                            <option value={kec.id}>{kec.name}</option>
                        ))}
                </select>
                <label>Desa</label>
                <select
                    className="form-select mb-3"
                    name="kect"
                    onChange={(event) => handleChangeSelect(event)}
                >
                    {dataKecamatan &&
                        dataKecamatan.map((kec) => (
                            <option value={kec.id}>{kec.name}</option>
                        ))}
                </select>
            </Container>
        </div>
    );
};

export default TestSelect;
