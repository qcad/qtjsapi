#!/bin/bash

#echo "xml to cpp..."
DIR=`dirname $0`
PLUGINID=$1
TYPEIDBASE=$2

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

maxThreads=64

threads=0
#for f in `find xml_060_uniquetypes -name "qurl.xml" | sort`
for f in `find tmp/040_addcount -name "*.xml" | sort`
do
    for mode in h cpp
    do
        xmlfile=${f##*/}
        file=${xmlfile%%.*}
        fileLower=`echo $file | tr '[:upper:]' '[:lower:]'`
        ecmafile=${fileLower}_wrapper.$mode

        (
            #if [ "$f" -nt "cpp/${ecmafile}" ]
            #then
                echo "processing $file ($mode)"
                if [ ! -z $PLUGINID ]
                then
                    xsltproc --stringparam mode $mode --stringparam pluginid $PLUGINID --stringparam typeidbase $TYPEIDBASE $DIR/xml2cpp.xsl "$f" >"cpp/new_${ecmafile}"
                else
                    xsltproc --stringparam mode $mode $DIR/xml2cpp.xsl "$f" >"cpp/new_${ecmafile}"
                fi

                if [ $noAStyle -eq 0 ]
                then
                    astyle "cpp/new_${ecmafile}"
                fi

                if [ ! -f "cpp/${ecmafile}" ]
                then
                    mv "cpp/new_${ecmafile}" "cpp/${ecmafile}"
                else
                    diff "cpp/${ecmafile}" "cpp/new_${ecmafile}"
                    if [ $? -ne 0 ]
                    then
                        mv "cpp/new_${ecmafile}" "cpp/${ecmafile}"
                    else
                        rm "cpp/new_${ecmafile}"
                    fi
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
done

wait

rm -f cpp/*.orig

echo "done."
