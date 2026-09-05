cmake_minimum_required(VERSION 3.16)

if(APPLE)
    set(CMAKE_OSX_DEPLOYMENT_TARGET "12.7" CACHE STRING "Minimum macOS version" FORCE)
endif()

project(qtjsapi VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)

# Mandatory modules
find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Svg Xml Qml UiTools Help)

# Optional modules
set(QT_OPTIONAL_COMPONENTS Core5Compat PrintSupport QuickWidgets Sql Positioning Location Help)
find_package(Qt6 OPTIONAL_COMPONENTS ${QT_OPTIONAL_COMPONENTS})

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
    generator/RJSHelper_manual.cpp
    generator/RJSHelper_primitive.cpp
    generator/RJSHelper_shared_ptr_no_copy.cpp
    generator/RJSHelper_wrapped.cpp
    generator/RJSHelper_wrapped_ptr.cpp
    generator/RJSHelper_wrapped_qobject_ptr.cpp
    generator/RJSHelper_qlist.cpp
    generator/RJSHelper_qlist_ptr.cpp
    generator/RJSHelper_qset.cpp
    generator/RJSHelper_qmap.cpp
    generator/RJSHelper_qhash.cpp
    generator/RJSHelper_qpair.cpp
    generator/RJSHelper_dummy.cpp
    generator/RJSHelper_dummy_ptr.cpp
    generator/RJSHelper.h
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
        set_target_properties(qtjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
        set_target_properties(qtjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
        set_target_properties(qtjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/release)
    else()
        set_target_properties(qtjsapi PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
        set_target_properties(qtjsapi PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
        set_target_properties(qtjsapi PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../qcad/debug)
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
    Qt::Svg
    Qt::Widgets
    Qt::Xml
    Qt::UiTools
    Qt::Help
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

# QGeoJson binding (Qt Location, private API header):
if(TARGET Qt::Location)
    target_sources(qtjsapi PRIVATE
        RJSGeoJson.h
        RJSGeoJson.cpp
        RJSGeoJsonImpl.cpp
    )
    find_package(Qt6 OPTIONAL_COMPONENTS LocationPrivate)
    if(TARGET Qt6::LocationPrivate)
        target_link_libraries(qtjsapi PRIVATE Qt6::LocationPrivate)
    else()
        # private headers live in <QtLocation include dir>/<version>[/QtLocation]
        # (or <framework>/Headers/<version> for macOS frameworks):
        get_target_property(_loc_inc Qt6::Location INTERFACE_INCLUDE_DIRECTORIES)
        foreach(_d IN LISTS _loc_inc)
            target_include_directories(qtjsapi PRIVATE
                ${_d}/${Qt6_VERSION}
                ${_d}/${Qt6_VERSION}/QtLocation
                ${_d}/Headers/${Qt6_VERSION}
                ${_d}/Headers/${Qt6_VERSION}/QtLocation
            )
        endforeach()
    endif()
endif()

# doesn't work under Windows / MSVC:
# instead, build from console dir
#add_subdirectory(console)
