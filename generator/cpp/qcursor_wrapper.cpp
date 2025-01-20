
  // Auto generated
  
  // include header:
  //#include "qcursorwrapper.h"
  //#include "header_cpp.h"
  
    #include "qcursor_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QCursor*> QCursor_Wrapper::basecasters_QCursor;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QCursor
    // Function: pos
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCursor_WrapperSingleton::pos
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QScreen_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: screen (QScreen)
  

          // pointer:
          QScreen*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QScreen_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPoint res = 
                
                // call static member function:
                QCursor::pos(
              a1_cpp
    
            );
          
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QPoint res = 
                
                // call static member function:
                QCursor::pos(
              
            );
          
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCursor
    // Function: setPos
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QCursor_WrapperSingleton::setPos
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
        RJSHelper::is_QScreen_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: screen (QScreen)
  

          // pointer:
          QScreen*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QScreen_ptr(handler, a1);
        
  // convert js parameter to cpp: x (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCursor::setPos(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  &&
    a3.isUndefined()

    
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
            
                // call static member function:
                QCursor::setPos(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QScreen_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QPoint(handler, a2
  )

  &&
    a3.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: screen (QScreen)
  

          // pointer:
          QScreen*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QScreen_ptr(handler, a1);
        
  // convert js parameter to cpp: p (QPoint)
  
QPoint a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPoint(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCursor::setPos(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  &&
    a2.isUndefined()

    &&
    a3.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QCursor::setPos(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QCursor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QCursor_Wrapper>("org.qcad", 1, 0, "QCursor_Wrapper");
        qmlRegisterInterface<QCursor_Wrapper>("QCursor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QCursor* t = new RJSType_QCursor();
          global.setProperty("RJSType_QCursor", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QCursor::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QCursor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QCursor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QCursor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QCursor_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QCursor_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QCursor_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QCursor_WrapperSingleton * s = new QCursor_WrapperSingleton(handler);
        engine->globalObject().setProperty("QCursor_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QCursor.js";
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
    QCursor_Wrapper::QCursor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QCursor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QCursor_Wrapper::QCursor_Wrapper(RJSApi& h, QCursor* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QCursor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QCursor_Wrapper"));
              //setObjectName("QCursor_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QCursor_Wrapper::~QCursor_Wrapper() {
            //RDebug::decCounter(QString("QCursor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QCursor_Wrapper"));

            //qDebug() << "QCursor_Wrapper::~QCursor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QCursor";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QCursor_Wrapper::initConnections() {

          //setObjectName("QCursor_Wrapper");

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
  
    // Class: QCursor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QCursor_Wrapper::QCursor_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QCursor_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QCursor_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QBitmap(handler, a1
  )

   && RJSHelper::is_QBitmap(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bitmap (QBitmap)
  
QBitmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBitmap(handler, a1);
        
  // convert js parameter to cpp: mask (QBitmap)
  
QBitmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBitmap(handler, a2);
        
  // convert js parameter to cpp: hotX (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: hotY (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = -1;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QCursor(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_QPixmap(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        
  // convert js parameter to cpp: hotX (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: hotY (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QCursor(
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
        RJSHelper::is_Qt_CursorShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (Qt::CursorShape)
  
Qt::CursorShape a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_CursorShape(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QCursor(
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
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cursor (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QCursor(
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
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QCursor(
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

        
              wrapped = new QCursor(
                  
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
   && a4.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QCursor";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QCursor
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCursor_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCursor* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCursor
    // Function: shape
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCursor_Wrapper::shape
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
                QCursor* w = getWrapped();
                Qt::CursorShape res = 
                    
                w->shape(
                  
                );
              
            // return type: Qt::CursorShape

            return RJSHelper::cpp2js_Qt_CursorShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCursor
    // Function: setShape
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCursor_Wrapper::setShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_CursorShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: newShape (Qt::CursorShape)
  
Qt::CursorShape a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_CursorShape(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QCursor* w = getWrapped();
                
                w->setShape(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCursor
    // Function: pixmap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCursor_Wrapper::pixmap
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
                QCursor* w = getWrapped();
                QPixmap res = 
                    
                w->pixmap(
                  
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pixmap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCursor
    // Function: hotSpot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCursor_Wrapper::hotSpot
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
                QCursor* w = getWrapped();
                QPoint res = 
                    
                w->hotSpot(
                  
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hotSpot";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qcursor_wrapper.cpp"
  
