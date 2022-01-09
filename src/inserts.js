db.ventas.drop()
db.ventas.insertMany([
    { _id: 1,
      articulo: "bata",
      coste: 3,
      precio_de_venta: 4,
      fecha_venta: ISODate("2021-06-15T08:00:00Z"),
      unidades: 1000,
      cliente: "Hospital San Juan de Dios",
      empleado_vendedor: "Cristina Garriga",
      venta_mayor: true
    },
    {_id: 2, articulo: "par_guantes", coste: 0.20, precio_de_venta: 0.50, fecha_venta: ISODate("2021-07-25T08:00:00Z"), unidades: 50, cliente: "Farmacia San Pablo", empleado_vendedor: "Carmen Valverde", venta_mayor: false},
    {_id: 3, articulo: "bata", coste: 3, precio_de_venta: 4, fecha_venta: ISODate("2021-03-08T08:00:00Z"), unidades: 500, cliente: "Hospital Virgen del Rocio", empleado_vendedor: "Mario Garcia", venta_mayor: true},
    {_id: 4, articulo: "jeringa", coste: 1, precio_de_venta: 3, fecha_venta: ISODate("2021-10-04T08:00:00Z"), unidades: 1000, cliente: "Hospital San Juan de Dios", empleado_vendedor: "Carmen Valverde", venta_mayor: true},
    {_id: 5, articulo: "mascarilla", coste: 0.30, precio_de_venta: 0.50, fecha_venta: ISODate("2020-03-05T08:00:00Z"), unidades: 1000, cliente: "Hospital Virgen del Rocio", empleado_vendedor: "Cristina Garriga", venta_mayor: true},
    {_id: 6, articulo: "par_guantes", coste: 0.20, precio_de_venta: 0.30, fecha_venta: ISODate("2020-09-18T08:00:00Z"), unidades: 500, cliente: "Hospital Virgen del Rocio", empleado_vendedor: "Mario Garcia", venta_mayor: true},
    {_id: 7, articulo: "bata", coste: 3, precio_de_venta: 5, fecha_venta: ISODate("2022-01-04T08:00:00Z"), unidades: 25, cliente: "Farmacia Neto del Rio", empleado_vendedor: "Carmen Valverde", venta_mayor: false},
    {_id: 8, articulo: "mascarilla", coste: 0.30, precio_de_venta: 0.60, fecha_venta: ISODate("2022-01-07T08:00:00Z"), unidades: 50, cliente: "Farmacia San Pablo", empleado_vendedor: "Cristina Garriga", venta_mayor: false},
    {_id: 9, articulo: "jeringa", coste: 1, precio_de_venta: 3, fecha_venta: ISODate("2021-02-12T08:00:00Z"), unidades: 700, cliente: "Hospital Virgen del Rocio", empleado_vendedor: "Carmen Valverde", venta_mayor: true},
    {_id: 10, articulo: "bata", coste: 3, precio_de_venta: 5, fecha_venta: ISODate("2021-11-02T08:00:00Z"), unidades: 40, cliente: "Farmacia San Pablo", empleado_vendedor: "Carmen Valverde", venta_mayor: false},
    {_id: 11, articulo: "mascarilla", coste: 0.30, precio_de_venta: 0.60, fecha_venta: ISODate("2021-01-28T08:00:00Z"), unidades: 60, cliente: "Farmacia Neto del Rio", empleado_vendedor: "Cristina Garriga", venta_mayor: false},
    {_id: 12, articulo: "par_guantes", coste: 0.20, precio_de_venta: 0.30, fecha_venta: ISODate("2021-07-10T08:00:00Z"), unidades: 750, cliente: "Hospital San Juan de Dios", empleado_vendedor: "Mario Garcia", venta_mayor: true},
])
