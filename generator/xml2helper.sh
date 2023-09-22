# generates RJSHelper.h / cpp files (conversion from / to script values)

xmlfile="types.xml"

echo "processing $xmlfile"
DIR=`dirname $0`

MODULE="$1"
OUTPUT="RJSHelper"
if [ ! -z $MODULE ]
then
    OUTPUT="RJSHelper_$MODULE"
fi

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

for mode in h cpp
do
    if [ ! -z $MODULE ]
    then
        xsltproc --stringparam mode $mode --stringparam module $MODULE $DIR/xml2helper.xsl "types.xml" >"new_$OUTPUT.$mode"
    else
        xsltproc --stringparam mode $mode $DIR/xml2helper.xsl "types.xml" >"new_$OUTPUT.$mode"
    fi

    if [ $noAStyle -eq 0 ]
    then
        astyle "new_$OUTPUT.$mode"
    fi

    if [ ! -f "$OUTPUT.$mode" ]
    then
        mv "new_$OUTPUT.$mode" "$OUTPUT.$mode"
    else
        diff "new_$OUTPUT.$mode" "$OUTPUT.$mode"
        if [ $? -ne 0 ]
        then
            mv "new_$OUTPUT.$mode" "$OUTPUT.$mode"
        else
            rm "new_$OUTPUT.$mode"
        fi
    fi
done

rm -f *.orig
