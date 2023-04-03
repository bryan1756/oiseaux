var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_nom_oiseaux_MECHACH_DOSSANTOS_1 = new ol.format.GeoJSON();
var features_nom_oiseaux_MECHACH_DOSSANTOS_1 = format_nom_oiseaux_MECHACH_DOSSANTOS_1.readFeatures(json_nom_oiseaux_MECHACH_DOSSANTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_MECHACH_DOSSANTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_MECHACH_DOSSANTOS_1.addFeatures(features_nom_oiseaux_MECHACH_DOSSANTOS_1);
var lyr_nom_oiseaux_MECHACH_DOSSANTOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_MECHACH_DOSSANTOS_1, 
                style: style_nom_oiseaux_MECHACH_DOSSANTOS_1,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_MECHACH_DOSSANTOS_1.png" /> nom_oiseaux_MECHACH_DOSSANTOS'
            });
var format_trac_2 = new ol.format.GeoJSON();
var features_trac_2 = format_trac_2.readFeatures(json_trac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trac_2.addFeatures(features_trac_2);
var lyr_trac_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trac_2, 
                style: style_trac_2,
                interactive: true,
                title: '<img src="styles/legend/trac_2.png" /> tracé'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_nom_oiseaux_MECHACH_DOSSANTOS_1.setVisible(true);lyr_trac_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_nom_oiseaux_MECHACH_DOSSANTOS_1,lyr_trac_2];
lyr_nom_oiseaux_MECHACH_DOSSANTOS_1.set('fieldAliases', {'Nom_oiseau': 'Nom_oiseau', 'Nombre': 'Nombre', 'Contact': 'Contact', 'Certitude': 'Certitude', });
lyr_trac_2.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_nom_oiseaux_MECHACH_DOSSANTOS_1.set('fieldImages', {'Nom_oiseau': 'TextEdit', 'Nombre': 'TextEdit', 'Contact': 'TextEdit', 'Certitude': 'TextEdit', });
lyr_trac_2.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_nom_oiseaux_MECHACH_DOSSANTOS_1.set('fieldLabels', {'Nom_oiseau': 'inline label', 'Nombre': 'inline label', 'Contact': 'inline label', 'Certitude': 'inline label', });
lyr_trac_2.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_trac_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});