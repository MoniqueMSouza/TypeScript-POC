export type MovieEntity={
    id: number,
    name: string,
    aplication: string,
    genus: string,
    stats: boolean
}

export type Movie = Omit<MovieEntity, "id">