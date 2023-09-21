#!/bin/bash

#echo "add used types info"

maxThreads=64

threads=0
for f in `find xml_050_addtypes -name "*.xml" | sort`
do
    xmlfile=${f##*/}
    file=${xmlfile%%.*}

    (
        #if [ "$f" -nt "xml_050_addtypes/${xmlfile}" ]
        #then
            #echo "processing $file ($mode)"
            xsltproc xml2uniquetypes.xsl "$f" >"xml_060_uniquetypes/${xmlfile}"
            tidy -wrap 150 -q -i -xml -m "xml_060_uniquetypes/${xmlfile}"
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
