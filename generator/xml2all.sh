#!/bin/bash

#echo "xml to xml with all classes..."

maxThreads=64

mkdir -p tmp
out=tmp/xmlall.xml

rm $out
echo "<?xml version=\"1.0\"?>" >>$out
echo "<unit xmlns=\"http://qcad.org/namespaces/src\" xmlns:qc=\"http://qcad.org/namespaces/xsl\">" >>$out

for f in `find tmp/010_sorted -name "*.xml" | sort`
do
    cat $f | grep -v "<unit" | grep -v "unit>" | grep -v "<?xml" | grep -v "<class_decl" >> $out
done

echo "</unit>" >>$out

echo "done."
