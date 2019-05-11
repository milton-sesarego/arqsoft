var wms_layers = [];

        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });var format_PartidodeMerlo_1 = new ol.format.GeoJSON();
var features_PartidodeMerlo_1 = format_PartidodeMerlo_1.readFeatures(json_PartidodeMerlo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartidodeMerlo_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PartidodeMerlo_1.addFeatures(features_PartidodeMerlo_1);var lyr_PartidodeMerlo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PartidodeMerlo_1, 
                style: style_PartidodeMerlo_1,
                title: '<img src="styles/legend/PartidodeMerlo_1.png" /> Partido de Merlo'
            });var format_PuntosPartidodeMerlo_2 = new ol.format.GeoJSON();
var features_PuntosPartidodeMerlo_2 = format_PuntosPartidodeMerlo_2.readFeatures(json_PuntosPartidodeMerlo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosPartidodeMerlo_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PuntosPartidodeMerlo_2.addFeatures(features_PuntosPartidodeMerlo_2);var lyr_PuntosPartidodeMerlo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntosPartidodeMerlo_2, 
                style: style_PuntosPartidodeMerlo_2,
                title: '<img src="styles/legend/PuntosPartidodeMerlo_2.png" /> Puntos Partido de Merlo'
            });var format_PuntosPartidodeMerlo_3 = new ol.format.GeoJSON();
var features_PuntosPartidodeMerlo_3 = format_PuntosPartidodeMerlo_3.readFeatures(json_PuntosPartidodeMerlo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosPartidodeMerlo_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PuntosPartidodeMerlo_3.addFeatures(features_PuntosPartidodeMerlo_3);var lyr_PuntosPartidodeMerlo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntosPartidodeMerlo_3, 
                style: style_PuntosPartidodeMerlo_3,
                title: '<img src="styles/legend/PuntosPartidodeMerlo_3.png" /> Puntos Partido de Merlo'
            });

lyr_StamenWatercolor_0.setVisible(true);lyr_PartidodeMerlo_1.setVisible(true);lyr_PuntosPartidodeMerlo_2.setVisible(true);lyr_PuntosPartidodeMerlo_3.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_PartidodeMerlo_1,lyr_PuntosPartidodeMerlo_2,lyr_PuntosPartidodeMerlo_3];
lyr_PartidodeMerlo_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', });
lyr_PuntosPartidodeMerlo_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_PuntosPartidodeMerlo_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_PartidodeMerlo_1.set('fieldImages', {'fid': '', 'id': '', 'name': '', });
lyr_PuntosPartidodeMerlo_2.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_PuntosPartidodeMerlo_3.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_level': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_PartidodeMerlo_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_PuntosPartidodeMerlo_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'inline label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_PuntosPartidodeMerlo_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'inline label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_level': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_PuntosPartidodeMerlo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});