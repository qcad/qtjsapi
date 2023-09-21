# generates RJSHelper.h / cpp files (conversion from / to script values)

xmlfile="types.xml"

echo "processing $xmlfile"
DIR=`dirname $0`
PLUGINID=$1
TYPEIDBASE=$2

noAStyle=0
which astyle 1>/dev/null 2>&1
noAStyle=$?

for mode in h cpp
do
    if [ ! -z $PLUGINID ]
    then
        xsltproc --stringparam mode $mode --stringparam pluginid $PLUGINID --stringparam typeidbase $TYPEIDBASE $DIR/xml2helper.xsl "types.xml" >"new_RJSHelper.$mode"
    else
        xsltproc --stringparam mode $mode $DIR/xml2helper.xsl "types.xml" >"new_RJSHelper.$mode"
    fi

    if [ $noAStyle -eq 0 ]
    then
        astyle "new_RJSHelper.$mode"
    fi

    if [ ! -f "RJSHelper.$mode" ]
    then
        mv "new_RJSHelper.$mode" "RJSHelper.$mode"
    else
        diff "new_RJSHelper.$mode" "RJSHelper.$mode"
        if [ $? -ne 0 ]
        then
            mv "new_RJSHelper.$mode" "RJSHelper.$mode"
        else
            rm "new_RJSHelper.$mode"
        fi
    fi
done

rm -f *.orig
