import {DoctorSequelize, ExamSequelize} from '../database'
import { Request, Response } from 'express'


export async function examPost(request: Request , response: Response) {
        const { type_exam, valor , data_exam, id_doctor  } = request.body;
        const exam = await ExamSequelize.create({ type_exam, valor , data_exam , id_doctor });
        return response.json(exam);
    }

export async function examGet(request: Request , response: Response) {
        const exam = await ExamSequelize.findAll();
        return response.json(exam);
    }

export async function examDelete(request: Request , response: Response) {
    const { id } = request.params;
    await ExamSequelize.destroy({ where: { id } });
    return response.status(200).send({
        mensage: 'Exame excluida com sucesso!'
    });
}

export async function examUpdate(request: Request , response: Response) {
    const { id } = request.params;
    const { type_exam, valor , data_exam  } = request.body;
    await ExamSequelize.update({  type_exam, valor , data_exam  }, { where: { id } });
    return response.json({ type_exam, valor , data_exam });
}

export async function examFindByName(request: Request , response: Response) {
    const { name } = request.params;
    const exam = await ExamSequelize.findAll({ where: { name } });
    return response.json(exam);
}

export async function examFindById(request: Request , response: Response) {
    const { id } = request.params;
    const exam = await ExamSequelize.findByPk(id);
    return response.json(exam);
}
 

     