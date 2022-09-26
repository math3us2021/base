import {ConsultaSequelize, DoctorSequelize, ExamSequelize} from '../database'
import { Request, Response } from 'express'
// import { doctorDelete } from 'src/use-case/doctor';

export async function doctorPost(request: Request , response: Response) {
        const { name , cpf, rg, email, password, especialidade, crm, estado_crm } = request.body;
        const doctor = await DoctorSequelize.create({ name, cpf, rg, email, password,especialidade, crm, estado_crm  });
        return response.json(doctor);
    }

export async function doctorGet(request: Request , response: Response) {
        const doctor = await DoctorSequelize.findAll({
            include: [ConsultaSequelize, ExamSequelize]
        });
        return response.json(doctor);
    }


// export async function doctorDelet(request: Request , response: Response) {
//     const { id } = request.params;
//     await DoctorSequelize.destroy({ where: { id } });
//     return response.status(200).send({
//         mensage: 'Médico excluido com sucesso!'
//     });
// }

export async function doctorUpdate(request: Request , response: Response) {
    const { id } = request.params;
    const { name , cpf, rg, email, password,especialidade, crm, estado_crm } = request.body;
    await DoctorSequelize.update({  name , cpf, rg, email, password,especialidade, crm, estado_crm }, { where: { id } });
    return response.json({ name , cpf, rg, especialidade, crm, estado_crm});
}

export async function doctorFindByName(request: Request , response: Response) {
    const { name } = request.params;
    const doctor = await DoctorSequelize.findAll({ where: { name } });
    return response.json(doctor);
}

// try{
//     const doctor = await DoctorSequelize.findAll({ where: { name } });
//     return response.json(doctor);
// }

export async function doctorFindById(request: Request , response: Response) {
    const { id } = request.params;
    const doctor = await DoctorSequelize.findByPk(id);
    return response.json(doctor);
}


     