echo "# Automatically generated, do not edit" > new_CMakeInclude.txt
echo "target_sources(rjsapi PUBLIC" >> new_CMakeInclude.txt

files=(cpp/*.h cpp/*.cpp)
pos=$(( ${#files[*]} - 1 ))
last=${files[$pos]}
for f in "${files[@]}"
do
    if [[ $f != *rnest* ]]
    then
        echo "    generator/$f" >> new_CMakeInclude.txt
    fi
done
#echo "    generator/RJSType.h" >> new_CMakeInclude.txt
echo ")" >> new_CMakeInclude.txt

diff CMakeInclude.txt new_CMakeInclude.txt
if [ $? -ne 0 ]
then
    mv new_CMakeInclude.txt CMakeInclude.txt
else
    rm new_CMakeInclude.txt
fi
