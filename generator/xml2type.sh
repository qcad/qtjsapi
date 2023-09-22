# generates RJSType.h

xmlfile="types.xml"

echo "processing $xmlfile"

DIR=`dirname $0`

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

for mode in h cpp
do
    xsltproc --stringparam mode $mode $DIR/xml2type.xsl "types.xml" >"new_RJSType.$mode"

    if [ $noAStyle -eq 0 ]
    then
        astyle "new_RJSType.$mode"
    fi

    if [ ! -f "RJSType.$mode" ]
    then
        mv "new_RJSType.$mode" "RJSType.$mode"
    else
        diff "new_RJSType.$mode" "RJSType.$mode"
        if [ $? -ne 0 ]
        then
            mv "new_RJSType.$mode" "RJSType.$mode"
        else
            rm "new_RJSType.$mode"
        fi
    fi
done

rm -f *.orig
