import { DoctorSequelize} from '../../database/modelSequelize/doctor'
import { Request, Response } from 'express'

export async function doctorDelete(request: Request , response: Response) {
    const { id } = request.params;
    await DoctorSequelize.destroy({ where: { id } });
    return response.status(200).send({
        mensage: 'Médico excluido com sucesso!'
    });
}
///