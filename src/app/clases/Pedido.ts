import {DetalleEquipo} from "./DetalleEquipo";

export interface Pedido {

  //MODELO
  modelo?:any;
  agregarShort?: boolean;
  agregarMedias?:boolean;

  //COLORES
  coloresModelo?: any;

  //CAMISETA
  llevaEscudoDelantero?: boolean;
  escudoDelantero?: any;
  posicionEscudoDelantero?: string;
  llevaNumeroDelantero?: boolean;
  posicionNumeroDelantero?: boolean;
  llevaNombreEspalda?: boolean;
  llevaNumeroEspalda?: boolean;
  colorEstampado?: string;

  //SHORT
  agregarEscudoShort?: boolean;
  agregarNumeroShort?:boolean;
  tipoLetra?:string;
  sponsorDelantero?: boolean;
  posicionSponsorDelantero?: string;
  sponsorTrasero?: boolean;
  posicionSponsorTrasero?: string;
  sponsorManga?: boolean;
  posicionSponsorManga?: string;

  //NUMERO
  llevaNombreCamiseta?: boolean;
  llevaNumeroCamiseta?: boolean;
  llevaNumeroFrontalCamiseta?: boolean;
  posicionNumeroCamiseta?:string;
  llevaNumeroShort?: boolean;
  posicionNumeroShort?: string;

  //EQUIPO
  detalleEquipo ?: DetalleEquipo[];
  nombreEquipo? : string;
  nombreContacto? : string;
  telefonoContacto? : string;
  emailContacto? : string;
  cantidadEquipo? : number;

  //CHECKOUT
  precioCamiseta?: string;
  precioShort?: string;
  precioMedias?: string;
  precioConjunto?: string;
  email?: string;
  observaciones?: string;

  precioTotal?: string;
  imagenEscudo?: string;
  imagenSvg?: string;
  imagenes?: string [];
}
