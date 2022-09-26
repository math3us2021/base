import { Router, Request, Response} from 'express';
import { doctorPost, doctorGet, doctorUpdate,doctorFindByName, doctorFindById} from './controller/doctorController';
import { doctorDelete } from './use-case/doctor';
import { consultaPost, consultaGet, consultaDelete, consultaUpdate, consultaFindByName, consultaFindById} from './controller/consultaController';
import { examPost, examGet, examDelete, examUpdate, examFindByName, examFindById} from './controller/examController';


const route = Router()

route.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Hello World'})
})


/////Doctor
route.post('/doctor', doctorPost)
route.get('/doctor', doctorGet)
route.delete('/doctor/:id', doctorDelete)
route.put('/doctor/:id', doctorUpdate)
route.get('/doctor/name/:name', doctorFindByName)
route.get('/doctor/:id', doctorFindById)

///// Consulta
route.post('/consulta', consultaPost)
route.get('/consulta', consultaGet)
route.delete('/consulta/:id', consultaDelete)
route.put('/consulta/:id', consultaUpdate)
route.get('/consulta/name/:name', consultaFindByName)
route.get('/consulta/:id', consultaFindById)

/////Exam
route.post('/exam', examPost) 
route.get('/exam', examGet)
route.delete('/exam/:id', examDelete)
route.put('/exam/:id', examUpdate)
route.get('/exam/name/:name', examFindByName)
route.get('/exam/:id', examFindById)

export default route;