import {constantesModelos} from "./ConstanteModelo";
export const coloresParte = [
  {
    idModelo: 1,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#FFFFFF',
        colores: ['#FFFFFF'],
        posicionesTipografia: {},
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#484A99',
        colores: constantesModelos.paleta10,
        posicionesTipografia: {},
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#FFFFFF',
        colores: constantesModelos.coloresPrincipales,
        posicionesTipografia: {},
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#E8EAEF'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#484A9A'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#484A9A'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#E9EAEF'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#484A9A'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#E9EAEF'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4098, 430.1458]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1523.4911, 435.5717]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1523.4911, 435.5717]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1524.2139, 443.0332]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1530.4102, 719.4009]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4517, 737.7069]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4517, 737.7069]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1543.1255, 780.9069]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: constantesModelos.paleta10,
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.9283, 534.9319],
              izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
              centro: [1, 0, 0, 1, 575.8483, 589.6519]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 402.0226, 537.3593],
              izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
              centro: [1, 0, 0, 1, 578.5825, 620.9993]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.9523, 523.048],
              izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
              centro: [1, 0, 0, 1, 578.3077, 606.3109]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.9523, 523.048],
              izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
              centro: [1, 0, 0, 1, 578.3077, 606.3109]
            }
          }
        ]
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: constantesModelos.paleta10,
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionesTipografia: [],
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 389.9837, 450.4055],
          izquierda: [0.5456, 0, 0, 0.5456, 681.2637, 502.2455],
          centro: [0.5456, 0, 0, 0.5456, 563.0637, 499.3655]
        }
      }
    ]
  },
  {
    idModelo: 2,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#000000',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Remera estampa',
        color: '#E5CA0B',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#000000',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0A0A0A'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#282828'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#E4CA0D'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#282828'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#E4CA0D'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1521.0408, 446.9657]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1525.9038, 440.6599]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1528.0122, 404.6837]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1519.2363, 443.0332]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1535.041, 736.2208]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4517, 737.7069]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1520.9728, 706.8189]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1539.1025, 780.9069]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.5283, 545.0519],
              izquierda: [1, 0, 0, 1, 734.6883, 542.891],
              centro: [1, 0, 0, 1, 572.6883, 586.0919]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 402.0226, 537.3593],
              izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
              centro: [1, 0, 0, 1, 578.5825, 620.9993]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.9524, 559.0714],
              izquierda: [1, 0, 0, 1, 707.7036, 564.0714],
              centro: [1, 0, 0, 1, 579.3332, 610.4213]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 400.8062, 543.668],
              izquierda: [1, 0, 0, 1, 706.1825, 594.9594],
              centro: [1, 0, 0, 1, 580.7261, 614.2993]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 390.7539, 451.422],
          izquierda: [0.5456, 0, 0, 0.5456, 712.5939, 464.382],
          centro: [0.5456, 0, 0, 0.5456, 559.2339, 496.782]
        }
      },
    ],
  },
  {
    idModelo: 3,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#EE7C29',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa_uno',
        nombreMostrar: 'Remera estampa uno',
        color: '#E84C1E',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa_dos',
        nombreMostrar: 'Remera estampa dos',
        color: '#39130F',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#2A201F',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0A0A0A'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#E9511A'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#361B13'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#FFFFFF'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#412420'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4098, 430.1458]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1522.3828, 440.7255]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1523.3981, 467.3575]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1523.9518, 442.8033]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1531.3901, 715.8009]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1515.3433, 742.8608]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.3586, 769.4927]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1535.818, 780.6769]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 402.8883, 555.6719],
              izquierda: [1, 0, 0, 1, 735.5283, 554.2319],
              centro: [1, 0, 0, 1, 568.3677, 608.9518]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 383.9054, 544.2289],
              izquierda: [1, 0, 0, 1, 732.0508, 543.6835],
              centro: [1, 0, 0, 1, 567.5544, 598.0754]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 400.9633, 544.5186],
              izquierda: [1, 0, 0, 1, 713.491, 548.1772],
              centro: [1, 0, 0, 1, 583.6071, 597.2949]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 413.2346, 552.2189],
              izquierda: [1, 0, 0, 1, 735.086, 552.2191],
              centro: [1, 0, 0, 1, 583.3941, 605.0342]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5402, 0, 0, 0.5402, 382.9537, 464.5029],
          izquierda: [0.5402, 0, 0, 0.5402, 729.2139, 465.3627],
          centro: [0.5402, 0, 0, 0.5402, 554.4939, 528.3628]
        }
      },
    ],
  },
  {
    idModelo: 4,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#53B6E1',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Remera estampa',
        color: '#F9F9F9',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#AED5F1',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#A9D2F2'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#E8EAEF'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#A8D1F1'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#FFFFFF'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#A1CBEC'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4098, 430.1458]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1518.3027, 444.0856]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1513.2628, 451.0859]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1526.6388, 442.8033]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1530.4102, 719.4009]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1511.2633, 746.2208]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1521.9141, 746.2208]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1538.505, 780.6769]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 413.4681, 544.9119],
              izquierda: [1, 0, 0, 1, 733.1481, 540.5919],
              centro: [1, 0, 0, 1, 573.6281, 575.1519]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 403.3597, 542.5668],
              izquierda: [1, 0, 0, 1, 734.0341, 550.1959],
              centro: [1, 0, 0, 1, 576.1652, 584.9586]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 407.3062, 550.1547],
              izquierda: [1, 0, 0, 1, 734.0341, 550.1959],
              centro: [1, 0, 0, 1, 572.2901, 593.1933]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 415.8825, 554.0864],
              izquierda: [1, 0, 0, 1, 735.0861, 558.5504],
              centro: [1, 0, 0, 1, 579.2914, 592.487]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5402, 0, 0, 0.5402, 394.2561, 457.2935],
          izquierda: [0.5402, 0, 0, 0.5402, 714.7761, 447.3135],
          centro: [0.5402, 0, 0, 0.5402, 561.7361, 488.3535]
        }
      },
    ],
  },
  {
    idModelo: 5,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#000000',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#2275BA',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#000000',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0A0A0A'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#030303'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#FFFFFF'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#2275BB'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#2275BB'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4098, 430.1458]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1525.8628, 438.6456]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1511.6979, 443.0333]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1525.8842, 438.5771]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1530.4102, 719.4009]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1518.8232, 740.7808]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1518.8232, 740.7808]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1537.7504, 776.4507]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 412.1, 553.9713],
              izquierda: [1, 0, 0, 1, 704.5998, 552],
              centro: [1, 0, 0, 1, 583.0999, 593.5001]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 393.1542, 536.7932],
              izquierda: [1, 0, 0, 1, 744.5142, 545.4332],
              centro: [1, 0, 0, 1, 574.5942, 571.3532]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 407.3999, 545.4331],
              izquierda: [1, 0, 0, 1, 730.3798, 545.4333],
              centro: [1, 0, 0, 1, 572.4399, 608.3988]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.9524, 549.7021],
              izquierda: [1, 0, 0, 1, 756.809, 549.7024],
              centro: [1, 0, 0, 1, 577.1969, 594.9788]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionMatrix: {
          derecha: [0.5349, 0, 0, 0.5349, 389.4749, 466.3067],
          izquierda: [0.5349, 0, 0, 0.5349, 705.9749, 468.183],
          centro: [0.5349, 0, 0, 0.5349, 553.5249, 499.4115]
        }
      }
    ]
  },
  {
    idModelo: 6,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E5CA0B',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#000000',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#FFFFFF',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0A0A0A'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#020203'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#E5CA0D'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#010202'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#E5CA0D'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4098, 430.1458]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1523.5026, 434.2055]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1509.7548, 439.0403]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1526.6388, 450.7646]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1530.4102, 719.4009]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4631, 736.3407]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.8801, 736.7877]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1538.505, 788.6383]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 400.6424, 526.5392],
              izquierda: [1, 0, 0, 1, 730.6883, 526.8918],
              centro: [1, 0, 0, 1, 579.3328, 562.0125]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 396.4629, 526.1116],
              izquierda: [1, 0, 0, 1, 744.9429, 526.1116],
              centro: [1, 0, 0, 1, 580.7829, 557.7916]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 413.2347, 541.4404],
              izquierda: [1, 0, 0, 1, 730.3801, 541.4402],
              centro: [1, 0, 0, 1, 578.3074, 600.657]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 393.3276, 542.7787],
              izquierda: [1, 0, 0, 1, 744.4818, 549.7025],
              centro: [1, 0, 0, 1, 584.8476, 593.8187]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 389.9837, 450.4055],
          izquierda: [0.5456, 0, 0, 0.5456, 730.5656, 440.891],
          centro: [0.5456, 0, 0, 0.5456, 562.7837, 478.4709]
        }
      }
    ]
  },
  {
    idModelo: 7,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E2E5E5',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#345594',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#24519B'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#24519B'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#FFFFFF'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#24519B'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#FFFFFF'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1455.4897, 386.97]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1447.5074, 402.1662]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1437.0789, 396.5731]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1455.4897, 386.97]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1467.8, 684.9999]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1440.468, 704.3014]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1444.2042, 694.3206]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1473.4023, 724.8436]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 361.8751, 488.2667],
              izquierda: [1, 0, 0, 1, 656.6251, 488.2667],
              centro: [1, 0, 0, 1, 510.1251, 488.2667]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 323.1589, 495.9539],
              izquierda: [1, 0, 0, 1, 666.1589, 508.9539],
              centro: [1, 0, 0, 1, 498.1589, 530.9539]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 317.7809, 504.9729],
              izquierda: [1, 0, 0, 1, 651.7809, 498.9729],
              centro: [1, 0, 0, 1, 506.7809, 543.9729]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 346.4592, 494.8961],
              izquierda: [1, 0, 0, 1, 669.4592, 501.8961],
              centro: [1, 0, 0, 1, 514.4592, 546.8961]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5402, 0, 0, 0.5402, 338.815, 399.1395],
          izquierda: [0.5402, 0, 0, 0.5402, 635.815, 396.23],
          centro: [0.5402, 0, 0, 0.5402, 487.315, 397.5798]
        }
      }
    ],
  },
  {
    idModelo: 8,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E52A3A',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#6B5D5D',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#BF181C',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#E62A3A'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#E62A3A'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#FFFFFF'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#C0181C'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#FFFFFF'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.4098, 430.1458]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1522.5299, 438.9488]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1512.7296, 450.1786]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1534.6395, 442.8035]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1530.4102, 719.4009]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1515.4905, 741.084]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1519.855, 747.926]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1546.5057, 780.6772]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 408.9283, 534.9319],
              izquierda: [1, 0, 0, 1, 737.3083, 549.8518],
              centro: [1, 0, 0, 1, 574.4484, 586.4117]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 402.0613, 543.5765],
              izquierda: [1, 0, 0, 1, 741.1813, 545.7365],
              centro: [1, 0, 0, 1, 579.4961, 595.7837]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 401.0977, 553.0424],
              izquierda: [1, 0, 0, 1, 722.753, 547.339],
              centro: [1, 0, 0, 1, 578.3077, 610.4211]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 413.2346, 543.2734],
              izquierda: [1, 0, 0, 1, 743.231, 543.2732],
              centro: [1, 0, 0, 1, 593.3549, 599.5085]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5402, 0, 0, 0.5402, 380.0514, 455.9552],
          izquierda: [0.5402, 0, 0, 0.5402, 720.2637, 455.9552],
          centro: [0.5402, 0, 0, 0.5402, 559.5714, 501.1152]
        }
      }
    ],
  },
  {
    idModelo: 9,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E2E5E5',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Remera bandas verticales',
        color: '#070A35',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_mangas_y_recorte',
        nombreMostrar: 'Mangas y recorte',
        color: '#',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#E2E5E5',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#E2E5E5'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#070A35'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#E2E5E5'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#06092D'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#06092D'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#06092D'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1515.7311, 428.7717]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1520.3999, 451.7348]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1509.7548, 441.2662]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1514.2841, 455.4656]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1529.7317, 709.0269]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1513.3605, 753.87]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1516.8801, 739.0137]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1526.1503, 793.3393]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: constantesModelos.paleta10,
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 410.2343, 546.8767],
              izquierda: [1, 0, 0, 1, 741.3826, 546.8767],
              centro: [1, 0, 0, 1, 574.5278, 579.6454]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 410.2346, 546.881],
              izquierda: [1, 0, 0, 1, 739.0513, 558.5225],
              centro: [1, 0, 0, 1, 575.834, 584.8817]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 582.4653, 608.8199],
              izquierda: [1, 0, 0, 1, 734.1703, 543.666],
              centro: [1, 0, 0, 1, 582.4653, 608.8199]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 413.2345, 546.2186],
              izquierda: [1, 0, 0, 1, 751.558, 548.8766],
              centro: [1, 0, 0, 1, 582.4653, 587.7681]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: constantesModelos.paleta10,
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 369.4657, 1530.0834]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 397.034, 452.724],
          izquierda: [0.5456, 0, 0, 0.5456, 729.8394, 460.097],
          centro: [0.5456, 0, 0, 0.5456, 557.9551, 490.3045]
        }
      }
    ],
  },
  {
    idModelo: 10,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#589EC9',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Remera estampa',
        color: '#000000',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#ffffff',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0A0A0A'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#030A13'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#589EC9'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#ffffff'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#589EC9'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1520.6997, 416.6756]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1520.3997, 441.0836]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1522.3671, 437.5402]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1527.1704, 439.0773]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1536.7002, 705.9308]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1513.3601, 743.2188]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1529.4924, 735.2875]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1539.0366, 776.951]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 406.9312, 531.6693],
              izquierda: [1, 0, 0, 1, 735.2512, 536.2233],
              centro: [1, 0, 0, 1, 578.3076, 561.91]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 425.6797, 549.7028],
              izquierda: [1, 0, 0, 1, 739.051, 547.8712],
              centro: [1, 0, 0, 1, 579.333, 589.3204]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 400.8061, 543.0588],
              izquierda: [1, 0, 0, 1, 744.4818, 539.9399],
              centro: [1, 0, 0, 1, 579.207, 580.3003]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 419.6794, 538.7389],
              izquierda: [1, 0, 0, 1, 749.2509, 549.7026],
              centro: [1, 0, 0, 1, 579.3332, 600.6571]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 369.4657, 1530.0834]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 390.7539, 451.422],
          izquierda: [0.5456, 0, 0, 0.5456, 712.5939, 464.382],
          centro: [0.5456, 0, 0, 0.5456, 559.2339, 496.782]
        }
      },
    ],
  },
  {
    idModelo: 11,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#AA1111',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Corte izquierdo',
        color: '#000000',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#ffffff',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0E0E0D'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#0E0E0D'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#ffffff'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#AA1111'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#AA1111'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1428.9427, 382.2039]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1430.5143, 387.6379]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1425.3478, 397.6642]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1438.2219, 396.061]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1442.9432, 662.459]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1423.4749, 689.773]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1432.4731, 695.4116]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1450.0881, 733.9347]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 316.5541, 531.0715],
              izquierda: [1, 0, 0, 1, 645.5541, 533.0715],
              centro: [1, 0, 0, 1, 493.5541, 527.0715]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 329.1656, 494.4255],
              izquierda: [1, 0, 0, 1, 649.1656, 494.4255],
              centro: [1, 0, 0, 1, 491.1656, 553.4255]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 316.0499, 490.064],
              izquierda: [1, 0, 0, 1, 640.0499, 485.064],
              centro: [1, 0, 0, 1, 490.0499, 546.064]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 329.1681, 489.9871],
              izquierda: [1, 0, 0, 1, 650.1681, 489.9871],
              centro: [1, 0, 0, 1, 495.1681, 537.9871]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 369.4657, 1530.0834]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 300.189, 447.811],
          izquierda: [0.5456, 0, 0, 0.5456, 622.189, 449.811],
          centro: [0.5456, 0, 0, 0.5456, 475.189, 440.811]
        }
      }
    ],
  },
  {
    idModelo: 12,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E2E5E5',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_línea_derecha',
        nombreMostrar: 'Línea derecha',
        color: '#F6E61E',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_línea_central',
        nombreMostrar: 'Línea central',
        color: '#18792B',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_línea_izquierda',
        nombreMostrar: 'Línea izquierda',
        color: '#342A90',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#ffffff'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#342A90'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#342A90'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#FFFF01'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#18792B'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#E2E5E5'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1492.9712, 480.5316]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1504.0891, 465.2584]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1497.1107, 476.0482]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1508.6414, 477.5852]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1506.9717, 760.7869]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1497.0497, 767.3936]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1504.2361, 773.7957]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1520.5076, 815.4589]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 391.913, 563.8477],
              izquierda: [1, 0, 0, 1, 707.2729, 563.8474],
              centro: [1, 0, 0, 1, 562.2729, 609.0729]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 385.4961, 562.0564],
              izquierda: [1, 0, 0, 1, 717.7405, 572.0461],
              centro: [1, 0, 0, 1, 562.997, 599.9184]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 378.0175, 566.6191],
              izquierda: [1, 0, 0, 1, 708.863, 566.6191],
              centro: [1, 0, 0, 1, 556.5775, 627.3271]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 0.5456, 385.4948, 579.619],
              izquierda: [1, 0, 0, 1, 716.881, 582.619],
              centro: [1, 0, 0, 1, 573.4148, 631.3693]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 369.4657, 1530.0834]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 369.1502, 476.202],
          izquierda: [0.5456, 0, 0, 0.5456, 691.4632, 474.8475],
          centro: [0.5456, 0, 0, 0.5456, 544.9675, 522.0126]
        }
      }
    ],
  },
  {
    idModelo: 13,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#EDEBE0',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#D11717',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#EDEBE0',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#AF1917'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#EDEBE0'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#ECEADF'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#AD0000'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#ECEADF'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#AD0000'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1515.476, 438.0517]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1519.2865, 438.0517]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1506.6014, 438.0517]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1518.5751, 438.0517]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1531.5868, 718.3069]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1517.7762, 718.3069]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1512.4613, 718.3069]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1536.4877, 766.3069]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 418.2344, 572.0648],
              izquierda: [1, 0, 0, 1, 713.1976, 572.0649],
              centro: [1,0, 0, 1, 571.9944, 609.8205]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 400.8062, 564.9101],
              izquierda: [1, 0, 0, 1, 721.7932, 559.5505],
              centro: [1, 0, 0, 1, 573.712, 586.5127]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 414.6796, 557.0648],
              izquierda: [1, 0, 0, 1, 712.188, 561.91],
              centro: [1, 0, 0, 1, 569.0396, 600.2648]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 419.6795, 580.3378],
              izquierda: [1, 0, 0, 1, 727.9791, 561.9103],
              centro: [1, 0, 0, 1, 581.5779, 599.30419]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 390.1781, 483.4277],
          izquierda: [0.5456, 0, 0, 0.5456, 693.691, 487.4277],
          centro: [0.5456, 0, 0, 0.5456, 558.7219, 520.4573]
        }
      }
    ],
  },
  {
    idModelo: 14,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#080A3B',
        colores: ['#FFFFFF'],
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_mangas',
        nombreMostrar: 'Remera mangas',
        color: '#080A3B',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#F1D500',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#040835'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#EDD519'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#040835'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#EDD519'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#040835'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#EDD519'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [0, 0, 1, 1422.0186, 374.2728]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1430.8291, 374.2728]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1423.0737, 374.2728]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1430.958, 374.2728]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1438.1294, 654.5281]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1429.3188, 677.5281]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1437.0742, 666.5281]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1457.1899, 690.103]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 311.6852, 501.1405],
              izquierda: [1, 0, 0, 1, 645.6852, 498.1405],
              centro: [1, 0, 0, 1, 479.6852, 529.1405]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 311.6852, 498.1405],
              izquierda: [1, 0, 0, 1, 645.6852, 501.1405],
              centro: [1, 0, 0, 1, 487.6852, 537.1405]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 303.6852, 500.1405],
              izquierda: [1, 0, 0, 1, 645.6852, 500.1405],
              centro: [1, 0, 0, 1, 480.6852, 535.1405]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 320.6852, 498.1405],
              izquierda: [1, 0, 0, 1, 659.6852, 498.1405],
              centro: [1, 0, 0, 1, 495.6852, 534.1405]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 287, 411],
          izquierda: [0.5456, 0, 0, 0.5456, 634, 410],
          centro: [0.5456, 0, 0, 0.5456, 466, 444]
        }
      }
    ],
  },
  {
    idModelo: 15,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#384F65',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Remera estampa',
        color: '#434554',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello',
        color: '#17213B',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_puño_superior',
        nombreMostrar: 'Puño superior',
        color: '#ACDAD6',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_puño_medio',
        nombreMostrar: 'Puño medio',
        color: '#FFFFFF',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_puño_inferior',
        nombreMostrar: 'Puño inferior',
        color: '#ACDAD6',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#101E39'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#101E39'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#FFFFFF'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#ACDFDA'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#FFFFFF'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1521.0116, 426.3317]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1519.4266, 435.6609]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1512.8612, 426.3317]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1524.8071, 443.0337]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1535.0122, 706.587]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1517.9164, 715.9161]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1521.1626, 713.587]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1542.72, 769.1028]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 401.7696, 547.7864],
              izquierda: [1, 0, 0, 1, 735.0861, 546.4191],
              centro: [1, 0, 0, 1, 571.9216, 583.1099]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 395.5772, 542.5629],
              izquierda: [1, 0, 0, 1, 730.3798, 543.579],
              centro: [1, 0, 0, 1, 575.6804, 577.8309]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 393.3279, 543.579],
              izquierda: [1, 0, 0, 1, 735.0861, 543.579],
              centro: [1, 0, 0, 1, 578.3074, 583.163]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 413.2345, 549.7027],
              izquierda: [1, 0, 0, 1, 749.2509, 552.0416],
              centro: [1, 0, 0, 1, 578.97, 597.519]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 380.0514, 456.9552],
          izquierda: [0.5456, 0, 0, 0.5456, 717.4143, 458.9552],
          centro: [0.5456, 0, 0, 0.5456, 559.8771, 498.5006]
        }
      }
    ]
  },
  {
    idModelo: 16,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E3E7E7',
        colores: ['#E3E7E7'],
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_linea_superior',
        nombreMostrar: 'Línea superior',
        color: '#959797',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_linea_media',
        nombreMostrar: 'Línea central',
        color: '#A7A9A9',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_linea_inferior',
        nombreMostrar: 'Línea inferior',
        color: '#E1E5E5',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#A7A9A9',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#0E0E0D'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#FFFFFF'}),
      //short
      Object.assign(constantesModelos.shortPrincipal, {color: '#0E0E0D'}),
      Object.assign(constantesModelos.shortLineaSuperior, {color: '#78797A'}),
      Object.assign(constantesModelos.shortLineaInferior, {color: '#232222'}),
      Object.assign(constantesModelos.shortLineaLateral, {color: '#E2E5E5'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1466.0337, 386.9927]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1471.7891, 386.9927]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1462.104, 386.9927]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1471.0774, 386.9927]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1480.0342, 667.2479]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1470.2788, 699.2479]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1467.9639, 673.2479]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1488.9905, 711.2479]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 367.6451, 488.8604],
              izquierda: [1, 0, 0, 1, 666.6451, 497.8604],
              centro: [1, 0, 0, 1, 530.6451, 527.8604]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 367.6451, 487.8604],
              izquierda: [1, 0, 0, 1, 666.6451, 496.8604],
              centro: [1, 0, 0, 1, 528.6451, 537.8604]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 367.6451, 494.8604],
              izquierda: [1, 0, 0, 1, 663.6451, 507.8604],
              centro: [1, 0, 0, 1, 524.6451, 555.8604]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 380.6451, 500.8604],
              izquierda: [1, 0, 0, 1, 676.6451, 507.8604],
              centro: [1, 0, 0, 1, 534.6451, 549.8604]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 373.1173, 1533.6372]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 378.1443, 1540.4573]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        posicionMatrix: {
          derecha: [0.5456, 0, 0, 0.5456, 348.8786, 409.4995],
          izquierda: [0.5456, 0, 0, 0.5456, 654, 403],
          centro: [0.5456, 0, 0, 0.5456, 517, 444]
        }
      }
    ],
  },
  // {
  //   idModelo: 17,
  //   partes: [
  //     {
  //       idParte: "Remera_principal",
  //       nombreMostrar: "Remera principal",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_mangas_y_recorte",
  //       nombreMostrar: "Mangas y recorte",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_cuello_y_puños",
  //       nombreMostrar: "Cuello y puños",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Medias_principal",
  //       nombreMostrar: "Medias principal",
  //       color: "#0A0A0A",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {},
  //     },
  //     {
  //       idParte: "Medias_linea",
  //       nombreMostrar: "Medias líneas",
  //       color: "#FFFFFF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_principal",
  //       nombreMostrar: "Short principal",
  //       color: "#E8EAEF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_superior",
  //       nombreMostrar: "Short línea superior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_inferior",
  //       nombreMostrar: "Short línea inferior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Nombre",
  //       nombreMostrar: "Nombre",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4098, 430.1458]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1523.4911, 435.5717]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_espalda",
  //       nombreMostrar: "Número espalda",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4517, 737.7069]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_delantero",
  //       nombreMostrar: "Número delantero",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 402.0226, 537.3593],
  //             izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
  //             centro: [1, 0, 0, 1, 578.5825, 620.9993]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             derecha: [0.9086, 0, 0, 1, 332.2709, 595.6812],
  //             izquierda: [0.9086, 0, 0, 1, 617.4053, 595.6812],
  //             centro: [0.9086, 0, 0, 1, 483.4053, 623.6368]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Short_número",
  //       nombreMostrar: "Short número",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 373.1173, 1533.6372]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Remera_escudo",
  //       nombreMostrar: "Escudo remera",
  //       color: "#",
  //       colores: ["#0E147C", "#0F3302", "#B2082E", "#F0F606"],
  //       posicionMatrix: {
  //         derecha: [0.1122, 0, 0, 0.1029, 341.2709, 527.8898],
  //         izquierda: [0.1122, 0, 0, 0.1029, 613.2725, 527.8898],
  //         centro: [0.1122, 0, 0, 0.1029, 487.6725, 527.8898]
  //       }
  //     }
  //   ],
  // },
  // {
  //   idModelo: 18,
  //   partes: [
  //     {
  //       idParte: "Remera_principal",
  //       nombreMostrar: "Remera principal",
  //       color: "#",
  //       colores: ["#FFFFFF"],
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_estampa",
  //       nombreMostrar: "Estampa",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_cuello_y_puños",
  //       nombreMostrar: "Cuello y puños",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Medias_principal",
  //       nombreMostrar: "Medias principal",
  //       color: "#0A0A0A",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {},
  //     },
  //     {
  //       idParte: "Medias_linea",
  //       nombreMostrar: "Medias línea",
  //       color: "#FFFFFF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_principal",
  //       nombreMostrar: "Short principal",
  //       color: "#E8EAEF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_superior",
  //       nombreMostrar: "Short línea superior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_inferior",
  //       nombreMostrar: "Short línea inferior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_lateral",
  //       nombreMostrar: "Short línea lateral",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Nombre",
  //       nombreMostrar: "Nombre",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4098, 430.1458]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1523.4911, 435.5717]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_espalda",
  //       nombreMostrar: "Número espalda",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4517, 737.7069]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_delantero",
  //       nombreMostrar: "Número delantero",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 402.0226, 537.3593],
  //             izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
  //             centro: [1, 0, 0, 1, 578.5825, 620.9993]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Short_número",
  //       nombreMostrar: "Short número",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 373.1173, 1533.6372]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Remera_escudo",
  //       nombreMostrar: "Escudo remera",
  //       color: "#",
  //       colores: ["#0E147C", "#0F3302", "#B2082E", "#F0F606"],
  //       posicionMatrix: {
  //         derecha: [0.5456, 0, 0, 0.5456, 389.9837, 450.4055],
  //         izquierda: [0.5456, 0, 0, 0.5456, 681.2637, 502.2455],
  //         centro: [0.5456, 0, 0, 0.5456, 563.0637, 499.3655]
  //       }
  //     }
  //   ],
  // },
  // {
  //   idModelo: 19,
  //   partes: [
  //     {
  //       idParte: "Remera_principal",
  //       nombreMostrar: "Remera principal",
  //       color: "#",
  //       colores: ["#FFFFFF"],
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_estampa",
  //       nombreMostrar: "Estampa",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_cuello",
  //       nombreMostrar: "Cuello",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_puño_izquierdo",
  //       nombreMostrar: "Puño izquierdo",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_puño_derecho",
  //       nombreMostrar: "Puño derecho",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Medias_principal",
  //       nombreMostrar: "Medias principal",
  //       color: "#0A0A0A",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {},
  //     },
  //     {
  //       idParte: "Medias_linea",
  //       nombreMostrar: "Medias línea",
  //       color: "#FFFFFF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_principal",
  //       nombreMostrar: "Short principal",
  //       color: "#E8EAEF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_superior",
  //       nombreMostrar: "Short línea superior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_inferior",
  //       nombreMostrar: "Short línea inferior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_lateral",
  //       nombreMostrar: "Short línea lateral",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Nombre",
  //       nombreMostrar: "Nombre",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4098, 430.1458]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1523.4911, 435.5717]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_espalda",
  //       nombreMostrar: "Número espalda",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4517, 737.7069]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_delantero",
  //       nombreMostrar: "Número delantero",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 402.0226, 537.3593],
  //             izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
  //             centro: [1, 0, 0, 1, 578.5825, 620.9993]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Short_número",
  //       nombreMostrar: "Short número",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 373.1173, 1533.6372]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Remera_escudo",
  //       nombreMostrar: "Escudo remera",
  //       color: "#",
  //       colores: ["#0E147C", "#0F3302", "#B2082E", "#F0F606"],
  //       posicionMatrix: {
  //         derecha: [0.5456, 0, 0, 0.5456, 389.9837, 450.4055],
  //         izquierda: [0.5456, 0, 0, 0.5456, 681.2637, 502.2455],
  //         centro: [0.5456, 0, 0, 0.5456, 563.0637, 499.3655]
  //       }
  //     }
  //   ],
  // },
  // {
  //   idModelo: 20,
  //   partes: [
  //     {
  //       idParte: "Remera_principal",
  //       nombreMostrar: "Remera principal",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_estampa",
  //       nombreMostrar: "Estampa",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_cuello_y_puños",
  //       nombreMostrar: "Cuello y puños",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Medias_principal",
  //       nombreMostrar: "Medias principal",
  //       color: "#0A0A0A",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {},
  //     },
  //     {
  //       idParte: "Medias_linea",
  //       nombreMostrar: "Medias línea",
  //       color: "#FFFFFF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_principal",
  //       nombreMostrar: "Short principal",
  //       color: "#E8EAEF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_superior",
  //       nombreMostrar: "Short línea superior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_inferior",
  //       nombreMostrar: "Short línea inferior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_lateral",
  //       nombreMostrar: "Short línea lateral",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Nombre",
  //       nombreMostrar: "Nombre",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4098, 430.1458]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1523.4911, 435.5717]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_espalda",
  //       nombreMostrar: "Número espalda",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4517, 737.7069]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_delantero",
  //       nombreMostrar: "Número delantero",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 402.0226, 537.3593],
  //             izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
  //             centro: [1, 0, 0, 1, 578.5825, 620.9993]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 737.3083, 549.8518],
  //             centro: [1, 0, 0, 1, 574.4484, 586.4117]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Short_número",
  //       nombreMostrar: "Short número",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 373.1173, 1533.6372]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Remera_escudo",
  //       nombreMostrar: "Escudo remera",
  //       color: "#",
  //       colores: [],
  //       posicionMatrix: {
  //         derecha: [0.5402, 0, 0, 0.5402, 380.0514, 455.9552],
  //         izquierda: [0.5402, 0, 0, 0.5402, 720.2637, 455.9552],
  //         centro: [0.5402, 0, 0, 0.5402, 559.5714, 501.1152]
  //       }
  //     }
  //   ],
  // },
  // {
  //   idModelo: 21,
  //   partes: [
  //     {
  //       idParte: "Remera_principal",
  //       nombreMostrar: "Remera principal",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_banda_vertical",
  //       nombreMostrar: "Banda vertical",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_mangas_y_recorte",
  //       nombreMostrar: "Mangas y recorte",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_cuello_y_puños",
  //       nombreMostrar: "Cuello y puños",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Medias_principal",
  //       nombreMostrar: "Medias principal",
  //       color: "#0A0A0A",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {},
  //     },
  //     {
  //       idParte: "Medias_linea",
  //       nombreMostrar: "Medias líneas",
  //       color: "#FFFFFF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_principal",
  //       nombreMostrar: "Short principal",
  //       color: "#E8EAEF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_superior",
  //       nombreMostrar: "Short línea superior",
  //       color: "#",
  //       colores: ["#ffffff", "#000000", "#0000ff", "#FF0000"],
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_inferior",
  //       nombreMostrar: "Short línea inferior",
  //       color: "#",
  //       colores: ["#ffffff", "#000000", "#0000ff", "#FF0000"],
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Nombre",
  //       nombreMostrar: "Nombre",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4098, 430.1458]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1523.4911, 435.5717]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_espalda",
  //       nombreMostrar: "Número espalda",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4517, 737.7069]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_delantero",
  //       nombreMostrar: "Número delantero",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 402.0226, 537.3593],
  //             izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
  //             centro: [1, 0, 0, 1, 578.5825, 620.9993]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             derecha: [0.9086, 0, 0, 1, 332.2709, 595.6812],
  //             izquierda: [0.9086, 0, 0, 1, 617.4053, 595.6812],
  //             centro: [0.9086, 0, 0, 1, 483.4053, 623.6368]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Short_número",
  //       nombreMostrar: "Short número",
  //       color: "#",
  //       colores: constantesModelos.paleta10,
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 373.1173, 1533.6372]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Remera_escudo",
  //       nombreMostrar: "Escudo remera",
  //       color: "#",
  //       colores: ["#0E147C", "#0F3302", "#B2082E", "#F0F606"],
  //       posicionMatrix: {
  //         derecha: [0.1122, 0, 0, 0.1029, 341.2709, 527.8898],
  //         izquierda: [0.1122, 0, 0, 0.1029, 613.2725, 527.8898],
  //         centro: [0.1122, 0, 0, 0.1029, 487.6725, 527.8898]
  //       }
  //     }
  //   ],
  // },
  // {
  //   idModelo: 22,
  //   partes: [
  //     {
  //       idParte: "Remera_principal",
  //       nombreMostrar: "Remera principal",
  //       color: "#",
  //       colores: constantesModelos.paletaFull,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_estampa",
  //       nombreMostrar: "Estampa",
  //       color: "#",
  //       colores: constantesModelos.paletaFull,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_estampa_inferior",
  //       nombreMostrar: "Estampa inferior",
  //       color: "#",
  //       colores: constantesModelos.paletaFull,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_cuello_y_puños",
  //       nombreMostrar: "Cuello y puños",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Remera_mangas_y_hombros",
  //       nombreMostrar: "Mangas y hombros",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Medias_principal",
  //       nombreMostrar: "Medias principal",
  //       color: "#0A0A0A",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {},
  //     },
  //     {
  //       idParte: "Medias_linea",
  //       nombreMostrar: "Medias línea",
  //       color: "#FFFFFF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_principal",
  //       nombreMostrar: "Short principal",
  //       color: "#E8EAEF",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_superior",
  //       nombreMostrar: "Short línea superior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_inferior",
  //       nombreMostrar: "Short línea inferior",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Short_linea_lateral",
  //       nombreMostrar: "Short línea lateral",
  //       color: "#",
  //       colores: constantesModelos.coloresPrincipales,
  //       posicionMatrix: {}
  //     },
  //     {
  //       idParte: "Nombre",
  //       nombreMostrar: "Nombre",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4098, 430.1458]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1523.4911, 435.5717]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_espalda",
  //       nombreMostrar: "Número espalda",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1516.4517, 737.7069]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 1530.4102, 719.4009]
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       idParte: "Número_delantero",
  //       nombreMostrar: "Número delantero",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 402.0226, 537.3593],
  //             izquierda: [1, 0, 0, 1, 703.1825, 594.9594],
  //             centro: [1, 0, 0, 1, 578.5825, 620.9993]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 408.9283, 534.9319],
  //             izquierda: [1, 0, 0, 1, 702.6883, 583.8918],
  //             centro: [1, 0, 0, 1, 575.8483, 589.6519]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             derecha: [1, 0, 0, 1, 412.1, 553.9713],
  //             izquierda: [1, 0, 0, 1, 704.5998, 552],
  //             centro: [1, 0, 0, 1, 583.0999, 593.5001]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Short_número",
  //       nombreMostrar: "Short número",
  //       color: "#",
  //       colores: [],
  //       posicionesTipografia: [
  //         {
  //           tipografia: 'SablonUp-College',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Accidental Presidency',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 373.1173, 1533.6372]
  //           }
  //         },
  //         {
  //           tipografia: 'Fools Errand',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         },
  //         {
  //           tipografia: 'Agron',
  //           posicionMatrix: {
  //             unica: [1, 0, 0, 1, 378.1443, 1540.4573]
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       idParte: "Remera_escudo",
  //       nombreMostrar: "Escudo remera",
  //       color: "#",
  //       colores: ["#0E147C", "#0F3302", "#B2082E", "#F0F606"],
  //       posicionMatrix: {
  //         derecha: [0.5349, 0, 0, 0.5349, 389.4749, 466.3067],
  //         izquierda: [0.5349, 0, 0, 0.5349, 705.9749, 468.183],
  //         centro: [0.5349, 0, 0, 0.5349, 553.5249, 499.4115]
  //       }
  //     }
  //   ],
  // },
  {
    idModelo: 23,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#EDEDED',
        colores: constantesModelos.paletaFull,
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#0A0A35',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#AB1C1C',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#E2DFDE'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#0A0A35'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#0A0A35'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#E2DFDE'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#AA1A1A'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#E2DFDE'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1410.7174, 531.4254]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1411.0403, 543.1755]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1415.5, 544.6118]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1410.5, 533.6118]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1418.9176, 801.5856]

            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1410.3943, 841.4957]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1417.8208, 842.9317]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1430.8208, 854.9317]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 378.8859, 608.0255],
              izquierda: [1.0493, 0, 0, 1, 702.8859, 607.0255],
              centro: [1.0493, 0, 0, 1, 536.8847, 660.1455]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 377.8859, 606.0255],
              izquierda: [1.0493, 0, 0, 1, 702.8859, 615.0255],
              centro: [1.0493, 0, 0, 1, 547.8859, 649.0255]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 372.8859, 614.0255],
              izquierda: [1.0493, 0, 0, 1, 702.8859, 615.0255],
              centro: [1.0493, 0, 0, 1, 543.8859, 653.0255]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 394.8859, 614.0255],
              izquierda: [1.0493, 0, 0, 1, 706.8859, 616.0255],
              centro: [1.0493, 0, 0, 1, 554.8859, 659.0255]
            }
          }
        ],

      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 340.7006, 1428.7593]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.4564, 0, 0, 0.435, 366.4772, 534.0656],
          izquierda: [0.4564, 0, 0, 0.435, 694.4772, 538.0656],
          centro: [0.4564, 0, 0, 0.435, 530.6371, 584.9056]
        }
      }
    ],
  },
  {
    idModelo: 24,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#F34135',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#4052BE',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#374FAB',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#F3F2F4'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#374FAB'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#4052BE'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#F54233'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#3E52B5'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#F34135'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1409.7174, 530.4254]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1409.7174, 545.4254]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1422.4872, 533.6999]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1405.7174, 552.4254]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1419.9176, 799.5856]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1409.9176, 825.5856]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1414.1864, 803.86]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1426.9176, 872.5856]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 387.3899, 614.8974],
              izquierda: [1.0493, 0, 0, 1, 686.8859, 612.0255],
              centro: [1.0493, 0, 0, 1, 540.2897, 655.1666]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 384.1463, 615.9652],
              izquierda: [1.0493, 0, 0, 1, 704.8859, 619.0255],
              centro: [1.0493, 0, 0, 1, 548.7999, 662.2461]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 372.9052, 626.3],
              izquierda: [1.0493, 0, 0, 1, 700.9052, 617.3],
              centro: [1.0493, 0, 0, 1, 544.9052, 671.3]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 386.036, 617.6264],
              izquierda: [1.0493, 0, 0, 1, 705.036, 614.6264],
              centro: [1.0493, 0, 0, 1, 553.036, 658.6264]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 340.7006, 1428.7593]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionMatrix: {
          derecha: [0.4564, 0, 0, 0.435, 379.4772, 541.0656],
          izquierda: [0.4564, 0, 0, 0.435, 676.8717, 541.2022],
          centro: [0.4564, 0, 0, 0.435, 534.3644, 583.6443]
        }
      }
    ],
  },
  {
    idModelo: 25,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#2193CF',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa_uno',
        nombreMostrar: 'Estampa uno',
        color: '#F54233',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa_dos',
        nombreMostrar: 'Estampa dos',
        color: '#FFFFFF',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#EFEFEF',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#000000'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#F54233'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#000000'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#2193CF'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#F54233'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#2193CF'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1410.7174, 531.4254]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1410.7174, 522.4254]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1421.8073, 528.3399]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1406.7174, 525.4254]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1418.9176, 801.5856]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1408.9176, 805.5856]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1413.5065, 798.5001]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1427.9176, 840.5856]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 383.8859, 584.0255],
              izquierda: [1.0493, 0, 0, 1, 703.8859, 584.0255],
              centro: [1.0493, 0, 0, 1, 546.0275, 634.6072]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 383.2819, 597.0057],
              izquierda: [1.0493, 0, 0, 1, 703.8859, 603.0255],
              centro: [1.0493, 0, 0, 1, 548.2572, 630.8642]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 383.2252, 599.94],
              izquierda: [1.0493, 0, 0, 1, 698.2252, 602.94],
              centro: [1.0493, 0, 0, 1, 546.2252, 651.94]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 375.356, 598.2664],
              izquierda: [1.0493, 0, 0, 1, 707.356, 610.2664],
              centro: [1.0493, 0, 0, 1, 563.356, 644.2664]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 340.7006, 1428.7593]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionMatrix: {
          derecha: [0.485, 0, 0, 0.4622, 372.4772, 512.0656],
          izquierda: [0.485, 0, 0, 0.4622, 705.4772, 510.0656],
          centro: [0.485, 0, 0, 0.4622, 537.4772, 558.0656]
        }
      }
    ],
  },
  {
    idModelo: 26,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#EDEDED',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#0B0828',
        colores: constantesModelos.paleta10,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#AFC2D7',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#E2DFDE'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#0B0828'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#0B0828'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#E2DFDE'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#AA1A1A'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#E2DFDE'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1410.7174, 531.4254]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1411.7174, 525.4254]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1422.4872, 536.6999]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1409.7174, 525.4254]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1418.9176, 801.5856]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1408.9176, 791.5856]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1414.1864, 806.86]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1428.9176, 828.5856]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 380.8859, 594.0255],
              izquierda: [1.0493, 0, 0, 1, 700.8859, 600.0255],
              centro: [1.0493, 0, 0, 1, 545.8859, 642.0255]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 375.8859, 611.0255],
              izquierda: [1.0493, 0, 0, 1, 703.8859, 617.0255],
              centro: [1.0493, 0, 0, 1, 548.8859, 640.0255]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 385.9052, 614.3],
              izquierda: [1.0493, 0, 0, 1, 700.9052, 620.3],
              centro: [1.0493, 0, 0, 1, 544.9052, 654.3]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 386.0363, 610.6264],
              izquierda: [1.0493, 0, 0, 1, 723.0363, 617.6264],
              centro: [1.0493, 0, 0, 1, 558.0363, 654.6264]
            }
          }
        ],

      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 340.7006, 1428.7593]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.52, 0, 0, 0.46, 364.4772, 520.0656],
          izquierda: [0.52, 0, 0, 0.46, 689.4772, 520.0656],
          centro: [0.52, 0, 0, 0.46, 533.4772, 565.0656]
        }
      }
    ],
  },
  {
    idModelo: 27,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#AFC2D7',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa_uno',
        nombreMostrar: 'Remera estampa uno',
        color: '#7EB3DB',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa_dos',
        nombreMostrar: 'Remera estampa dos',
        color: '#D7C5EB',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#000000',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#F9F7F7'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#61ACC6'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#F9F7F7'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#61ACC6'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#C9BADD'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#61ACC6'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1412.7174, 530.4254]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1412.3624, 531.0524]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1422.2872, 536.6599]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1414.9996, 530.4255]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1420.1576, 795.5848]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1404.3229, 841.1876]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1413.9865, 806.8201]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1428.158, 850.5848]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 386.8859, 607.0255],
              izquierda: [1.0493, 0, 0, 1, 705.8859, 607.0255],
              centro: [1.0493, 0, 0, 1, 554.8859, 643.0255]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 386.0138, 613.84],
              izquierda: [1, 0, 0, 1, 704.0138, 613.84],
              centro: [1, 0, 0, 1, 550.0138, 651.84]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 372.7052, 620.26],
              izquierda: [1.0493, 0, 0, 1, 700.7052, 620.26],
              centro: [1.0493, 0, 0, 1, 544.7051, 659.26]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 386.356, 613.9464],
              izquierda: [1.0493, 0, 0, 1, 717.356, 613.9464],
              centro: [1.0493, 0, 0, 1, 565.356, 653.9464]
            }
          }
        ],

      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 340.7006, 1428.7593]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: [],
        posicionMatrix: {
          derecha: [0.1122, 0, 0, 0.1029, 341.2709, 527.8898],
          izquierda: [0.1122, 0, 0, 0.1029, 613.2725, 527.8898],
          centro: [0.1122, 0, 0, 0.1029, 487.6725, 527.8898]
        }
      },
    ],
  },
  {
    idModelo: 28,
    partes: [
      {
        idParte: 'Remera_principal',
        nombreMostrar: 'Remera principal',
        color: '#E7EAEF',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_estampa',
        nombreMostrar: 'Estampa',
        color: '#9B27B0',
        colores: constantesModelos.paletaFull,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_mangas_y_hombros',
        nombreMostrar: 'Mangas y hombros',
        color: '#9B27B0',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      {
        idParte: 'Remera_cuello_y_puños',
        nombreMostrar: 'Cuello y puños',
        color: '#000000',
        colores: constantesModelos.coloresPrincipales,
        posicionMatrix: {}
      },
      //medias
      Object.assign({}, constantesModelos.mediasPrincipal, {color: '#242423'}),
      Object.assign({}, constantesModelos.mediasLinea, {color: '#E7EAEF'}),
      //short
      Object.assign({}, constantesModelos.shortPrincipal, {color: '#E7EAEF'}),
      Object.assign({}, constantesModelos.shortLineaSuperior, {color: '#242423'}),
      Object.assign({}, constantesModelos.shortLineaInferior, {color: '#9B27B0'}),
      Object.assign({}, constantesModelos.shortLineaLateral, {color: '#9C26B0'}),
      {
        idParte: 'Nombre',
        nombreMostrar: 'Nombre',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1408.7174, 530.4254]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1407.8024, 534.4526]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1422.4872, 536.6999]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1407.8024, 534.4526]
            }
          }
        ]
      },
      {
        idParte: 'Número_espalda',
        nombreMostrar: 'Número espalda',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1416.9176, 794.5856]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1399.7628, 844.5878]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1414.1864, 806.86]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1, 0, 0, 1, 1426.7628, 846.5878]
            }
          }
        ]
      },
      {
        idParte: 'Número_delantero',
        nombreMostrar: 'Número delantero',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 394.8859, 613.0255],
              izquierda: [1.0493, 0, 0, 1, 697.8859, 613.0255],
              centro: [1.0493, 0, 0, 1, 544.8859, 645.0255]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              derecha: [1, 0, 0, 1, 384.4537, 614.2402],
              izquierda: [1, 0, 0, 1, 699.4537, 617.2402],
              centro: [1, 0, 0, 1, 551.4537, 643.2402]
            }

          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 375.9052, 614.3],
              izquierda: [1.0493, 0, 0, 1, 700.9052, 620.3],
              centro: [1.0493, 0, 0, 1, 548.9052, 654.3]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              derecha: [1.0493, 0, 0, 1, 407.0363, 614.6264],
              izquierda: [1.0493, 0, 0, 1, 724.0363, 614.6264],
              centro: [1.0493, 0, 0, 1, 554.0363, 653.6264]
            }
          }
        ],
      },
      {
        idParte: 'Short_número',
        nombreMostrar: 'Short número',
        color: '#',
        colores: [],
        posicionesTipografia: [
          {
            tipografia: 'SablonUp-College',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Accidental Presidency',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Fools Errand',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 342.5504, 1427.1583]
            }
          },
          {
            tipografia: 'Agron',
            posicionMatrix: {
              unica: [1.0493, 0, 0, 1, 340.7006, 1428.7593]
            }
          }
        ],
      },
      {
        idParte: 'Remera_escudo',
        nombreMostrar: 'Escudo remera',
        color: '#',
        colores: ['#0E147C', '#0F3302', '#B2082E', '#F0F606'],
        posicionMatrix: {
          derecha: [0.5349, 0, 0, 0.5349, 389.4749, 466.3067],
          izquierda: [0.5349, 0, 0, 0.5349, 705.9749, 468.183],
          centro: [0.5349, 0, 0, 0.5349, 553.5249, 499.4115]
        }
      }
    ],
  },
];
