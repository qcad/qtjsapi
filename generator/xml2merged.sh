#!/bin/bash
DIR=`dirname $0`

#echo "merge xml with xml from super class..."
MODULE=$1

maxThreads=64

mkdir -p tmp/020_merged

threads=0
for f in `find tmp/010_sorted -name "*.xml" | sort`
do
    xmlfile=${f##*/}
    file=${xmlfile%%.*}

    (
        #if [ "$f" -nt "xml_020_merged/${xmlfile}" ]
        #then
            #echo "processing $file ($mode)"
            if [ ! -z $MODULE ]
            then
                xsltproc --stringparam module $MODULE $DIR/xml2merged.xsl "$f" >"tmp/020_merged/${xmlfile}"
            else
                xsltproc $DIR/xml2merged.xsl "$f" >"tmp/020_merged/${xmlfile}"
            fi
            tidy -wrap 150 -q -i -xml -m "tmp/020_merged/${xmlfile}"
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
