#!/bin/bash
DIR=`dirname $0`

#echo "xml to xml..."

maxThreads=64

mkdir -p "tmp/010_sorted"

threads=0
for f in `find xml -name "*.xml" | sort`
do
    xmlfile=${f##*/}
    file=${xmlfile%%.*}

    (
        #if [ "$f" -nt "xml_010_sorted/${xmlfile}" ]
        #then
            #echo "processing $file ($mode)"
            xsltproc $DIR/xml2sorted.xsl "$f" >"tmp/010_sorted/${xmlfile}"
            tidy -wrap 200 -q -i -xml -m "tmp/010_sorted/${xmlfile}"
        #fi
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
