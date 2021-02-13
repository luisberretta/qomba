import {DetalleEquipo} from "./DetalleEquipo";

export interface Pedido {

  //CAMISETA
  modelo?:any;
  agregarShort?: boolean;
  agregarMedias?:boolean;

  //COLORES
  coloresModelo?: any;

  cuelloCamiseta?:string;
  escudo?: string;
  posicionEscudo?:string;
  calidadEscudo?:string;

  //SHORT

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
  email?: string;
  observaciones?: string;

  imagenes?: string[];

}
