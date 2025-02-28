import { Router } from "express"
import { agregarEmpresa, editarEmpresa, generarReporte } from "./empresa.controller.js"
import { agregarEmpresaValidator, editarEmpresaValidator, generarExcelreporte } from "../middlewares/empresa-validators.js"

const router = Router()

router.post(
    "/agregarEmpresa",
    agregarEmpresaValidator,
    agregarEmpresa
)

router.put( 
    "/editarEmpresa/:uid",
    editarEmpresaValidator,
    editarEmpresa
)

router.post(
    "/generarReporte",
    generarExcelreporte ,
    generarReporte
)


export default router