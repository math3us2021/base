import {ConsultaSequelize} from '../database'
import { Request, Response } from 'express'


export async function consultaPost(request: Request , response: Response) {
        const { valor, data_consulta, id_doctor } = request.body;
        const consulta = await ConsultaSequelize.create({ valor, data_consulta, id_doctor });
        return response.json(consulta);
    }

export async function consultaGet(request: Request , response: Response) {
        const consulta = await ConsultaSequelize.findAll();
        return response.json(consulta);
    }
 
export async function consultaDelete(request: Request , response: Response) {
    const { id } = request.params;
    await ConsultaSequelize.destroy({ where: { id } });
    return response.status(200).send({
        mensage: 'Consulta excluido com sucesso!'
    });
}

export async function consultaUpdate(request: Request , response: Response) {
    const { id } = request.params;
    const { valor, data_consulta } = request.body;
    await ConsultaSequelize.update({  valor, data_consulta }, { where: { id } });
    return response.json({ valor, data_consulta});
}

export async function consultaFindByName(request: Request , response: Response) {
    const { name } = request.params;
    const consulta = await ConsultaSequelize.findAll({ where: { name } });
    return response.json(consulta);
}

export async function useCase(request: Request , response: Response) {
    
}

export async function consultaFindById(request: Request , response: Response) {
    const { id } = request.params;
    const consulta = await ConsultaSequelize.findByPk(id);
    return response.json(consulta);
}


     