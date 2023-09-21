
  // Auto generated
  
  // include header:
  //#include "qtextcursorwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtextcursor_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_TEXTHTMLPARSER

#endif

    void QTextCursor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextCursor_Wrapper>("org.qcad", 1, 0, "QTextCursor_Wrapper");
        qmlRegisterInterface<QTextCursor_Wrapper>("QTextCursor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextCursor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextCursor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextCursor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextCursor_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextCursor.js";
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
    QTextCursor_Wrapper::QTextCursor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextCursor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextCursor_Wrapper::QTextCursor_Wrapper(RJSApi& h, QTextCursor* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextCursor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextCursor_Wrapper"));
              //setObjectName("QTextCursor_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextCursor_Wrapper::~QTextCursor_Wrapper() {
            //RDebug::decCounter(QString("QTextCursor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextCursor_Wrapper"));

            //qDebug() << "QTextCursor_Wrapper::~QTextCursor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextCursor";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextCursor_Wrapper::initConnections() {

          //setObjectName("QTextCursor_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: QTextCursor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QTextCursor_Wrapper::QTextCursor_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextCursor_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextCursor_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QTextDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (QTextDocument)
  

          // pointer:
          QTextDocument*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextDocument_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextCursor(
                a1_cpp
    
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
        RJSHelper::is_QTextCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cursor (QTextCursor)
  
QTextCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCursor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextCursor(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextCursor(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QTextCursor";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_TEXTHTMLPARSER

#endif


    // non-static functions:
    
    // Class: QTextCursor
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextCursor)
  
QTextCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::isNull
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setPosition
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setPosition
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

   && RJSHelper::is_QTextCursor_MoveMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: mode (QTextCursor::MoveMode)
  
QTextCursor::MoveMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QTextCursor::MoveAnchor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QTextCursor_MoveMode(handler, a2);
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
                QTextCursor* w = getWrapped();
                
                w->setPosition(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::position
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->position(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for position";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: positionInBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::positionInBlock
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->positionInBlock(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for positionInBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: anchor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::anchor
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->anchor(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: insertText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::insertText
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
    
  // convert js parameter to cpp: text (QString)
  
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
                QTextCursor* w = getWrapped();
                
                w->insertText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: movePosition
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::movePosition
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
        RJSHelper::is_QTextCursor_MoveOperation(handler, a1
  )

   && RJSHelper::is_QTextCursor_MoveMode(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: op (QTextCursor::MoveOperation)
  
QTextCursor::MoveOperation a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCursor_MoveOperation(handler, a1);
        
  // convert js parameter to cpp:  (QTextCursor::MoveMode)
  
QTextCursor::MoveMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QTextCursor::MoveAnchor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QTextCursor_MoveMode(handler, a2);
          }
        
  // convert js parameter to cpp: n (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->movePosition(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for movePosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: visualNavigation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::visualNavigation
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->visualNavigation(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for visualNavigation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setVisualNavigation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setVisualNavigation
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
                QTextCursor* w = getWrapped();
                
                w->setVisualNavigation(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisualNavigation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setVerticalMovementX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setVerticalMovementX
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
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->setVerticalMovementX(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalMovementX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: verticalMovementX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::verticalMovementX
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->verticalMovementX(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalMovementX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setKeepPositionOnInsert
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setKeepPositionOnInsert
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
                QTextCursor* w = getWrapped();
                
                w->setKeepPositionOnInsert(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeepPositionOnInsert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: keepPositionOnInsert
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::keepPositionOnInsert
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->keepPositionOnInsert(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keepPositionOnInsert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: deleteChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::deleteChar
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
                QTextCursor* w = getWrapped();
                
                w->deleteChar(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: deletePreviousChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::deletePreviousChar
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
                QTextCursor* w = getWrapped();
                
                w->deletePreviousChar(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deletePreviousChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: select
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::select
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCursor_SelectionType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: selection (QTextCursor::SelectionType)
  
QTextCursor::SelectionType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCursor_SelectionType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->select(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for select";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: hasSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::hasSelection
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->hasSelection(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: hasComplexSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::hasComplexSelection
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->hasComplexSelection(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasComplexSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: removeSelectedText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::removeSelectedText
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
                QTextCursor* w = getWrapped();
                
                w->removeSelectedText(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeSelectedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: clearSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::clearSelection
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
                QTextCursor* w = getWrapped();
                
                w->clearSelection(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: selectionStart
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::selectionStart
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->selectionStart(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectionStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: selectionEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::selectionEnd
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->selectionEnd(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectionEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: selectedText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::selectedText
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
                QTextCursor* w = getWrapped();
                QString res = 
                    
                w->selectedText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: charFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::charFormat
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
                QTextCursor* w = getWrapped();
                QTextCharFormat res = 
                    
                w->charFormat(
                  
                );
              
            // return type: QTextCharFormat

            return RJSHelper::cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for charFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setCharFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCharFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextCharFormat)
  
QTextCharFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCharFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->setCharFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: mergeCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::mergeCharFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCharFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: modifier (QTextCharFormat)
  
QTextCharFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCharFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->mergeCharFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mergeCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: blockFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::blockFormat
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
                QTextCursor* w = getWrapped();
                QTextBlockFormat res = 
                    
                w->blockFormat(
                  
                );
              
            // return type: QTextBlockFormat

            return RJSHelper::cpp2js_QTextBlockFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setBlockFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setBlockFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextBlockFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextBlockFormat)
  
QTextBlockFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextBlockFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->setBlockFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: mergeBlockFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::mergeBlockFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextBlockFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: modifier (QTextBlockFormat)
  
QTextBlockFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextBlockFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->mergeBlockFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mergeBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: blockCharFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::blockCharFormat
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
                QTextCursor* w = getWrapped();
                QTextCharFormat res = 
                    
                w->blockCharFormat(
                  
                );
              
            // return type: QTextCharFormat

            return RJSHelper::cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: setBlockCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::setBlockCharFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCharFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextCharFormat)
  
QTextCharFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCharFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->setBlockCharFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: mergeBlockCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::mergeBlockCharFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCharFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: modifier (QTextCharFormat)
  
QTextCharFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCharFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->mergeBlockCharFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mergeBlockCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: atBlockStart
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::atBlockStart
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->atBlockStart(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atBlockStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: atBlockEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::atBlockEnd
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->atBlockEnd(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atBlockEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: atStart
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::atStart
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->atStart(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::atEnd
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
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->atEnd(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: insertBlock
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::insertBlock
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextBlockFormat(handler, a1
  )

   && RJSHelper::is_QTextCharFormat(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextBlockFormat)
  
QTextBlockFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextBlockFormat(handler, a1);
        
  // convert js parameter to cpp: charFormat (QTextCharFormat)
  
QTextCharFormat a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTextCharFormat(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->insertBlock(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QTextBlockFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextBlockFormat)
  
QTextBlockFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextBlockFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->insertBlock(
                  a1_cpp
    
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
                QTextCursor* w = getWrapped();
                
                w->insertBlock(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_TEXTHTMLPARSER

    // Class: QTextCursor
    // Function: insertHtml
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::insertHtml
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
    
  // convert js parameter to cpp: html (QString)
  
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
                QTextCursor* w = getWrapped();
                
                w->insertHtml(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertHtml";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QTextCursor
    // Function: insertImage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::insertImage
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextImageFormat(handler, a1
  )

   && RJSHelper::is_QTextFrameFormat_Position(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextImageFormat)
  
QTextImageFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextImageFormat(handler, a1);
        
  // convert js parameter to cpp: alignment (QTextFrameFormat::Position)
  
QTextFrameFormat::Position a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTextFrameFormat_Position(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->insertImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QImage(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
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
                QTextCursor* w = getWrapped();
                
                w->insertImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QTextImageFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QTextImageFormat)
  
QTextImageFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextImageFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                
                w->insertImage(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

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
                QTextCursor* w = getWrapped();
                
                w->insertImage(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: beginEditBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::beginEditBlock
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
                QTextCursor* w = getWrapped();
                
                w->beginEditBlock(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginEditBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: joinPreviousEditBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::joinPreviousEditBlock
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
                QTextCursor* w = getWrapped();
                
                w->joinPreviousEditBlock(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for joinPreviousEditBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: endEditBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::endEditBlock
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
                QTextCursor* w = getWrapped();
                
                w->endEditBlock(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endEditBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: isCopyOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::isCopyOf
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextCursor)
  
QTextCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCursor* w = getWrapped();
                bool res = 
                    
                w->isCopyOf(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCopyOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: blockNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::blockNumber
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->blockNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::columnNumber
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
                QTextCursor* w = getWrapped();
                int res = 
                    
                w->columnNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCursor
    // Function: document
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCursor_Wrapper::document
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
                QTextCursor* w = getWrapped();
                QTextDocument* res = 
                    
                w->document(
                  
                );
              
            // return type: QTextDocument*

            return RJSHelper::cpp2js_QTextDocument(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for document";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  