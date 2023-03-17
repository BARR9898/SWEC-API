export interface Expediente{
    paciente:{
        nombre:string,
        edad:number,
        sexo:'M'|'F',
        apellido_paterno:string,
        apellido_materno:string
    },
    expediente:{
        motivo_de_consulta:string,
        circunstancias_de_aparicion:string,
        sintomas:string[],
        descripcion_fisica:string,
        demanda_de_tratamiento:string,
        area_escolar:string,
        area_laboral:string,
        acontecimientos_significativos:string,
        desarrollo_psicosexual:string,
        familiograma:string,
        area_de_relacion_y_familiar:string,
        mapeo_familiar:string,
        impresion_diagnostica_de_familia:string,
        hipotesis_familiar: string,
        examen_mental:string,
        indicaciones_diagnosticas:string,
        impresiones_diagnosticas:string[]
    }
    /*
    paciente:{
        nombre:string,
        edad:string,
        sexo:'M'|'F',
        apellido_paterno:string,
        apellido_materno:string
    },
    expediente:{
        motivo_de_consulta:string,
        sircunstancias_de_aparicion:string,
        sintomas:string[],
        descripcion_fisica:string,
        demanda_de_tratamiento:string,
        area_escolar:string,
        area_laboral:string,
        acontecimientos_significativos:string,
        desarrollo_psicosexual:string,
        familiograma:string,
        area_de_relacion_y_familiar:string,
        mapeo_familiar:string,
        impresion_diagnostica_de_familia:string,
        hipotesis_familiar: string,
        examen_mental:string,
        indicaciones_diagnosticas:srting,
        impresiones_diagnosticas:string[]
    }


     */
}



