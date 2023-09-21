
  // Auto generated
  
  // include header:
  //#include "qfontmetricswrapper.h"
  //#include "header_cpp.h"
  
    #include "qfontmetrics_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QFontMetrics_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFontMetrics_Wrapper>("org.qcad", 1, 0, "QFontMetrics_Wrapper");
        qmlRegisterInterface<QFontMetrics_Wrapper>("QFontMetrics_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFontMetrics_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFontMetrics_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFontMetrics_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFontMetrics_BaseJs", mob);
      
      QString fileName = ":generated/js/QFontMetrics.js";
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
    QFontMetrics_Wrapper::QFontMetrics_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFontMetrics_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFontMetrics_Wrapper::QFontMetrics_Wrapper(RJSApi& h, QFontMetrics* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFontMetrics_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFontMetrics_Wrapper"));
              //setObjectName("QFontMetrics_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFontMetrics_Wrapper::~QFontMetrics_Wrapper() {
            //RDebug::decCounter(QString("QFontMetrics_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFontMetrics_Wrapper"));

            //qDebug() << "QFontMetrics_Wrapper::~QFontMetrics_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QFontMetrics";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFontMetrics_Wrapper::initConnections() {

          //setObjectName("QFontMetrics_Wrapper");

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
  
    // Class: QFontMetrics
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QFontMetrics_Wrapper::QFontMetrics_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QFontMetrics_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QFontMetrics_Wrapper"));
                
      // check parameter types:
      if (
        is_QFont(handler, a1
  )

   && is_QPaintDevice_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: pd (QPaintDevice)
  

          // pointer:
          QPaintDevice*
         a2_cpp;

      a2_cpp = js2cpp_QPaintDevice_ptr(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetrics(
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
        is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetrics(
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
        is_QFontMetrics_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFontMetrics)
  

          // non copyable:
          QFontMetrics*
         a1_cpp;

      a1_cpp = js2cpp_QFontMetrics_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetrics(
                *a1_cpp
    
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QFontMetrics";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QFontMetrics
    // Function: ascent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::ascent
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->ascent(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ascent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: capHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::capHeight
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->capHeight(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: descent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::descent
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->descent(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for descent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::height
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->height(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: leading
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::leading
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->leading(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leading";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: lineSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::lineSpacing
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->lineSpacing(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: minLeftBearing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::minLeftBearing
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->minLeftBearing(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minLeftBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: minRightBearing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::minRightBearing
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->minRightBearing(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minRightBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: maxWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::maxWidth
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->maxWidth(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maxWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: xHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::xHeight
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->xHeight(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for xHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: averageCharWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::averageCharWidth
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->averageCharWidth(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for averageCharWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: inFont
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::inFont
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetrics* w = getWrapped();
                bool res = 
                    
                w->inFont(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: inFontUcs4
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::inFontUcs4
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_uint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucs4 (uint)
  
uint a1_cpp;

      a1_cpp = js2cpp_uint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetrics* w = getWrapped();
                bool res = 
                    
                w->inFontUcs4(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inFontUcs4";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: leftBearing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::leftBearing
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->leftBearing(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: rightBearing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::rightBearing
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->rightBearing(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: horizontalAdvance
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::horizontalAdvance
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
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: len (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->horizontalAdvance(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->horizontalAdvance(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalAdvance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::boundingRect
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

   && is_int(handler, a5
  )

   && is_QString(handler, a6
  )

   && is_int(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: flags (int)
  
int a5_cpp;

      a5_cpp = js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: text (QString)
  
QString a6_cpp;

      a6_cpp = js2cpp_QString(handler, a6);
        
  // convert js parameter to cpp: tabstops (int)
  
int a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = 0;
          }
          else {
            a7_cpp = js2cpp_int(handler, a7);
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
                QFontMetrics* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QRect(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QString(handler, a3
  )

   && is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: flags (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: text (QString)
  
QString a3_cpp;

      a3_cpp = js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: tabstops (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = js2cpp_int(handler, a4);
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
                QFontMetrics* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetrics* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
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
                QFontMetrics* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::size
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QString(handler, a2
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: str (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: tabstops (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = js2cpp_int(handler, a3);
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
                QFontMetrics* w = getWrapped();
                QSize res = 
                    
                w->size(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: tightBoundingRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::tightBoundingRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
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
                QFontMetrics* w = getWrapped();
                QRect res = 
                    
                w->tightBoundingRect(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tightBoundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: elidedText
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::elidedText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_Qt_TextElideMode(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::TextElideMode)
  
Qt::TextElideMode a2_cpp;

      a2_cpp = js2cpp_Qt_TextElideMode(handler, a2);
        
  // convert js parameter to cpp: width (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: flags (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = js2cpp_int(handler, a4);
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
                QFontMetrics* w = getWrapped();
                QString res = 
                    
                w->elidedText(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for elidedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: underlinePos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::underlinePos
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->underlinePos(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlinePos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: overlinePos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::overlinePos
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->overlinePos(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for overlinePos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: strikeOutPos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::strikeOutPos
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->strikeOutPos(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for strikeOutPos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: lineWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::lineWidth
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
                QFontMetrics* w = getWrapped();
                int res = 
                    
                w->lineWidth(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetrics
    // Function: fontDpi
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetrics_Wrapper::fontDpi
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
                QFontMetrics* w = getWrapped();
                qreal res = 
                    
                w->fontDpi(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontDpi";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qfontmetrics_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QFontMetricsF_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFontMetricsF_Wrapper>("org.qcad", 1, 0, "QFontMetricsF_Wrapper");
        qmlRegisterInterface<QFontMetricsF_Wrapper>("QFontMetricsF_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFontMetricsF_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFontMetricsF_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFontMetricsF_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFontMetricsF_BaseJs", mob);
      
      QString fileName = ":generated/js/QFontMetricsF.js";
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
    QFontMetricsF_Wrapper::QFontMetricsF_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFontMetricsF_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFontMetricsF_Wrapper::QFontMetricsF_Wrapper(RJSApi& h, QFontMetricsF* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFontMetricsF_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFontMetricsF_Wrapper"));
              //setObjectName("QFontMetricsF_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFontMetricsF_Wrapper::~QFontMetricsF_Wrapper() {
            //RDebug::decCounter(QString("QFontMetricsF_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFontMetricsF_Wrapper"));

            //qDebug() << "QFontMetricsF_Wrapper::~QFontMetricsF_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QFontMetricsF";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFontMetricsF_Wrapper::initConnections() {

          //setObjectName("QFontMetricsF_Wrapper");

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
  
    // Class: QFontMetricsF
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QFontMetricsF_Wrapper::QFontMetricsF_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QFontMetricsF_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QFontMetricsF_Wrapper"));
                
      // check parameter types:
      if (
        is_QFont(handler, a1
  )

   && is_QPaintDevice_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: pd (QPaintDevice)
  

          // pointer:
          QPaintDevice*
         a2_cpp;

      a2_cpp = js2cpp_QPaintDevice_ptr(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetricsF(
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
        is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetricsF(
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
        is_QFontMetrics_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFontMetrics)
  

          // non copyable:
          QFontMetrics*
         a1_cpp;

      a1_cpp = js2cpp_QFontMetrics_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetricsF(
                *a1_cpp
    
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
        is_QFontMetricsF_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFontMetricsF)
  

          // non copyable:
          QFontMetricsF*
         a1_cpp;

      a1_cpp = js2cpp_QFontMetricsF_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontMetricsF(
                *a1_cpp
    
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QFontMetricsF";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QFontMetricsF
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFontMetricsF_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QFontMetricsF)
  

          // non copyable:
          QFontMetricsF*
         a1_cpp;

      a1_cpp = js2cpp_QFontMetricsF_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                
                w->swap(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: ascent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::ascent
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->ascent(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ascent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: capHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::capHeight
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->capHeight(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: descent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::descent
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->descent(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for descent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::height
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->height(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: leading
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::leading
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->leading(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leading";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: lineSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::lineSpacing
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->lineSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: minLeftBearing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::minLeftBearing
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->minLeftBearing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minLeftBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: minRightBearing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::minRightBearing
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->minRightBearing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minRightBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: maxWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::maxWidth
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->maxWidth(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maxWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: xHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::xHeight
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->xHeight(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for xHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: averageCharWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::averageCharWidth
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->averageCharWidth(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for averageCharWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: inFont
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::inFont
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                bool res = 
                    
                w->inFont(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: inFontUcs4
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::inFontUcs4
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_uint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucs4 (uint)
  
uint a1_cpp;

      a1_cpp = js2cpp_uint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                bool res = 
                    
                w->inFontUcs4(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inFontUcs4";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: leftBearing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::leftBearing
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->leftBearing(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: rightBearing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::rightBearing
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->rightBearing(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightBearing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: horizontalAdvance
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::horizontalAdvance
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
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: length (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->horizontalAdvance(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->horizontalAdvance(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalAdvance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::boundingRect
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QString(handler, a3
  )

   && is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: flags (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: string (QString)
  
QString a3_cpp;

      a3_cpp = js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: tabstops (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = js2cpp_int(handler, a4);
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
                QFontMetricsF* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
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
                QFontMetricsF* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QChar)
  
QChar a1_cpp;

      a1_cpp = js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFontMetricsF* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::size
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QString(handler, a2
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: str (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: tabstops (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = js2cpp_int(handler, a3);
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
                QFontMetricsF* w = getWrapped();
                QSizeF res = 
                    
                w->size(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSizeF

            return cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: tightBoundingRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::tightBoundingRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
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
                QFontMetricsF* w = getWrapped();
                QRectF res = 
                    
                w->tightBoundingRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tightBoundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: elidedText
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::elidedText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_Qt_TextElideMode(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::TextElideMode)
  
Qt::TextElideMode a2_cpp;

      a2_cpp = js2cpp_Qt_TextElideMode(handler, a2);
        
  // convert js parameter to cpp: width (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: flags (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = js2cpp_int(handler, a4);
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
                QFontMetricsF* w = getWrapped();
                QString res = 
                    
                w->elidedText(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for elidedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: underlinePos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::underlinePos
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->underlinePos(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlinePos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: overlinePos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::overlinePos
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->overlinePos(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for overlinePos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: strikeOutPos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::strikeOutPos
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->strikeOutPos(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for strikeOutPos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: lineWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::lineWidth
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->lineWidth(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontMetricsF
    // Function: fontDpi
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontMetricsF_Wrapper::fontDpi
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
                QFontMetricsF* w = getWrapped();
                qreal res = 
                    
                w->fontDpi(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontDpi";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  