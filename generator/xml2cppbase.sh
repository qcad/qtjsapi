#!/bin/bash

#echo "xml to cpp base class..."
DIR=`dirname $0`

MODULE=$1

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

maxThreads=64

threads=0
for f in `find tmp/040_addcount -name "*.xml" | sort`
do
    for mode in h cpp
    do
        xmlfile=${f##*/}
        file=${xmlfile%%.*}
        fileLower=`echo $file | tr '[:upper:]' '[:lower:]'`
        ecmafile=${fileLower}_base.$mode

        (
            #if [ "$f" -nt "cpp/${ecmafile}" ]
            #then
                #echo "processing $file ($mode)"
                if [ ! -z $MODULE ]
                then
                    xsltproc --stringparam mode $mode --stringparam module $MODULE $DIR/xml2cppbase.xsl "$f" >"cpp/new_${ecmafile}"
                else
                    xsltproc --stringparam mode $mode $DIR/xml2cppbase.xsl "$f" >"cpp/new_${ecmafile}"
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
