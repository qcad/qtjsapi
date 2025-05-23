
  // Auto generated
  
  // include header:
  //#include "qapplicationwrapper.h"
  //#include "header_cpp.h"
  
    #include "qapplication_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QApplication*> QApplication_Wrapper::basecasters_QApplication;
    
    // static functions implementation in singleton wrapper:
    
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

                QJSValue 
              QApplication_WrapperSingleton::palette
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPalette res = 
                
                // call static member function:
                QApplication::palette(
              a1_cpp
    
            );
          
            // return type: QPalette

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            QPalette res = 
                
                // call static member function:
                QApplication::palette(
              a1_cpp
    
            );
          
            // return type: QPalette

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for palette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setPalette
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setPalette
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setPalette(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPalette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: font
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::font
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QApplication::font(
              a1_cpp
    
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QApplication::font(
              a1_cpp
    
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QApplication::font(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setFont
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setFont
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: className (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setFont(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: topLevelWidgets
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::topLevelWidgets
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidgetList res = 
                
                // call static member function:
                QApplication::topLevelWidgets(
              
            );
          
            // return type: QWidgetList

            return RJSHelper::cpp2js_QWidgetList_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLevelWidgets";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: activePopupWidget
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::activePopupWidget
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::activePopupWidget(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activePopupWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: activeModalWidget
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::activeModalWidget
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::activeModalWidget(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activeModalWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: focusWidget
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::focusWidget
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::focusWidget(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: activeWindow
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::activeWindow
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::activeWindow(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activeWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: widgetAt
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::widgetAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::widgetAt(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  &&
    a2.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::widgetAt(
              a1_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widgetAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: topLevelAt
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::topLevelAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::topLevelAt(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  &&
    a2.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QApplication::topLevelAt(
              a1_cpp
    
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLevelAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: beep
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::beep
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::beep(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: alert
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::alert
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: duration (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::alert(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for alert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setCursorFlashTime
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setCursorFlashTime
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setCursorFlashTime(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorFlashTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: cursorFlashTime
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::cursorFlashTime
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::cursorFlashTime(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cursorFlashTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setDoubleClickInterval
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setDoubleClickInterval
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setDoubleClickInterval(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDoubleClickInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: doubleClickInterval
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::doubleClickInterval
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::doubleClickInterval(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleClickInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setKeyboardInputInterval
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setKeyboardInputInterval
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setKeyboardInputInterval(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeyboardInputInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: keyboardInputInterval
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::keyboardInputInterval
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::keyboardInputInterval(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keyboardInputInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(wheelevent)

    // Class: QApplication
    // Function: setWheelScrollLines
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setWheelScrollLines
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setWheelScrollLines(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWheelScrollLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: wheelScrollLines
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::wheelScrollLines
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::wheelScrollLines(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for wheelScrollLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QApplication
    // Function: setStartDragTime
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setStartDragTime
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ms (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setStartDragTime(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStartDragTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: startDragTime
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::startDragTime
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::startDragTime(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDragTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setStartDragDistance
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::setStartDragDistance
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::setStartDragDistance(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStartDragDistance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: startDragDistance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::startDragDistance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::startDragDistance(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDragDistance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: exec
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::exec
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QApplication::exec(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exec";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_STYLE_STYLESHEET

#endif

    // Class: QApplication
    // Function: closeAllWindows
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::closeAllWindows
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::closeAllWindows(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for closeAllWindows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: aboutQt
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_WrapperSingleton::aboutQt
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QApplication::aboutQt(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for aboutQt";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_SHORTCUT

#endif

#ifndef QT_NO_GESTURES

#endif

    void QApplication_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QApplication_Wrapper>("org.qcad", 1, 0, "QApplication_Wrapper");
        qmlRegisterInterface<QApplication_Wrapper>("QApplication_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QApplication* t = new RJSType_QApplication();
          global.setProperty("RJSType_QApplication", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QApplication::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QApplication_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QApplication_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QApplication_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QApplication_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QApplication_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QApplication_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QApplication_WrapperSingleton * s = new QApplication_WrapperSingleton(handler);
        engine->globalObject().setProperty("QApplication_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QApplication.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    QApplication_Wrapper::QApplication_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QApplication_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QApplication_Wrapper::QApplication_Wrapper(RJSApi& h, QApplication* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QApplication_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QApplication_Wrapper"));
              //setObjectName("QApplication_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QApplication_Wrapper::~QApplication_Wrapper() {
            //RDebug::decCounter(QString("QApplication_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QApplication_Wrapper"));

            //qDebug() << "QApplication_Wrapper::~QApplication_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QApplication";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QApplication_Wrapper::initConnections() {

          //setObjectName("QApplication_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(organizationNameChanged()), 
    this, 
    SLOT(organizationNameChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(organizationDomainChanged()), 
    this, 
    SLOT(organizationDomainChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationNameChanged()), 
    this, 
    SLOT(applicationNameChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationVersionChanged()), 
    this, 
    SLOT(applicationVersionChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(fontDatabaseChanged()), 
    this, 
    SLOT(fontDatabaseChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(screenAdded(QScreen*)), 
    this, 
    SLOT(screenAddedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(screenRemoved(QScreen*)), 
    this, 
    SLOT(screenRemovedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(primaryScreenChanged(QScreen*)), 
    this, 
    SLOT(primaryScreenChangedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(lastWindowClosed()), 
    this, 
    SLOT(lastWindowClosedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(focusObjectChanged(QObject*)), 
    this, 
    SLOT(focusObjectChangedEmitter(QObject*))
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationStateChanged(Qt::ApplicationState)), 
    this, 
    SLOT(applicationStateChangedEmitter(Qt::ApplicationState))
  );

  connect(
    getWrapped(), 
    SIGNAL(layoutDirectionChanged(Qt::LayoutDirection)), 
    this, 
    SLOT(layoutDirectionChangedEmitter(Qt::LayoutDirection))
  );

  connect(
    getWrapped(), 
    SIGNAL(applicationDisplayNameChanged()), 
    this, 
    SLOT(applicationDisplayNameChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(paletteChanged(const QPalette&)), 
    this, 
    SLOT(paletteChangedEmitter(const QPalette&))
  );

  connect(
    getWrapped(), 
    SIGNAL(fontChanged(const QFont&)), 
    this, 
    SLOT(fontChangedEmitter(const QFont&))
  );

  connect(
    getWrapped(), 
    SIGNAL(focusChanged(QWidget*, QWidget*)), 
    this, 
    SLOT(focusChangedEmitter(QWidget*, QWidget*))
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

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
QApplication_Wrapper::QApplication_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QApplication_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QApplication_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_char(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: argc (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: argv (char)
  
char a2_cpp;

      a2_cpp = RJSHelper::js2cpp_char(handler, a2);
        
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = ApplicationFlags;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QApplication(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_char(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: argc (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: argv (char)
  
char a2_cpp;

      a2_cpp = RJSHelper::js2cpp_char(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QApplication(
                  a1_cpp
    , a2_cpp
    
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
   && a2.isUndefined()
   && a3.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QApplication";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
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

                QJSValue 
              QApplication_Wrapper::objectName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setObjectName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::isWidgetType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::isWindowType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::signalsBlocked
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::blockSignals
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: b (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::findChild
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_FindChildOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aName (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FindChildOptions(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::children
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
            // return type: const QObjectList&

            return RJSHelper::cpp2js_QObjectList(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for children";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::dumpObjectTree
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::dumpObjectInfo
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::dynamicPropertyNames
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::parent
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::deleteLater
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setOrganizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setOrganizationDomain
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orgDomain (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setOrganizationDomain(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrganizationDomain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: organizationDomain
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::organizationDomain
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->organizationDomain(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for organizationDomain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setOrganizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setOrganizationName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orgName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setOrganizationName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrganizationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: organizationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::organizationName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->organizationName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for organizationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setApplicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setApplicationName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: application (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setApplicationName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: applicationName
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::applicationName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->applicationName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setApplicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setApplicationVersion
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: version (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setApplicationVersion(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: applicationVersion
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::applicationVersion
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->applicationVersion(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: isQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::isQuitLockEnabled
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->isQuitLockEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isQuitLockEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: setQuitLockEnabled
    // Source: QCoreApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setQuitLockEnabled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setQuitLockEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuitLockEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: organizationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::organizationNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit organizationNameChanged(
                  
                );
              }
            
    // Class: QApplication
    // Function: organizationDomainChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::organizationDomainChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit organizationDomainChanged(
                  
                );
              }
            
    // Class: QApplication
    // Function: applicationNameChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::applicationNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationNameChanged(
                  
                );
              }
            
    // Class: QApplication
    // Function: applicationVersionChanged
    // Source: QCoreApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::applicationVersionChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationVersionChanged(
                  
                );
              }
            
    // Class: QApplication
    // Function: devicePixelRatio
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::devicePixelRatio
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatio(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: isSessionRestored
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::isSessionRestored
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->isSessionRestored(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSessionRestored";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: sessionId
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::sessionId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->sessionId(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: sessionKey
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::sessionKey
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->sessionKey(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: isSavingSession
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::isSavingSession
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->isSavingSession(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSavingSession";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: fontDatabaseChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::fontDatabaseChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit fontDatabaseChanged(
                  
                );
              }
            
    // Class: QApplication
    // Function: screenAdded
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::screenAddedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit screenAdded(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: screenRemoved
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::screenRemovedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit screenRemoved(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: primaryScreenChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::primaryScreenChangedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit primaryScreenChanged(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: lastWindowClosed
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::lastWindowClosedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit lastWindowClosed(
                  
                );
              }
            
    // Class: QApplication
    // Function: focusObjectChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::focusObjectChangedEmitter(
                QObject* focusObject
              ) {
                // convert cpp parameters to js:
                
  // parameter: focusObject (QObject)
  


  QJSValue a1_js = RJSHelper::cpp2js_QObject(
    handler, 
    focusObject
  );


                emit focusObjectChanged(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: applicationStateChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::applicationStateChangedEmitter(
                Qt::ApplicationState state
              ) {
                // convert cpp parameters to js:
                
  // parameter: state (Qt::ApplicationState)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_ApplicationState(
    handler, 
    state
  );


                emit applicationStateChanged(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: layoutDirectionChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::layoutDirectionChangedEmitter(
                Qt::LayoutDirection direction
              ) {
                // convert cpp parameters to js:
                
  // parameter: direction (Qt::LayoutDirection)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_LayoutDirection(
    handler, 
    direction
  );


                emit layoutDirectionChanged(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: applicationDisplayNameChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::applicationDisplayNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationDisplayNameChanged(
                  
                );
              }
            
    // Class: QApplication
    // Function: paletteChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::paletteChangedEmitter(
                const QPalette& pal
              ) {
                // convert cpp parameters to js:
                
  // parameter: pal (QPalette)
  


  QJSValue a1_js = RJSHelper::cpp2js_QPalette(
    handler, 
    pal
  );


                emit paletteChanged(
                  a1_js
                );
              }
            
    // Class: QApplication
    // Function: fontChanged
    // Source: QGuiApplication
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::fontChangedEmitter(
                const QFont& font
              ) {
                // convert cpp parameters to js:
                
  // parameter: font (QFont)
  


  QJSValue a1_js = RJSHelper::cpp2js_QFont(
    handler, 
    font
  );


                emit fontChanged(
                  a1_js
                );
              }
            
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

                QJSValue 
              QApplication_Wrapper::notify
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QEvent_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QEvent_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->notify(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for notify";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: focusChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QApplication_Wrapper::focusChangedEmitter(
                QWidget* old, QWidget* now
              ) {
                // convert cpp parameters to js:
                
  // parameter: old (QWidget)
  


  QJSValue a1_js = RJSHelper::cpp2js_QWidget(
    handler, 
    old
  );

  // parameter: now (QWidget)
  


  QJSValue a2_js = RJSHelper::cpp2js_QWidget(
    handler, 
    now
  );


                emit focusChanged(
                  a1_js, a2_js
                );
              }
            
    // Class: QApplication
    // Function: styleSheet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::styleSheet
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                QString res = 
                    
                w->styleSheet(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_STYLE_STYLESHEET

    // Class: QApplication
    // Function: setStyleSheet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setStyleSheet
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sheet (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setStyleSheet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QApplication
    // Function: setAutoSipEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::setAutoSipEnabled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                
                w->setAutoSipEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoSipEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QApplication
    // Function: autoSipEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QApplication_Wrapper::autoSipEnabled
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QApplication* w = getWrapped();
                bool res = 
                    
                w->autoSipEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoSipEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_SHORTCUT

#endif

#ifndef QT_NO_GESTURES

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qapplication_wrapper.cpp"
  
