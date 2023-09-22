cmake_minimum_required(VERSION 3.16)
project(rjsapiconsole VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets Concurrent Gui Network OpenGL Sql Svg Xml PrintSupport Qml UiTools QuickWidgets Core5Compat)
qt_standard_project_setup()

if(CMAKE_BUILD_TYPE STREQUAL "Release")
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/release)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/plugins)
else()
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/debug)
    link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../../qcad/plugins)
endif()

add_executable(rjsapiconsole
    main.cpp
)

target_include_directories(rjsapiconsole PRIVATE
    ../generator
    ..
)

if (CMAKE_BUILD_TYPE STREQUAL "Release")
    set_target_properties(rjsapiconsole PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../../qcad/release)
    set_target_properties(rjsapiconsole PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../../qcad/release)
    set_target_properties(rjsapiconsole PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../../qcad/release)
else()
    set_target_properties(rjsapiconsole PROPERTIES ARCHIVE_OUTPUT_DIRECTORY ../../qcad/debug)
    set_target_properties(rjsapiconsole PROPERTIES RUNTIME_OUTPUT_DIRECTORY ../../qcad/debug)
    set_target_properties(rjsapiconsole PROPERTIES LIBRARY_OUTPUT_DIRECTORY ../../qcad/debug)
endif()

target_link_libraries(rjsapiconsole PRIVATE
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
    rjsapi
)
