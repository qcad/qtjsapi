#!/bin/bash

#echo "xml to js..."
DIR=`dirname $0`
PLUGINID=$1
TYPEIDBASE=$2

maxThreads=64

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

mkdir new_js

threads=0
for f in `find tmp/040_addcount -name "*.xml" | sort`
do
    xmlfile=${f##*/}
    file=${xmlfile%%.*}
    ecmafile=${file}.js

    (
        #xsltproc xml2js.xsl "$f" >"cpp/${ecmafile}"
        #if [ "$f" -nt "cpp/${ecmafile}" ]
        #then
            #echo "processing $file"
            if [ ! -z $PLUGINID ]
            then
                xsltproc --stringparam pluginid $PLUGINID --stringparam typeidbase $TYPEIDBASE $DIR/xml2js.xsl "$f" >/dev/null
            else
                xsltproc $DIR/xml2js.xsl "$f" >/dev/null
            fi
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

if [ $noAStyle -eq 0 ]
then
    astyle --style=java "new_js/*.js"
fi

rm -f new_js/*.orig

# only update file if changed:
for f in new_js/*.js
do
    f2=`echo $f | sed s/new_js/js/`
    diff $f $f2
    if [ $? -ne 0 ]
    then
        mv $f $f2
    fi
done

rm -rf new_js

echo "done."
