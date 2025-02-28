import { Router } from "express"
import { agregarEmpresa, listarEmpresas, editarEmpresa } from "./empresa.controller.js"
import { agregarEmpresaValidator, editarEmpresaValidator } from "../middlewares/empresa-validators.js"

const router = Router()

router.post(
    "/agregarEmpresa",
    agregarEmpresaValidator,
    agregarEmpresa
)

router.get(
    "/listarEmpresas",
    listarEmpresas
)

router.put( 
    "/editarEmpresa/:uid",
    editarEmpresaValidator,
    editarEmpresa
)


export default router