
  // Auto generated
  
    #ifndef QAPPLICATION_H_WRAPPER
    #define QAPPLICATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QStyle>
      
        #include <QEventLoop>
      
        #include <QIcon>
      
        #include <QLocale>
      
        #include <QApplication>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QApplication>
      
      // singleton class wrapper for static functions:
      class QApplication_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QApplication_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QApplication
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: arguments
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  arguments
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setAttribute
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: testAttribute
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: setSetuidAllowed
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSetuidAllowed
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: isSetuidAllowed
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSetuidAllowed
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: instance
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  instance
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: processEvents
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  processEvents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: exit
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: sendEvent
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sendEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: postEvent
    // Source: QCoreApplication
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  postEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: sendPostedEvents
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sendPostedEvents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: removePostedEvents
    // Source: QCoreApplication
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePostedEvents
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: startingUp
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startingUp
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: closingDown
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  closingDown
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationDirPath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationDirPath
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationFilePath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationFilePath
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationPid
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationPid
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setLibraryPaths
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLibraryPaths
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: libraryPaths
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  libraryPaths
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: addLibraryPath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addLibraryPath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: removeLibraryPath
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeLibraryPath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: installTranslator
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installTranslator
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: removeTranslator
    // Source: QCoreApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeTranslator
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: quit
    // Source: QCoreApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  quit
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setApplicationDisplayName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationDisplayName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationDisplayName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationDisplayName
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setDesktopFileName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDesktopFileName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: desktopFileName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  desktopFileName
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setWindowIcon
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowIcon
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: windowIcon
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowIcon
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: platformName
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  platformName
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: focusObject
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusObject
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: primaryScreen
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  primaryScreen
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: screens
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  screens
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: screenAt
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  screenAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: overrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overrideCursor
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setOverrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOverrideCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: changeOverrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  changeOverrideCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: restoreOverrideCursor
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restoreOverrideCursor
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: clipboard
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clipboard
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: keyboardModifiers
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardModifiers
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: queryKeyboardModifiers
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  queryKeyboardModifiers
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: mouseButtons
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mouseButtons
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setLayoutDirection
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: layoutDirection
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: isRightToLeft
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRightToLeft
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: isLeftToRight
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLeftToRight
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setDesktopSettingsAware
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDesktopSettingsAware
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: desktopSettingsAware
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  desktopSettingsAware
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setQuitOnLastWindowClosed
    // Source: QGuiApplication
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setQuitOnLastWindowClosed
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: quitOnLastWindowClosed
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  quitOnLastWindowClosed
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationState
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationState
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: sync
    // Source: QGuiApplication
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sync
              (

                
              )
              
              ;
            
#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifdef Q_QDOC

#else

#endif

    // Class: QApplication
    // Function: palette
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  palette
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: setPalette
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPalette
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: font
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: setFont
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: activePopupWidget
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activePopupWidget
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: activeModalWidget
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activeModalWidget
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: focusWidget
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusWidget
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: activeWindow
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activeWindow
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setActiveWindow
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setActiveWindow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: widgetAt
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  widgetAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: topLevelAt
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topLevelAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: beep
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  beep
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: alert
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alert
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: setCursorFlashTime
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursorFlashTime
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: cursorFlashTime
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorFlashTime
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setDoubleClickInterval
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDoubleClickInterval
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: doubleClickInterval
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doubleClickInterval
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setKeyboardInputInterval
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeyboardInputInterval
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: keyboardInputInterval
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardInputInterval
              (

                
              )
              
              ;
            
#if QT_CONFIG(wheelevent)

    // Class: QApplication
    // Function: setWheelScrollLines
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWheelScrollLines
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: wheelScrollLines
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  wheelScrollLines
              (

                
              )
              
              ;
            
#endif

    // Class: QApplication
    // Function: setStartDragTime
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStartDragTime
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: startDragTime
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startDragTime
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setStartDragDistance
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStartDragDistance
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: startDragDistance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startDragDistance
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: exec
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exec
              (

                
              )
              
              ;
            
#ifndef QT_NO_STYLE_STYLESHEET

