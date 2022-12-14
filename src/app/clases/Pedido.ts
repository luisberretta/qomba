import {DetalleEquipo} from "./DetalleEquipo";

export interface Pedido {

  //MODELO
  modelo?:any;
  indexModelo?:number;
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
  nombreEscudo?: string;
  tipoLetra?:string;
  archivoEscudo?: File;

  //SHORT
  agregarEscudoShort?: boolean;
  agregarNumeroShort?:boolean;

  sponsorDelantero?: boolean;
  posicionSponsorDelantero?: string;
  sponsorTrasero?: boolean;
  posicionSponsorTrasero?: string;
  sponsorManga?: boolean;
  posicionSponsorManga?: string;
  colorNumeroShort?: string;

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

  coloresElegidos?: any[];
}
