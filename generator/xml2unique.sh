#!/bin/bash

#echo "make sure functions are unique..."
DIR=`dirname $0`

maxThreads=64

mkdir -p tmp/030_unique

threads=0
for f in `find tmp/020_merged -name "*.xml" | sort`
do
    xmlfile=${f##*/}
    file=${xmlfile%%.*}

    (
        xsltproc $DIR/xml2unique.xsl "$f" >"tmp/030_unique/${xmlfile}"
        tidy -wrap 150 -q -i -xml -m "tmp/030_unique/${xmlfile}"
    ) &


    let threads=threads+1
    if [ $threads -eq $maxThreads ]; then
        echo "waiting for threads to finish..."
        wait
        threads=0
    fi
done

wait

echo "done."
