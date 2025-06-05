#!/bin/bash
dirname=`dirname "$0"`
cd $dirname

MODULE="$1"
OUTPUT="qtjsapi"
if [ ! -z $MODULE ]
then
    OUTPUT="${MODULE}jsapi"
fi

tmp="tmp.qrc"

find generator/js -type f \( -name "*.js" \) | sort -f | sed "s#\(.*\)#    <file alias=\"\1\">\1</file>#" >>allfiles.qrc

f="$OUTPUT"

echo "<!DOCTYPE RCC><RCC version=\"1.0\">" > ${f}_new.qrc
echo "  <qresource>" >> ${f}_new.qrc
cat allfiles.qrc >> ${f}_new.qrc

if [ -z $MODULE ]
then
    echo "    <file alias=\"fixes.js\">fixes.js</file>" >> ${f}_new.qrc
    echo "    <file alias=\"copyproperties.js\">copyproperties.js</file>" >> ${f}_new.qrc
fi

echo "  </qresource>" >> ${f}_new.qrc
echo "</RCC>" >> ${f}_new.qrc

diff ${f}.qrc ${f}_new.qrc
if [ ! $? -eq 0 ]
then
    mv ${f}_new.qrc ${f}.qrc
else
    rm ${f}_new.qrc
fi

rm -rf allfiles.qrc

#qmake
