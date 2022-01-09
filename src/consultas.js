/* Total de venta e IVA que se han producido en 2021 y 2020 */
db.ventas.aggregate(
    [
        {$match: { $expr: { $lte: [{ $year: "$fecha_venta" }, 2021] } } 
        },
        {$group:
            {_id:{$year: "$fecha_venta"},
            venta_total:{$sum:{ $multiply:["$precio_de_venta", "$unidades"] } } }
        },
        {$project:{
                año: "$_id",
                _id: 0,
                totalventa: "$venta_total",
                IVA:{$multiply:["$venta_total", 0.21] },
                totalventaIVA:{$multiply: ["$venta_total", 1.21] },
                totalRedondeado:{$round:[{$multiply:["$venta_total", 1.21] }, 0] } }
        }
]).pretty()
/* Todas las ventas realizadas antes de Abril independientemente del año */
db.ventas.aggregate([
    {$match: {$expr: {$lt: [{$month: "$fecha_venta"}, 4] } } },
    {$group:
        {_id: "$empleado_vendedor",
        ventas_empleado:{$count: {}}
        }
    },
    {$project: {
        empleado: "$_id",
        _id: 0,
        Nventas: "$ventas_empleado"
    }}
]).pretty()
/* Número de veces que se han vendido articulos con un coste menor de 1 euro en 2021 */
db.ventas.aggregate([
    {$match: {$expr: {$and: [ {$eq: [ {$year: "$fecha_venta"}, 2021] }, {$lt: ["$coste", 1] } ] } }
    },
    {$group:
        {_id: "$articulo",
        venta_articulo: {$count: {}}
        }
    },
    {$project: {
        articulo: "$_id",
        _id: 0,
        Veces_vendido: "$venta_articulo"
    }}
]).pretty()
/* Beneficio por articulo de las ventas realizadas en 2021 */
db.ventas.aggregate([
    {$match: {$expr: {$eq: [ {$year: "$fecha_venta"}, 2021] } }
    },
    {$group:
        {_id: "$articulo",
        venta_total: {$sum:{ $multiply:["$precio_de_venta", "$unidades"] } },
        coste_total: {$sum:{ $multiply:["$coste", "$unidades"] } }
        }
    },
    {$project: {
        articulo: "$_id",
        _id: 0,
        total_venta: "$venta_total",
        total_coste: "$coste_total",
        beneficio: {$subtract:["$venta_total", "$coste_total"] }
    }}
]).pretty()
/* Número total de veces que cada cliente ha realizado una compra */
db.ventas.aggregate([
    {$group:
        {_id: "$cliente",
        total_compras:{$count: {}}
    }},
    {$project: {
        cliente: "$_id",
        _id: 0,
        compras_totales: "$total_compras"
    }}
]).pretty()