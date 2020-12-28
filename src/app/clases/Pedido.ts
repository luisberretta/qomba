import {DetalleEquipo} from "./DetalleEquipo";

export interface Pedido {
  mail: string,
  descripcion: string;
  tieneNombre: boolean;
  tieneShort: boolean;
  tieneNroFrontalCamiseta: boolean;
  posicionNroFrontalCamiseta: string;
  tieneNroShort: boolean;
  detalleEquipo : DetalleEquipo[];
}
