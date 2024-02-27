import { DataSource } from "typeorm"
import { Necessidade } from "../models/necessidade"
import { aluno } from "../models/alunos"
import { Curso } from "../models/cursos"
import { Tutor } from "../models/tutor"

const DevDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    // port: 5433,
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "inclusimap",
    entities: [Necessidade, aluno, Curso, Tutor]
})