#endif

    // Class: QApplication
    // Function: closeAllWindows
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  closeAllWindows
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: aboutQt
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  aboutQt
              (

                
              )
              
              ;
            
#ifndef QT_NO_SHORTCUT

#endif

#ifndef QT_NO_GESTURES

#endif


      private:
          RJSApi& handler;
          //static QApplication_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QApplication
    class QApplication_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     applicationName READ applicationName WRITE setApplicationName
  )

  Q_PROPERTY(
    
    QJSValue
     applicationVersion READ applicationVersion WRITE setApplicationVersion
  )

  Q_PROPERTY(
    
    QJSValue
     organizationDomain READ organizationDomain WRITE setOrganizationDomain
  )

  Q_PROPERTY(
    
    QJSValue
     organizationName READ organizationName WRITE setOrganizationName
  )

  Q_PROPERTY(
    
    QJSValue
     quitLockEnabled READ isQuitLockEnabled WRITE setQuitLockEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     doubleClickInterval READ doubleClickInterval WRITE setDoubleClickInterval
  )

  Q_PROPERTY(
    
    QJSValue
     keyboardInputInterval READ keyboardInputInterval WRITE setKeyboardInputInterval
  )

  Q_PROPERTY(
    
    QJSValue
     wheelScrollLines READ wheelScrollLines WRITE setWheelScrollLines
  )

  Q_PROPERTY(
    
    QJSValue
     startDragTime READ startDragTime WRITE setStartDragTime
  )

  Q_PROPERTY(
    
    QJSValue
     startDragDistance READ startDragDistance WRITE setStartDragDistance
  )

  Q_PROPERTY(
    
    QJSValue
     styleSheet READ styleSheet WRITE setStyleSheet
  )

  Q_PROPERTY(
    
    QJSValue
     autoSipEnabled READ autoSipEnabled WRITE setAutoSipEnabled
  )


    private:
      // disable copy constructor:
      QApplication_Wrapper(const QApplication_Wrapper&);

    public:
      // initialization of QApplication:
      static void init(RJSApi& handler);

      
        static QApplication* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QApplication:
          for (int i=0; i<basecasters_QApplication.length(); i++) {
            RJSBasecaster_QApplication* basecaster = basecasters_QApplication[i];
            QApplication* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QApplication:
          if (t==RJSType_QApplication::getIdStatic()) {
            return (QApplication*)vp;
          }

          qWarning() << "QApplication_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QApplication* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QApplication*: wrapper wraps NULL";
          }

          QApplication* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QApplication*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QApplication_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QApplication_Wrapper(RJSApi& h, QApplication* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QApplication_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifdef Q_QDOC

    // Class: QApplication
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QApplication_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
#else

#endif

#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifndef QT_NO_SHORTCUT

#endif

#ifndef QT_NO_GESTURES

#endif


    // non-static functions:
    
    // Class: QApplication
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setOrganizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOrganizationDomain
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: organizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  organizationDomain
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setOrganizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOrganizationName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: organizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  organizationName
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setApplicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationName
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setApplicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationVersion
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: applicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationVersion
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: isQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isQuitLockEnabled
              (

                
              )
              
              ;
            
    // Class: QApplication
    // Function: setQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setQuitLockEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: organizationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void organizationNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void organizationNameChangedEmitter(
                
              );
            
    // Class: QApplication
    // Function: organizationDomainChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void organizationDomainChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void organizationDomainChangedEmitter(
                
              );
            
    // Class: QApplication
    // Function: applicationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationNameChangedEmitter(
                
              );
            
    // Class: QApplication
    // Function: applicationVersionChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationVersionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationVersionChangedEmitter(
                
              );
            
    // Class: QApplication
    // Function: devicePixelRatio
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devicePixelRatio
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: isSessionRestored
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSessionRestored
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: sessionId
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionId
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: sessionKey
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: isSavingSession
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSavingSession
              (

                
              )
              
                const
              
              ;
            
    // Class: QApplication
    // Function: fontDatabaseChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void fontDatabaseChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void fontDatabaseChangedEmitter(
                
              );
            
    // Class: QApplication
    // Function: screenAdded
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void screenAdded(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void screenAddedEmitter(
                QScreen* screen
              );
            
    // Class: QApplication
    // Function: screenRemoved
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void screenRemoved(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void screenRemovedEmitter(
                QScreen* screen
              );
            
    // Class: QApplication
    // Function: primaryScreenChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void primaryScreenChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void primaryScreenChangedEmitter(
                QScreen* screen
              );
            
    // Class: QApplication
    // Function: lastWindowClosed
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void lastWindowClosed(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void lastWindowClosedEmitter(
                
              );
            
    // Class: QApplication
    // Function: focusObjectChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusObjectChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusObjectChangedEmitter(
                QObject* focusObject
              );
            
    // Class: QApplication
    // Function: applicationStateChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationStateChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationStateChangedEmitter(
                Qt::ApplicationState state
              );
            
    // Class: QApplication
    // Function: layoutDirectionChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void layoutDirectionChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void layoutDirectionChangedEmitter(
                Qt::LayoutDirection direction
              );
            
    // Class: QApplication
    // Function: applicationDisplayNameChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationDisplayNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationDisplayNameChangedEmitter(
                
              );
            
    // Class: QApplication
    // Function: paletteChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void paletteChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void paletteChangedEmitter(
                const QPalette& pal
              );
            
    // Class: QApplication
    // Function: fontChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void fontChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void fontChangedEmitter(
                const QFont& font
              );
            
