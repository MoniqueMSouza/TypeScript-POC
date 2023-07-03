import { Request, Response } from "express";
import { movieSchema } from "../schemas/movie-schema";
import { insertUnique, findMany, deleteMovieId/*, updateMovieId*/ } from "../repositories/movies.repositories";
import { Movie, MovieEntity} from "../protocols/movie";


async function insert(req: Request, res: Response) {
    const newMovie = req.body as Movie

    const { error } = movieSchema.validate(newMovie);

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    const resultado = await insertUnique(newMovie)
    return res.send(`Movie inserted`)

}
async function listAll(req: Request, res: Response) {   
    const resultado = await findMany();

    return res.send(resultado.rows)
}
async function updateMovie(req: Request, res: Response) {    
}
async function deleteMovie(req: Request, res: Response) {   
    const id = req.body as MovieEntity

    try{
        const result = await deleteMovieId(id);
        return res.send('Excluido!' + result)
    }catch{
        return res.sendStatus(500)
    }
}

export {
    listAll,
    insert,
    updateMovie,
    deleteMovie
}