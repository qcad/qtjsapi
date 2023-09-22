
  // Auto generated
  
  // include header:
  //#include "qpagesizewrapper.h"
  //#include "header_cpp.h"
  
    #include "qpagesize_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QPageSize
    // Function: key
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::key
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QPageSize::key(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for key";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: name
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::name
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QPageSize::name(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: id
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::id
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
        RJSHelper::is_QSizeF(handler, a1
  )

   && RJSHelper::is_QPageSize_Unit(handler, a2
  )

   && RJSHelper::is_QPageSize_SizeMatchPolicy(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizeF(handler, a1);
        
  // convert js parameter to cpp: units (QPageSize::Unit)
  
QPageSize::Unit a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPageSize_Unit(handler, a2);
        
  // convert js parameter to cpp: matchPolicy (QPageSize::SizeMatchPolicy)
  
QPageSize::SizeMatchPolicy a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QPageSize::FuzzyMatch;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QPageSize_SizeMatchPolicy(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPageSize::PageSizeId res = 
                
                // call static member function:
                QPageSize::id(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QPageSize::PageSizeId

            return RJSHelper::cpp2js_QPageSize_PageSizeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

   && RJSHelper::is_QPageSize_SizeMatchPolicy(handler, a2
    , true
  
  )

  &&
    a3.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointSize (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: matchPolicy (QPageSize::SizeMatchPolicy)
  
QPageSize::SizeMatchPolicy a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QPageSize::FuzzyMatch;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QPageSize_SizeMatchPolicy(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPageSize::PageSizeId res = 
                
                // call static member function:
                QPageSize::id(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QPageSize::PageSizeId

            return RJSHelper::cpp2js_QPageSize_PageSizeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  &&
    a2.isUndefined()

    &&
    a3.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: windowsId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPageSize::PageSizeId res = 
                
                // call static member function:
                QPageSize::id(
              a1_cpp
    
            );
          
            // return type: QPageSize::PageSizeId

            return RJSHelper::cpp2js_QPageSize_PageSizeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: windowsId
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::windowsId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QPageSize::windowsId(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowsId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: definitionSize
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::definitionSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSizeF res = 
                
                // call static member function:
                QPageSize::definitionSize(
              a1_cpp
    
            );
          
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for definitionSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: definitionUnits
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::definitionUnits
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPageSize::Unit res = 
                
                // call static member function:
                QPageSize::definitionUnits(
              a1_cpp
    
            );
          
            // return type: QPageSize::Unit

            return RJSHelper::cpp2js_QPageSize_Unit(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for definitionUnits";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: size
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::size
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

   && RJSHelper::is_QPageSize_Unit(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        
  // convert js parameter to cpp: units (QPageSize::Unit)
  
QPageSize::Unit a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPageSize_Unit(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSizeF res = 
                
                // call static member function:
                QPageSize::size(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: sizePoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::sizePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSize res = 
                
                // call static member function:
                QPageSize::sizePoints(
              a1_cpp
    
            );
          
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: sizePixels
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPageSize_WrapperSingleton::sizePixels
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        
  // convert js parameter to cpp: resolution (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSize res = 
                
                // call static member function:
                QPageSize::sizePixels(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizePixels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QPageSize_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPageSize_Wrapper>("org.qcad", 1, 0, "QPageSize_Wrapper");
        qmlRegisterInterface<QPageSize_Wrapper>("QPageSize_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPageSize* t = new RJSType_QPageSize();
          global.setProperty("RJSType_QPageSize", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPageSize::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPageSize_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPageSize_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPageSize_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPageSize_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QPageSize_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QPageSize_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QPageSize_WrapperSingleton * s = new QPageSize_WrapperSingleton(handler);
        engine->globalObject().setProperty("QPageSize_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QPageSize.js";
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
    QPageSize_Wrapper::QPageSize_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPageSize_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPageSize_Wrapper::QPageSize_Wrapper(RJSApi& h, QPageSize* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPageSize_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPageSize_Wrapper"));
              //setObjectName("QPageSize_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPageSize_Wrapper::~QPageSize_Wrapper() {
            //RDebug::decCounter(QString("QPageSize_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPageSize_Wrapper"));

            //qDebug() << "QPageSize_Wrapper::~QPageSize_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPageSize";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPageSize_Wrapper::initConnections() {

          //setObjectName("QPageSize_Wrapper");

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
  
    // Class: QPageSize
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QPageSize_Wrapper::QPageSize_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QPageSize_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPageSize_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSizeF(handler, a1
  )

   && RJSHelper::is_QPageSize_Unit(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
    , true
  
  )

   && RJSHelper::is_QPageSize_SizeMatchPolicy(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizeF(handler, a1);
        
  // convert js parameter to cpp: units (QPageSize::Unit)
  
QPageSize::Unit a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPageSize_Unit(handler, a2);
        
  // convert js parameter to cpp: name (QString)
  
QString a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QString();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
          }
        
  // convert js parameter to cpp: matchPolicy (QPageSize::SizeMatchPolicy)
  
QPageSize::SizeMatchPolicy a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QPageSize::FuzzyMatch;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QPageSize_SizeMatchPolicy(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageSize(
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
        RJSHelper::is_QSize(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_QPageSize_SizeMatchPolicy(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointSize (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: matchPolicy (QPageSize::SizeMatchPolicy)
  
QPageSize::SizeMatchPolicy a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QPageSize::FuzzyMatch;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QPageSize_SizeMatchPolicy(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageSize(
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
        RJSHelper::is_QPageSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageSize)
  
QPageSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageSize(
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
        RJSHelper::is_QPageSize_PageSizeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSizeId (QPageSize::PageSizeId)
  
QPageSize::PageSizeId a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_PageSizeId(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageSize(
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

        
            wrapped = new QPageSize(
                
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
                  

                  qWarning() << "no matching constructor variant found for QPageSize";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPageSize
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageSize)
  
QPageSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageSize* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: isEquivalentTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_Wrapper::isEquivalentTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageSize)
  
QPageSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageSize* w = getWrapped();
                bool res = 
                    
                w->isEquivalentTo(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEquivalentTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageSize_Wrapper::isValid
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
                QPageSize* w = getWrapped();
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
            
    // Class: QPageSize
    // Function: key
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::key
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
                QPageSize* w = getWrapped();
                QString res = 
                    
                w->key(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for key";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::name
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
                QPageSize* w = getWrapped();
                QString res = 
                    
                w->name(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::id
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
                QPageSize* w = getWrapped();
                QPageSize::PageSizeId res = 
                    
                w->id(
                  
                );
              
            // return type: QPageSize::PageSizeId

            return RJSHelper::cpp2js_QPageSize_PageSizeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: windowsId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::windowsId
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
                QPageSize* w = getWrapped();
                int res = 
                    
                w->windowsId(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowsId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: definitionSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::definitionSize
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
                QPageSize* w = getWrapped();
                QSizeF res = 
                    
                w->definitionSize(
                  
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for definitionSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: definitionUnits
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::definitionUnits
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
                QPageSize* w = getWrapped();
                QPageSize::Unit res = 
                    
                w->definitionUnits(
                  
                );
              
            // return type: QPageSize::Unit

            return RJSHelper::cpp2js_QPageSize_Unit(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for definitionUnits";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: 2

                QJSValue 
              QPageSize_Wrapper::size
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: units (QPageSize::Unit)
  
QPageSize::Unit a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_Unit(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageSize* w = getWrapped();
                QSizeF res = 
                    
                w->size(
                  a1_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: sizePoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: 1

                QJSValue 
              QPageSize_Wrapper::sizePoints
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
                QPageSize* w = getWrapped();
                QSize res = 
                    
                w->sizePoints(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: sizePixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: 2

                QJSValue 
              QPageSize_Wrapper::sizePixels
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolution (int)
  
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
                QPageSize* w = getWrapped();
                QSize res = 
                    
                w->sizePixels(
                  a1_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizePixels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: rect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_Wrapper::rect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: units (QPageSize::Unit)
  
QPageSize::Unit a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize_Unit(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageSize* w = getWrapped();
                QRectF res = 
                    
                w->rect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: rectPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageSize_Wrapper::rectPoints
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
                QPageSize* w = getWrapped();
                QRect res = 
                    
                w->rectPoints(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rectPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageSize
    // Function: rectPixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageSize_Wrapper::rectPixels
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolution (int)
  
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
                QPageSize* w = getWrapped();
                QRect res = 
                    
                w->rectPixels(
                  a1_cpp
    
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rectPixels";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  