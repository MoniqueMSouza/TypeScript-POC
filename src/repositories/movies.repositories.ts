import { Movie, MovieEntity } from "../protocols/movie";
import { connection } from '../database/database';
import { QueryResult } from "pg";

async function insertUnique(movie: Movie):Promise<QueryResult<MovieEntity>> {
    return connection.query(`
    INSERT INTO movies (name, aplication, genus, stats)
        VALUES ($1, $2, $3, $4)
        `, [movie.name, movie.aplication, movie.genus, movie.stats])
    
    }
    function findMany(): Promise<QueryResult<MovieEntity>> {
        return connection.query(`SELECT * FROM movies`);
         
      }

    export {
       
        insertUnique,
        findMany,/*
        deleteMovieId,
        updateMovieId*/
    }
    