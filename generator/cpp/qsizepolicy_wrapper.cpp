
  // Auto generated
  
  // include header:
  //#include "qsizepolicywrapper.h"
  //#include "header_cpp.h"
  
    #include "qsizepolicy_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QSizePolicy_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSizePolicy_Wrapper>("org.qcad", 1, 0, "QSizePolicy_Wrapper");
        qmlRegisterInterface<QSizePolicy_Wrapper>("QSizePolicy_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSizePolicy_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSizePolicy_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSizePolicy_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSizePolicy_BaseJs", mob);
      
      QString fileName = ":generator/js/QSizePolicy.js";
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
    QSizePolicy_Wrapper::QSizePolicy_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSizePolicy_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSizePolicy_Wrapper::QSizePolicy_Wrapper(RJSApi& h, QSizePolicy* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSizePolicy_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSizePolicy_Wrapper"));
              //setObjectName("QSizePolicy_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSizePolicy_Wrapper::~QSizePolicy_Wrapper() {
            //RDebug::decCounter(QString("QSizePolicy_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSizePolicy_Wrapper"));

            //qDebug() << "QSizePolicy_Wrapper::~QSizePolicy_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSizePolicy";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSizePolicy_Wrapper::initConnections() {

          //setObjectName("QSizePolicy_Wrapper");

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
  
    // Class: QSizePolicy
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QSizePolicy_Wrapper::QSizePolicy_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QSizePolicy_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSizePolicy_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSizePolicy_Policy(handler, a1
  )

   && RJSHelper::is_QSizePolicy_Policy(handler, a2
  )

   && RJSHelper::is_QSizePolicy_ControlType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: horizontal (QSizePolicy::Policy)
  
QSizePolicy::Policy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a1);
        
  // convert js parameter to cpp: vertical (QSizePolicy::Policy)
  
QSizePolicy::Policy a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a2);
        
  // convert js parameter to cpp: type (QSizePolicy::ControlType)
  
QSizePolicy::ControlType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QSizePolicy::DefaultType;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QSizePolicy_ControlType(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizePolicy(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizePolicy(
                
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
                  

                  qWarning() << "no matching constructor variant found for QSizePolicy";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSizePolicy
    // Function: horizontalPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::horizontalPolicy
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
                QSizePolicy* w = getWrapped();
                QSizePolicy::Policy res = 
                    
                w->horizontalPolicy(
                  
                );
              
            // return type: QSizePolicy::Policy

            return RJSHelper::cpp2js_QSizePolicy_Policy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: verticalPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::verticalPolicy
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
                QSizePolicy* w = getWrapped();
                QSizePolicy::Policy res = 
                    
                w->verticalPolicy(
                  
                );
              
            // return type: QSizePolicy::Policy

            return RJSHelper::cpp2js_QSizePolicy_Policy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: controlType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::controlType
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
                QSizePolicy* w = getWrapped();
                QSizePolicy::ControlType res = 
                    
                w->controlType(
                  
                );
              
            // return type: QSizePolicy::ControlType

            return RJSHelper::cpp2js_QSizePolicy_ControlType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for controlType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setHorizontalPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setHorizontalPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSizePolicy_Policy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (QSizePolicy::Policy)
  
QSizePolicy::Policy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizePolicy* w = getWrapped();
                
                w->setHorizontalPolicy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setVerticalPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setVerticalPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSizePolicy_Policy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (QSizePolicy::Policy)
  
QSizePolicy::Policy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizePolicy* w = getWrapped();
                
                w->setVerticalPolicy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setControlType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setControlType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSizePolicy_ControlType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QSizePolicy::ControlType)
  
QSizePolicy::ControlType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizePolicy_ControlType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizePolicy* w = getWrapped();
                
                w->setControlType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setControlType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::expandingDirections
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
                QSizePolicy* w = getWrapped();
                Qt::Orientations res = 
                    
                w->expandingDirections(
                  
                );
              
            // return type: Qt::Orientations

            return RJSHelper::cpp2js_Qt_Orientations(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expandingDirections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setHeightForWidth
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
                QSizePolicy* w = getWrapped();
                
                w->setHeightForWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: hasHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::hasHeightForWidth
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
                QSizePolicy* w = getWrapped();
                bool res = 
                    
                w->hasHeightForWidth(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setWidthForHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setWidthForHeight
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
                QSizePolicy* w = getWrapped();
                
                w->setWidthForHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidthForHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: hasWidthForHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::hasWidthForHeight
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
                QSizePolicy* w = getWrapped();
                bool res = 
                    
                w->hasWidthForHeight(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasWidthForHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: horizontalStretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::horizontalStretch
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
                QSizePolicy* w = getWrapped();
                int res = 
                    
                w->horizontalStretch(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: verticalStretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::verticalStretch
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
                QSizePolicy* w = getWrapped();
                int res = 
                    
                w->verticalStretch(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setHorizontalStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setHorizontalStretch
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
    
  // convert js parameter to cpp: stretchFactor (int)
  
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
                QSizePolicy* w = getWrapped();
                
                w->setHorizontalStretch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setVerticalStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setVerticalStretch
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
    
  // convert js parameter to cpp: stretchFactor (int)
  
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
                QSizePolicy* w = getWrapped();
                
                w->setVerticalStretch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: retainSizeWhenHidden
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::retainSizeWhenHidden
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
                QSizePolicy* w = getWrapped();
                bool res = 
                    
                w->retainSizeWhenHidden(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for retainSizeWhenHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: setRetainSizeWhenHidden
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::setRetainSizeWhenHidden
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
    
  // convert js parameter to cpp: retainSize (bool)
  
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
                QSizePolicy* w = getWrapped();
                
                w->setRetainSizeWhenHidden(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRetainSizeWhenHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: transpose
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::transpose
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
                QSizePolicy* w = getWrapped();
                
                w->transpose(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for transpose";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizePolicy
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizePolicy_Wrapper::transposed
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
                QSizePolicy* w = getWrapped();
                QSizePolicy res = 
                    
                w->transposed(
                  
                );
              
            // return type: QSizePolicy

            return RJSHelper::cpp2js_QSizePolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  