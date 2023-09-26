cmake_minimum_required(VERSION 3.16)
project(rjsapi VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Sql Svg Xml PrintSupport Qml UiTools QuickWidgets Core5Compat)
qt_standard_project_setup()

qt_add_resources(SOURCES rjsapi.qrc)

if(MSVC)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /bigobj")
endif()

if(CMAKE_BUILD_TYPE STREQUAL "Release")
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
else()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../qcad/plugins)
endif()

qt_add_library(rjsapi SHARED
    RJSWrapper.cpp RJSWrapper.h
    RJSTools.cpp RJSTools.h
    generator/RJSHelper.cpp generator/RJSHelper.h
    generator/RJSType.h generator/RJSType.cpp
    RJSWrapperObj.h
    RJSApi.h RJSApi.cpp
    RJSTypeEnum.h RJSTypeEnum.cpp
    ${SOURCES}
)

include(generator/CMakeInclude.txt)

target_include_directories(rjsapi PRIVATE
    generator
    generator/cpp
    .
)

if (CMAKE_BUILD_TYPE STREQUAL "Release")
    set_target_properties(rjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/release)
    set_target_properties(rjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/release)
    set_target_properties(rjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/release)
else()
    set_target_properties(rjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../qcad/debug)
    set_target_properties(rjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../qcad/debug)
    set_target_properties(rjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../qcad/debug)
endif()

target_compile_definitions(rjsapi PRIVATE
    RJSAPI_LIBRARY
    RJSAPI_DLL
)

target_link_libraries(rjsapi PRIVATE
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
