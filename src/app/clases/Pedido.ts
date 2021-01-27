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
  tieneEscudoShort?: boolean;
  posicionNroShort?: string;
  imagenes?: string[];
  detalleEquipo ?: DetalleEquipo[];
  escudo?: string;

  //Pedido Numero
  agregarNumeroCamiseta?: boolean,
  agregarNombreCamiseta?: boolean,
  posicionNumeroCamiseta?: string,
  agregarNumeroShort? :boolean,
  posicionNumeroSort?: string
}
