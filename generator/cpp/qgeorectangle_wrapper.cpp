
  // Auto generated
  
  // include header:
  //#include "qgeorectanglewrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_POSITIONING_LIB
    #include "qgeorectangle_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QGeoRectangle*> QGeoRectangle_Wrapper::basecasters_QGeoRectangle;
    
    // static functions implementation in singleton wrapper:
    
    void QGeoRectangle_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QGeoRectangle_Wrapper>("org.qcad", 1, 0, "QGeoRectangle_Wrapper");
        qmlRegisterInterface<QGeoRectangle_Wrapper>("QGeoRectangle_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QGeoRectangle* t = new RJSType_QGeoRectangle();
          global.setProperty("RJSType_QGeoRectangle", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QGeoRectangle::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QGeoRectangle_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QGeoRectangle_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QGeoRectangle_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QGeoRectangle_BaseJs", mob);
      
      QString fileName = ":generator/js/QGeoRectangle.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QGeoRectangle_Wrapper::QGeoRectangle_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QGeoRectangle_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QGeoRectangle_Wrapper::QGeoRectangle_Wrapper(RJSApi& h, QGeoRectangle* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QGeoRectangle_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QGeoRectangle_Wrapper"));
              //setObjectName("QGeoRectangle_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QGeoRectangle_Wrapper::~QGeoRectangle_Wrapper() {
            //RDebug::decCounter(QString("QGeoRectangle_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QGeoRectangle_Wrapper"));

            //qDebug() << "QGeoRectangle_Wrapper::~QGeoRectangle_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QGeoRectangle";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QGeoRectangle_Wrapper::initConnections() {

          //setObjectName("QGeoRectangle_Wrapper");

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
  
    // Class: QGeoRectangle
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QGeoRectangle_Wrapper::QGeoRectangle_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QGeoRectangle_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QGeoRectangle_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        
  // convert js parameter to cpp: degreesWidth (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: degreesHeight (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoRectangle(
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
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

   && RJSHelper::is_QGeoCoordinate(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topLeft (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        
  // convert js parameter to cpp: bottomRight (QGeoCoordinate)
  
QGeoCoordinate a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoRectangle(
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

      // check parameter types:
      if (
        RJSHelper::is_QList_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: coordinates (QList<QGeoCoordinate>)
  
QList<QGeoCoordinate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QGeoCoordinate(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoRectangle(
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
        RJSHelper::is_QGeoRectangle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoRectangle)
  
QGeoRectangle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoRectangle(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoRectangle(
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
        RJSHelper::is_QGeoShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoShape)
  
QGeoShape a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoShape(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoRectangle(
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

        
              wrapped = new QGeoRectangle(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QGeoRectangle";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QGeoRectangle
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::type
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
                QGeoRectangle* w = getWrapped();
                QGeoShape::ShapeType res = 
                    
                w->type(
                  
                );
              
            // return type: QGeoShape::ShapeType

            return RJSHelper::cpp2js_QGeoShape_ShapeType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::isValid
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
                QGeoRectangle* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::isEmpty
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
                QGeoRectangle* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: boundingGeoRectangle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::boundingGeoRectangle
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
                QGeoRectangle* w = getWrapped();
                QGeoRectangle res = 
                    
                w->boundingGeoRectangle(
                  
                );
              
            // return type: QGeoRectangle

            return RJSHelper::cpp2js_QGeoRectangle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingGeoRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::contains
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoRectangle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rectangle (QGeoRectangle)
  
QGeoRectangle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoRectangle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contains";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setTopLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setTopLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topLeft (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setTopLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: topLeft
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::topLeft
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
                QGeoRectangle* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->topLeft(
                  
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setTopRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setTopRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topRight (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setTopRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: topRight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::topRight
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
                QGeoRectangle* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->topRight(
                  
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setBottomLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setBottomLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bottomLeft (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setBottomLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: bottomLeft
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::bottomLeft
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
                QGeoRectangle* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->bottomLeft(
                  
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setBottomRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setBottomRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bottomRight (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setBottomRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: bottomRight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::bottomRight
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
                QGeoRectangle* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->bottomRight(
                  
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setCenter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::center
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
                QGeoRectangle* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->center(
                  
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for center";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: degreesWidth (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::width
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
                QGeoRectangle* w = getWrapped();
                double res = 
                    
                w->width(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: degreesHeight (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::height
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
                QGeoRectangle* w = getWrapped();
                double res = 
                    
                w->height(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::intersects
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoRectangle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rectangle (QGeoRectangle)
  
QGeoRectangle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoRectangle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: degreesLatitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: degreesLongitude (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::translated
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: degreesLatitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: degreesLongitude (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                QGeoRectangle res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QGeoRectangle

            return RJSHelper::cpp2js_QGeoRectangle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: extendRectangle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::extendRectangle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                
                w->extendRectangle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for extendRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoRectangle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rectangle (QGeoRectangle)
  
QGeoRectangle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoRectangle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoRectangle* w = getWrapped();
                QGeoRectangle res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QGeoRectangle

            return RJSHelper::cpp2js_QGeoRectangle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoRectangle
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoRectangle_Wrapper::
                          // special function name for JS wrapper:
                          toStr
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
                QGeoRectangle* w = getWrapped();
                QString res = 
                    
                w->toString(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toString";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #endif
  
    #include "moc_qgeorectangle_wrapper.cpp"
  
