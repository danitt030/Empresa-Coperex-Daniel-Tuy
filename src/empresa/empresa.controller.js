import Empresa from "./empresa.model.js";
import ExcelJS from "exceljs";

export const agregarEmpresa = async (req, res) => {
    try {
        const data = req.body;
        const AñoActual = new Date().getFullYear();
        data.trayectoria = AñoActual - data.anoFundacion;

        const empresa = await Empresa.create(data);

        res.status(201).json({
            success: true,
            message: "Empresa creada",
            empresa
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al crear la empresa",
            error: err.message
        })
    }
}

export const listarEmpresas = async (req, res) => {
    try {
        const { limit = 5, desde = 0 } = req.query;

        const [total, empresas] = await Promise.all([
            Empresa.countDocuments(),
            Empresa.find()
                .skip(Number(desde))
                .limit(Number(limit))
        ]);

        res.status(200).json({
            success: true,
            message: "Empresas obtenidas",
            total,
            empresas
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las empresas",
            error: err.message
        })
    }
}

export const editarEmpresa = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;

        const AñoActual = new Date().getFullYear();
        data.trayectoria = AñoActual - Number(data.anoFundacion);

        const empresa = await Empresa.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            message: "Empresa actualizada",
            empresa
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la empresa",
            error: err.message
        });
    }
};


