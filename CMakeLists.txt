cmake_minimum_required(VERSION 3.16)
project(qtjsapi VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Sql Svg Xml PrintSupport Qml UiTools QuickWidgets Core5Compat)
qt_standard_project_setup()

qt_add_resources(SOURCES qtjsapi.qrc)

if(MSVC)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /bigobj")
endif()

if(EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/../qcad)
    # build for QCAD:
    if(CMAKE_BUILD_TYPE STREQUAL "Release")
        link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
    else()
        link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
    endif()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
else()
    link_directories(out)
endif()

qt_add_library(qtjsapi SHARED
    RJSWrapper.cpp RJSWrapper.h
    RJSWrapperObj.h RJSWrapperObj.cpp
    RJSTools.cpp RJSTools.h
    generator/RJSHelper.cpp generator/RJSHelper.h
    generator/RJSType.h generator/RJSType.cpp
    RJSApi.h RJSApi.cpp
    RJSTypeEnum.h RJSTypeEnum.cpp
    ${SOURCES}
)

include(generator/CMakeInclude.txt)

target_include_directories(qtjsapi PRIVATE
    .
    generator
    generator/cpp
)

if(EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/../qcad)
    # build for QCAD:
    if(CMAKE_BUILD_TYPE STREQUAL "Release")
        set_target_properties(qtjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/release)
        set_target_properties(qtjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/release)
        set_target_properties(qtjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/release)
    else()
        set_target_properties(qtjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/debug)
        set_target_properties(qtjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/debug)
        set_target_properties(qtjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/debug)
    endif()
else()
    set_target_properties(qtjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY out)
    set_target_properties(qtjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY out)
    set_target_properties(qtjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY out)
endif()

target_compile_definitions(qtjsapi PRIVATE
    QTJSAPI_LIBRARY
    QCAD_DLL
)

target_link_libraries(qtjsapi PRIVATE
    Qt::Concurrent
    Qt::Core
    Qt::Gui
    Qt::Network
    Qt::OpenGL
    Qt::Qml
    Qt::Sql
    Qt::Svg
    Qt::Widgets
    Qt::Xml
    Qt::UiTools
    Qt::PrintSupport
    Qt::Core5Compat
    Qt::QuickWidgets
)

# doesn't work under Windows / MSVC:
# instead, build from console dir
#add_subdirectory(console)
