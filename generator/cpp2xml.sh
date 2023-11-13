CWD=`pwd`

d="$CWD"
f="$1"

bn=$(basename "$d/$f")
bn_nosuffix=$(basename "$d/$f" .h)
xmlfile="xml_auto/$bn_nosuffix.xml"

#cat "$d/$f" | grep -v "friend class" > src_copy/$bn

if [ $f -nt srcml/$bn_nosuffix.srcml ]
then
    srcml -l C++ $f -o srcml/new_$bn_nosuffix.srcml
    tidy -q -i -xml -m srcml/new_$bn_nosuffix.srcml

    diff srcml/new_$bn_nosuffix.srcml srcml/$bn_nosuffix.srcml
    if [ $? -ne 0 ]
    then
        mv srcml/new_$bn_nosuffix.srcml srcml/$bn_nosuffix.srcml
    else
        rm srcml/new_$bn_nosuffix.srcml
    fi
fi

xsltproc "$d/srcml2xml.xsl" srcml/$bn_nosuffix.srcml > "$xmlfile"
tidy -wrap 150 -q -i -xml -m "$xmlfile"

if [ $? -eq 1 ]; then
    echo "error"
    exit 1
fi
