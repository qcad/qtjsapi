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

# generate header RJSHelper[_module].h

if [ ! -z $MODULE ]
then
    xsltproc --stringparam mode h --stringparam module $MODULE $DIR/xml2helper.xsl "types.xml" >"new_$OUTPUT.h"
else
    xsltproc --stringparam mode h $DIR/xml2helper.xsl "types.xml" >"new_$OUTPUT.h"
fi

if [ $noAStyle -eq 0 ]
then
    astyle "new_$OUTPUT.h"
fi

if [ ! -f "$OUTPUT.h" ]
then
    mv "new_$OUTPUT.h" "$OUTPUT.h"
else
    diff "new_$OUTPUT.h" "$OUTPUT.h"
    if [ $? -ne 0 ]
    then
        mv "new_$OUTPUT.h" "$OUTPUT.h"
    else
        rm "new_$OUTPUT.h"
    fi
fi



for section in manual primitive shared_ptr_no_copy wrapped wrapped_ptr wrapped_qobject_ptr wrapped_qobject_ptr qlist qlist_ptr qset qmap qhash qpair dummy dummy_ptr
do
    OUTPUT_SECTION="${OUTPUT}_$section"

    if [ ! -z $MODULE ]
    then
        xsltproc --stringparam mode cpp --stringparam section $section --stringparam module $MODULE $DIR/xml2helper.xsl "types.xml" >"new_$OUTPUT_SECTION.cpp"
    else
        xsltproc --stringparam mode cpp --stringparam section $section $DIR/xml2helper.xsl "types.xml" >"new_$OUTPUT_SECTION.cpp"
    fi

    if [ $noAStyle -eq 0 ]
    then
        astyle "new_$OUTPUT_SECTION.cpp"
    fi

    if [ ! -f "$OUTPUT_SECTION.cpp" ]
    then
        mv "new_$OUTPUT_SECTION.cpp" "$OUTPUT_SECTION.cpp"
    else
        diff "new_$OUTPUT_SECTION.cpp" "$OUTPUT_SECTION.cpp"
        if [ $? -ne 0 ]
        then
            mv "new_$OUTPUT_SECTION.cpp" "$OUTPUT_SECTION.cpp"
        else
            rm "new_$OUTPUT_SECTION.cpp"
        fi
    fi
done

rm -f *.orig
