import {DetalleEquipo} from "./DetalleEquipo";

export interface Pedido {
  mail?: string;
  descripcion?: string;
  tieneNombre?: boolean;
  llevaShort?: boolean;
  tieneNroCamiseta?:boolean;
  tieneNroFrontalCamiseta?: boolean;
  posicionNroFrontalCamiseta?: string;
  cuelloCamiseta?:string;
  posicionEscudo?:string;
  calidadEscudo?:string;
  tieneNroShort?: boolean;
  posicionNroShort?: string;
  imagenes?: string[];
  detalleEquipo ?: DetalleEquipo[];
  escudo?: string;
}
