# generates RJSType.h

xmlfile="types.xml"

echo "processing $xmlfile"

DIR=`dirname $0`

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

xsltproc $DIR/xml2type.xsl "types.xml" >"new_RJSType.h"

if [ $noAStyle -eq 0 ]
then
    astyle "new_RJSType.h"
fi

if [ ! -f "RJSType.h" ]
then
    mv "new_RJSType.h" "RJSType.h"
else
    diff "new_RJSType.h" "RJSType.h"
    if [ $? -ne 0 ]
    then
        mv "new_RJSType.h" "RJSType.h"
    else
        rm "new_RJSType.h"
    fi
fi

rm -f *.orig
