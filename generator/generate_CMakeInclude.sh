MODULE="$1"

NAME="rsjapi"

if [ ! -z $MODULE ]
then
    NAME="rjsapi_$MODULE"
fi

echo "# Automatically generated, do not edit" > new_CMakeInclude.txt
echo "target_sources($NAME PUBLIC" >> new_CMakeInclude.txt

files=(cpp/*.h cpp/*.cpp)
pos=$(( ${#files[*]} - 1 ))
last=${files[$pos]}
for f in "${files[@]}"
do
    echo "    generator/$f" >> new_CMakeInclude.txt
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