#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifdef Q_QDOC

#else

#endif

#if QT_CONFIG(wheelevent)

#endif

    // Class: QApplication
    // Function: notify
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  notify
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: focusChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusChangedEmitter(
                QWidget* old, QWidget* now
              );
            
    // Class: QApplication
    // Function: styleSheet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleSheet
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_STYLE_STYLESHEET

    // Class: QApplication
    // Function: setStyleSheet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleSheet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QApplication
    // Function: setAutoSipEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoSipEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QApplication
    // Function: autoSipEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoSipEnabled
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_SHORTCUT

#endif

#ifndef QT_NO_GESTURES

#endif

  // read static property doubleClickInterval:
  Q_INVOKABLE QJSValue doubleClickInterval() {
    return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("doubleClickInterval").call();

    
  }

  
    // write static property doubleClickInterval:
    Q_INVOKABLE QJSValue setDoubleClickInterval(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("setDoubleClickInterval").call(QJSValueList() << arg);
      
    }
  
  // read static property keyboardInputInterval:
  Q_INVOKABLE QJSValue keyboardInputInterval() {
    return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("keyboardInputInterval").call();

    
  }

  
    // write static property keyboardInputInterval:
    Q_INVOKABLE QJSValue setKeyboardInputInterval(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("setKeyboardInputInterval").call(QJSValueList() << arg);
      
    }
  
  // read static property wheelScrollLines:
  Q_INVOKABLE QJSValue wheelScrollLines() {
    return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("wheelScrollLines").call();

    
  }

  
    // write static property wheelScrollLines:
    Q_INVOKABLE QJSValue setWheelScrollLines(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("setWheelScrollLines").call(QJSValueList() << arg);
      
    }
  
  // read static property startDragTime:
  Q_INVOKABLE QJSValue startDragTime() {
    return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("startDragTime").call();

    
  }

  
    // write static property startDragTime:
    Q_INVOKABLE QJSValue setStartDragTime(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("setStartDragTime").call(QJSValueList() << arg);
      
    }
  
  // read static property startDragDistance:
  Q_INVOKABLE QJSValue startDragDistance() {
    return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("startDragDistance").call();

    
  }

  
    // write static property startDragDistance:
    Q_INVOKABLE QJSValue setStartDragDistance(const QJSValue& arg) {
      return handler.getEngine()->globalObject().property("QApplication_WrapperSingleton").property("setStartDragDistance").call(QJSValueList() << arg);
      
    }
  
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QApplication::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QApplication* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QApplication* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QApplication* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QApplication*> basecasters_QApplication;

      public:
        static void registerBasecaster_QApplication(RJSBasecaster_QApplication* bc) {
          basecasters_QApplication.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QApplication_Wrapper*)

    Q_DECLARE_INTERFACE(QApplication_Wrapper, "org.qcad.QApplication_Wrapper")

  
  #endif
  
