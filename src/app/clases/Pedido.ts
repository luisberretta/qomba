import {DetalleEquipo} from "./DetalleEquipo";

export interface Pedido {

  //CAMISETA
  cuelloCamiseta?:string;
  escudo?: string;
  posicionEscudo?:string;
  calidadEscudo?:string;

  //SHORT
  llevaShort?: boolean;
  llevaEscudoShort?: boolean;
  llevaNroShort?:boolean;

  //NUMERO
  llevaNombreCamiseta?: boolean;
  llevaNumeroCamiseta?: boolean;
  llevaNumeroFrontalCamiseta?: boolean;
  posicionNumeroCamiseta?:string;
  llevaNumeroShort?: boolean;
  posicionNumeroShort?: string;

  //EQUIPO
  detalleEquipo ?: DetalleEquipo[];

  //CHECKOUT
  mail?: string;
  observaciones?: string;

  imagenes?: string[];

}
