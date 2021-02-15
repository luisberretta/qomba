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
  colorNumeroDelantero?: string;
  llevaNombreEspalda?: boolean;
  colorNombreEspalda?: string;
  llevaNumeroEspalda?: boolean;
  colorNumeroEspalda?: string;

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

  //CHECKOUT
  email?: string;
  observaciones?: string;

  imagenes?: string[];

}
