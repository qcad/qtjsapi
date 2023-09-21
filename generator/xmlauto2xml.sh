cp -n xml_auto/*.xml xml

cat xml_auto/RJSType.xml | sed "s/<constructor>/<!--<constructor>/" | sed "s/<\/constructor>/<\/constructor>-->/" >xml/RJSType.xml
