export interface Usuarios {
    id_cliente: number
    nombre_cliente: string
    tipo_cliente: string
    id: number
    totalCupones: number
    ImageCupon: string
    direccion: string
    RUC: string
    dni: string
}



// export interface ClientesDetails {
//     id_cliente: number;
//     nombre_cliente: string;
//     tipo_cliente: string;
// }

  

export interface Welcome {
    results: Result[];
    next: null | string;
    prev: string | null;
    totalPages: number;
}

export interface Result {
    id_cliente: number;
    nombre_cliente: string;
    tipo_cliente: string;
}

