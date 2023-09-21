
  // Auto generated
  
  // include header:
  //#include "qcoreapplicationwrapper.h"
  //#include "header_cpp.h"
  
    #include "qcoreapplication_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QCoreApplication
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::tr
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

   && is_char_ptr(handler, a2
    , true
  
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceText (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a2_ba = js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QObject::tr(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tr";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: arguments
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::arguments
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QCoreApplication::arguments(
              
            );
          
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for arguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setAttribute
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::setAttribute
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_ApplicationAttribute(handler, a1
  )

   && is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: attribute (Qt::ApplicationAttribute)
  
Qt::ApplicationAttribute a1_cpp;

      a1_cpp = js2cpp_Qt_ApplicationAttribute(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::setAttribute(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: testAttribute
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::testAttribute
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_ApplicationAttribute(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: attribute (Qt::ApplicationAttribute)
  
Qt::ApplicationAttribute a1_cpp;

      a1_cpp = js2cpp_Qt_ApplicationAttribute(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::testAttribute(
              a1_cpp
    
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for testAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setSetuidAllowed
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::setSetuidAllowed
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: allow (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::setSetuidAllowed(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSetuidAllowed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: isSetuidAllowed
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::isSetuidAllowed
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::isSetuidAllowed(
              
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSetuidAllowed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: instance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::instance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QCoreApplication* res = 
                
                // call static member function:
                QCoreApplication::instance(
              
            );
          
            // return type: QCoreApplication*

            return cpp2js_QCoreApplication(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for instance";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: exec
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::exec
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QCoreApplication::exec(
              
            );
          
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: processEvents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::processEvents
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QEventLoop_ProcessEventsFlags(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QEventLoop::ProcessEventsFlags)
  
QEventLoop::ProcessEventsFlags a1_cpp;

      a1_cpp = js2cpp_QEventLoop_ProcessEventsFlags(handler, a1);
        
  // convert js parameter to cpp: maxtime (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::processEvents(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QEventLoop_ProcessEventsFlags(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QEventLoop::ProcessEventsFlags)
  
QEventLoop::ProcessEventsFlags a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QEventLoop::AllEvents;
          }
          else {
            a1_cpp = js2cpp_QEventLoop_ProcessEventsFlags(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::processEvents(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for processEvents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: exit
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::exit
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: retcode (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = js2cpp_int(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::exit(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: sendEvent
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::sendEvent
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_QEvent_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: event (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = js2cpp_QEvent_ptr(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::sendEvent(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: postEvent
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::postEvent
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_QEvent_ptr(handler, a2
    , true
  
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: event (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = js2cpp_QEvent_ptr(handler, a2);
        
  // convert js parameter to cpp: priority (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::NormalEventPriority;
          }
          else {
            a3_cpp = js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::postEvent(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: sendPostedEvents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::sendPostedEvents
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = js2cpp_QObject_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: event_type (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::sendPostedEvents(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sendPostedEvents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: removePostedEvents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::removePostedEvents
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: eventType (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::removePostedEvents(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePostedEvents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: startingUp
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::startingUp
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::startingUp(
              
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startingUp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: closingDown
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::closingDown
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::closingDown(
              
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for closingDown";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QCoreApplication
    // Function: applicationDirPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::applicationDirPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QCoreApplication::applicationDirPath(
              
            );
          
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationDirPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: applicationFilePath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::applicationFilePath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QCoreApplication::applicationFilePath(
              
            );
          
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: applicationPid
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::applicationPid
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            qint64 res = 
                
                // call static member function:
                QCoreApplication::applicationPid(
              
            );
          
            // return type: qint64

            return cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationPid";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(library)

    // Class: QCoreApplication
    // Function: setLibraryPaths
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::setLibraryPaths
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::setLibraryPaths(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLibraryPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: libraryPaths
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::libraryPaths
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QCoreApplication::libraryPaths(
              
            );
          
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for libraryPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: addLibraryPath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::addLibraryPath
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::addLibraryPath(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addLibraryPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: removeLibraryPath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::removeLibraryPath
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::removeLibraryPath(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeLibraryPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#ifndef QT_NO_TRANSLATION

    // Class: QCoreApplication
    // Function: installTranslator
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::installTranslator
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTranslator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: messageFile (QTranslator)
  

          // pointer:
          QTranslator*
         a1_cpp;

      a1_cpp = js2cpp_QTranslator_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::installTranslator(
              a1_cpp
    
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for installTranslator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: removeTranslator
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::removeTranslator
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTranslator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: messageFile (QTranslator)
  

          // pointer:
          QTranslator*
         a1_cpp;

      a1_cpp = js2cpp_QTranslator_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QCoreApplication::removeTranslator(
              a1_cpp
    
            );
          
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeTranslator";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: quit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_WrapperSingleton::quit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCoreApplication::quit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for quit";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#ifdef QT_NO_QOBJECT

#endif

#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_QOBJECT

#endif

    void QCoreApplication_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QCoreApplication_Wrapper>("org.qcad", 1, 0, "QCoreApplication_Wrapper");
        qmlRegisterInterface<QCoreApplication_Wrapper>("QCoreApplication_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QCoreApplication_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QCoreApplication_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QCoreApplication_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QCoreApplication_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QCoreApplication_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QCoreApplication_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QCoreApplication_WrapperSingleton * s = new QCoreApplication_WrapperSingleton(handler);
        engine->globalObject().setProperty("QCoreApplication_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QCoreApplication.js";
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
    QCoreApplication_Wrapper::QCoreApplication_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QCoreApplication_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QCoreApplication_Wrapper::QCoreApplication_Wrapper(RJSApi& h, QCoreApplication* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QCoreApplication_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QCoreApplication_Wrapper"));
              //setObjectName("QCoreApplication_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QCoreApplication_Wrapper::~QCoreApplication_Wrapper() {
            //RDebug::decCounter(QString("QCoreApplication_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QCoreApplication_Wrapper"));

            //qDebug() << "QCoreApplication_Wrapper::~QCoreApplication_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QCoreApplication";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QCoreApplication_Wrapper::initConnections() {

          //setObjectName("QCoreApplication_Wrapper");

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
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
            
          }
        }
      

  // constructors:
  
#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_TRANSLATION

#endif

#ifndef QT_NO_QOBJECT

#endif

#ifdef QT_NO_QOBJECT

#endif

#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_QOBJECT

#endif


    // non-static functions:
    
    // Class: QCoreApplication
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::objectName
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
                QCoreApplication* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setObjectName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::isWidgetType
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
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::isWindowType
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
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::signalsBlocked
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
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::blockSignals
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: b (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::findChild
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
        is_QString(handler, a1
    , true
  
  )

   && is_Qt_FindChildOptions(handler, a2
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
            a1_cpp = js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = js2cpp_Qt_FindChildOptions(handler, a2);
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
                QCoreApplication* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QObject*

            return cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::children
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
                QCoreApplication* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
            // return type: const QObjectList&

            return cpp2js_QObjectList(
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
            
    // Class: QCoreApplication
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::dumpObjectTree
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
                QCoreApplication* w = getWrapped();
                
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
                QCoreApplication* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::dumpObjectInfo
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
                QCoreApplication* w = getWrapped();
                
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
                QCoreApplication* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
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
                QCoreApplication* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::dynamicPropertyNames
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
                QCoreApplication* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
            // return type: QList<QByteArray>

            return cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::parent
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
                QCoreApplication* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
            // return type: QObject*

            return cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::deleteLater
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
                QCoreApplication* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setOrganizationDomain
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setOrganizationDomain
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orgDomain (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setOrganizationDomain(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrganizationDomain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: organizationDomain
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::organizationDomain
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
                QCoreApplication* w = getWrapped();
                QString res = 
                    
                w->organizationDomain(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for organizationDomain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setOrganizationName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setOrganizationName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orgName (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setOrganizationName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrganizationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: organizationName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::organizationName
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
                QCoreApplication* w = getWrapped();
                QString res = 
                    
                w->organizationName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for organizationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setApplicationName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setApplicationName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: application (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setApplicationName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: applicationName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::applicationName
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
                QCoreApplication* w = getWrapped();
                QString res = 
                    
                w->applicationName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setApplicationVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setApplicationVersion
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: version (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setApplicationVersion(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: applicationVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::applicationVersion
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
                QCoreApplication* w = getWrapped();
                QString res = 
                    
                w->applicationVersion(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: notify
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::notify
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_QEvent_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = js2cpp_QEvent_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->notify(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for notify";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_TRANSLATION

#endif

#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: isQuitLockEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::isQuitLockEnabled
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
                QCoreApplication* w = getWrapped();
                bool res = 
                    
                w->isQuitLockEnabled(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isQuitLockEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: setQuitLockEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCoreApplication_Wrapper::setQuitLockEnabled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCoreApplication* w = getWrapped();
                
                w->setQuitLockEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuitLockEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCoreApplication
    // Function: organizationNameChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QCoreApplication_Wrapper::organizationNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit organizationNameChanged(
                  
                );
              }
            
    // Class: QCoreApplication
    // Function: organizationDomainChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QCoreApplication_Wrapper::organizationDomainChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit organizationDomainChanged(
                  
                );
              }
            
    // Class: QCoreApplication
    // Function: applicationNameChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QCoreApplication_Wrapper::applicationNameChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationNameChanged(
                  
                );
              }
            
    // Class: QCoreApplication
    // Function: applicationVersionChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QCoreApplication_Wrapper::applicationVersionChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit applicationVersionChanged(
                  
                );
              }
            
#endif

#ifdef QT_NO_QOBJECT

#endif

#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_QOBJECT

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  