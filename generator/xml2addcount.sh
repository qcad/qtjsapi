#!/bin/bash

#echo "add parameter count to variant tag"
DIR=`dirname $0`

maxThreads=64

mkdir -p tmp/040_addcount

threads=0
for f in `find tmp/030_unique -name "*.xml" | sort`
do
    xmlfile=${f##*/}
    file=${xmlfile%%.*}

    (
        if [ "$f" -nt "tmp/040_addcount/${xmlfile}" ]
        then
            #echo "processing $file ($mode)"
            xsltproc "$DIR/xml2addcount.xsl" "$f" >"tmp/040_addcount/${xmlfile}"
            tidy -wrap 150 -q -i -xml -m "tmp/040_addcount/${xmlfile}"
        fi
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
