cmake_minimum_required(VERSION 3.16)
project(qtjsapiconsole VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Svg Xml PrintSupport Qml UiTools)

# Optional modules
set(QT_OPTIONAL_COMPONENTS Core5Compat PrintSupport QuickWidgets Sql)
find_package(Qt6 OPTIONAL_COMPONENTS ${QT_OPTIONAL_COMPONENTS})

qt_standard_project_setup()

if(EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/../../qcad)
    if(CMAKE_BUILD_TYPE STREQUAL "Release")
        link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/release)
        link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/plugins)
    else()
        link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/debug)
        link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/plugins)
    endif()
else()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../out)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../out)
endif()

add_executable(qtjsapiconsole
    main.cpp
)

target_include_directories(qtjsapiconsole PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/..
    ${CMAKE_CURRENT_SOURCE_DIR}/../generator
)

set_target_properties(qtjsapiconsole PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../out)
set_target_properties(qtjsapiconsole PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../out)
set_target_properties(qtjsapiconsole PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../out)

target_link_libraries(qtjsapiconsole PRIVATE
    Qt::Concurrent
    Qt::Core
    Qt::Gui
    Qt::Network
    Qt::OpenGL
    Qt::Qml
    Qt::Svg
    Qt::Widgets
    Qt::Xml
    Qt::UiTools
    qtjsapi
)

# Link optional modules if present
foreach(module IN LISTS QT_OPTIONAL_COMPONENTS)
    if(TARGET Qt::${module})
        target_link_libraries(qtjsapi PRIVATE Qt::${module})
        message(STATUS "Qt module found and linked: ${module}")
    else()
        message(STATUS "Qt module NOT found, skipping: ${module}")
    endif()
endforeach()
