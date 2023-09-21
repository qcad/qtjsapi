for f in sources/*.txt
do
    echo "$f:"
    cat $f | sort | uniq > tmp_source
    mv tmp_source $f
done
