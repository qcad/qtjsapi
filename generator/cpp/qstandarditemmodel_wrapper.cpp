
  // Auto generated
  
  // include header:
  //#include "qstandarditemmodelwrapper.h"
  //#include "header_cpp.h"
  
    #include "qstandarditemmodel_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_STATUSTIP

#endif

#if QT_CONFIG(whatsthis)

#endif

#if QT_CONFIG(draganddrop)

#endif

#ifndef QT_NO_DATASTREAM

#endif

    void QStandardItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStandardItem_Wrapper>("org.qcad", 1, 0, "QStandardItem_Wrapper");
        qmlRegisterInterface<QStandardItem_Wrapper>("QStandardItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStandardItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStandardItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStandardItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStandardItem_BaseJs", mob);
      
      QString fileName = ":generated/js/QStandardItem.js";
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
    QStandardItem_Wrapper::QStandardItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStandardItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStandardItem_Wrapper::QStandardItem_Wrapper(RJSApi& h, QStandardItem* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStandardItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStandardItem_Wrapper"));
              //setObjectName("QStandardItem_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStandardItem_Wrapper::~QStandardItem_Wrapper() {
            //RDebug::decCounter(QString("QStandardItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStandardItem_Wrapper"));

            //qDebug() << "QStandardItem_Wrapper::~QStandardItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QStandardItem";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStandardItem_Wrapper::initConnections() {

          //setObjectName("QStandardItem_Wrapper");

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
  
    // Class: QStandardItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QStandardItem_Wrapper::QStandardItem_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QStandardItem_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStandardItem_Wrapper"));
                
      // check parameter types:
      if (
        is_QIcon(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a1_cpp;

      a1_cpp = js2cpp_QIcon(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStandardItem(
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
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rows (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: columns (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 1;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStandardItem(
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
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStandardItem(
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

        
            wrapped = new QStandardItem(
                
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
                  

                  qWarning() << "no matching constructor variant found for QStandardItem";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_STATUSTIP

#endif

#if QT_CONFIG(whatsthis)

#endif

#if QT_CONFIG(draganddrop)

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QStandardItem
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::data
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: role (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::UserRole+1;
          }
          else {
            a1_cpp = js2cpp_int(handler, a1);
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
                QStandardItem* w = getWrapped();
                QVariant res = 
                    
                w->data(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for data";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setData
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QVariant(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a1_cpp;

      a1_cpp = js2cpp_QVariant(handler, a1);
        
  // convert js parameter to cpp: role (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::UserRole+1;
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
                QStandardItem* w = getWrapped();
                
                w->setData(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: clearData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::clearData
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
                QStandardItem* w = getWrapped();
                
                w->clearData(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::text
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
                QStandardItem* w = getWrapped();
                QString res = 
                    
                w->text(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for text";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setText
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
                QStandardItem* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: icon
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::icon
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
                QStandardItem* w = getWrapped();
                QIcon res = 
                    
                w->icon(
                  
                );
              
            // return type: QIcon

            return cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for icon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setIcon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setIcon
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QIcon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a1_cpp;

      a1_cpp = js2cpp_QIcon(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setIcon(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: toolTip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::toolTip
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
                QStandardItem* w = getWrapped();
                QString res = 
                    
                w->toolTip(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setToolTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setToolTip
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
    
  // convert js parameter to cpp: toolTip (QString)
  
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
                QStandardItem* w = getWrapped();
                
                w->setToolTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setToolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_STATUSTIP

    // Class: QStandardItem
    // Function: statusTip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::statusTip
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
                QStandardItem* w = getWrapped();
                QString res = 
                    
                w->statusTip(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for statusTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setStatusTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setStatusTip
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
    
  // convert js parameter to cpp: statusTip (QString)
  
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
                QStandardItem* w = getWrapped();
                
                w->setStatusTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatusTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#if QT_CONFIG(whatsthis)

    // Class: QStandardItem
    // Function: whatsThis
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::whatsThis
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
                QStandardItem* w = getWrapped();
                QString res = 
                    
                w->whatsThis(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for whatsThis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setWhatsThis
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setWhatsThis
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
    
  // convert js parameter to cpp: whatsThis (QString)
  
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
                QStandardItem* w = getWrapped();
                
                w->setWhatsThis(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWhatsThis";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QStandardItem
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::sizeHint
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
                QStandardItem* w = getWrapped();
                QSize res = 
                    
                w->sizeHint(
                  
                );
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setSizeHint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setSizeHint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sizeHint (QSize)
  
QSize a1_cpp;

      a1_cpp = js2cpp_QSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setSizeHint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: font
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::font
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
                QStandardItem* w = getWrapped();
                QFont res = 
                    
                w->font(
                  
                );
              
            // return type: QFont

            return cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setFont
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setFont(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: textAlignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::textAlignment
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
                QStandardItem* w = getWrapped();
                Qt::Alignment res = 
                    
                w->textAlignment(
                  
                );
              
            // return type: Qt::Alignment

            return cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setTextAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setTextAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: textAlignment (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = js2cpp_Qt_Alignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setTextAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: background
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::background
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
                QStandardItem* w = getWrapped();
                QBrush res = 
                    
                w->background(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setBackground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setBackground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: foreground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::foreground
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
                QStandardItem* w = getWrapped();
                QBrush res = 
                    
                w->foreground(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foreground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setForeground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setForeground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setForeground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: checkState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::checkState
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
                QStandardItem* w = getWrapped();
                Qt::CheckState res = 
                    
                w->checkState(
                  
                );
              
            // return type: Qt::CheckState

            return cpp2js_Qt_CheckState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for checkState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setCheckState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setCheckState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_CheckState(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: checkState (Qt::CheckState)
  
Qt::CheckState a1_cpp;

      a1_cpp = js2cpp_Qt_CheckState(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setCheckState(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCheckState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: accessibleText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::accessibleText
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
                QStandardItem* w = getWrapped();
                QString res = 
                    
                w->accessibleText(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for accessibleText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setAccessibleText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setAccessibleText
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
    
  // convert js parameter to cpp: accessibleText (QString)
  
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
                QStandardItem* w = getWrapped();
                
                w->setAccessibleText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccessibleText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: accessibleDescription
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::accessibleDescription
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
                QStandardItem* w = getWrapped();
                QString res = 
                    
                w->accessibleDescription(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for accessibleDescription";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setAccessibleDescription
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setAccessibleDescription
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
    
  // convert js parameter to cpp: accessibleDescription (QString)
  
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
                QStandardItem* w = getWrapped();
                
                w->setAccessibleDescription(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccessibleDescription";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::flags
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
                QStandardItem* w = getWrapped();
                Qt::ItemFlags res = 
                    
                w->flags(
                  
                );
              
            // return type: Qt::ItemFlags

            return cpp2js_Qt_ItemFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setFlags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setFlags
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_ItemFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (Qt::ItemFlags)
  
Qt::ItemFlags a1_cpp;

      a1_cpp = js2cpp_Qt_ItemFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setFlags(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isEnabled
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isEnabled(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setEnabled
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
                QStandardItem* w = getWrapped();
                
                w->setEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isEditable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isEditable
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isEditable(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEditable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setEditable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setEditable
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
    
  // convert js parameter to cpp: editable (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setEditable(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEditable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isSelectable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isSelectable
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isSelectable(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelectable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setSelectable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setSelectable
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
    
  // convert js parameter to cpp: selectable (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setSelectable(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isCheckable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isCheckable
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isCheckable(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCheckable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setCheckable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setCheckable
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
    
  // convert js parameter to cpp: checkable (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setCheckable(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCheckable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isAutoTristate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isAutoTristate
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isAutoTristate(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAutoTristate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setAutoTristate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setAutoTristate
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
    
  // convert js parameter to cpp: tristate (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setAutoTristate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoTristate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isUserTristate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isUserTristate
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isUserTristate(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUserTristate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setUserTristate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setUserTristate
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
    
  // convert js parameter to cpp: tristate (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setUserTristate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUserTristate";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(draganddrop)

    // Class: QStandardItem
    // Function: isDragEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isDragEnabled
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isDragEnabled(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDragEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setDragEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setDragEnabled
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
    
  // convert js parameter to cpp: dragEnabled (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setDragEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDragEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: isDropEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::isDropEnabled
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->isDropEnabled(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDropEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setDropEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setDropEnabled
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
    
  // convert js parameter to cpp: dropEnabled (bool)
  
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
                QStandardItem* w = getWrapped();
                
                w->setDropEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDropEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QStandardItem
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::parent
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
                QStandardItem* w = getWrapped();
                QStandardItem* res = 
                    
                w->parent(
                  
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: row
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::row
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
                QStandardItem* w = getWrapped();
                int res = 
                    
                w->row(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for row";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: column
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::column
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
                QStandardItem* w = getWrapped();
                int res = 
                    
                w->column(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for column";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::index
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
                QStandardItem* w = getWrapped();
                QModelIndex res = 
                    
                w->index(
                  
                );
              
            // return type: QModelIndex

            return cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for index";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: model
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::model
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
                QStandardItem* w = getWrapped();
                QStandardItemModel* res = 
                    
                w->model(
                  
                );
              
            // return type: QStandardItemModel*

            return cpp2js_QStandardItemModel(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for model";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: rowCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::rowCount
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
                QStandardItem* w = getWrapped();
                int res = 
                    
                w->rowCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setRowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setRowCount
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rows (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setRowCount(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: columnCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::columnCount
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
                QStandardItem* w = getWrapped();
                int res = 
                    
                w->columnCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setColumnCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setColumnCount
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: columns (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setColumnCount(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColumnCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: hasChildren
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::hasChildren
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
                QStandardItem* w = getWrapped();
                bool res = 
                    
                w->hasChildren(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: child
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::child
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
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
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
                QStandardItem* w = getWrapped();
                QStandardItem* res = 
                    
                w->child(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for child";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: setChild
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::setChild
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QStandardItem_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a3_cpp;

      a3_cpp = js2cpp_QStandardItem_ptr(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setChild(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QStandardItem_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a2_cpp;

      a2_cpp = js2cpp_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->setChild(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: insertRow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::insertRow
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QStandardItem_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a2_cpp;

      a2_cpp = js2cpp_QList_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->insertRow(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QStandardItem_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a2_cpp;

      a2_cpp = js2cpp_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->insertRow(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: insertColumn
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::insertColumn
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QStandardItem_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a2_cpp;

      a2_cpp = js2cpp_QList_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->insertColumn(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: insertRows
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::insertRows
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QStandardItem_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a2_cpp;

      a2_cpp = js2cpp_QList_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->insertRows(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->insertRows(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: insertColumns
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::insertColumns
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->insertColumns(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: removeRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::removeRow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->removeRow(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: removeColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::removeColumn
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->removeColumn(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: removeRows
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::removeRows
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->removeRows(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: removeColumns
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::removeColumns
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->removeColumns(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: appendRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::appendRow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QList_QStandardItem_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a1_cpp;

      a1_cpp = js2cpp_QList_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->appendRow(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QStandardItem_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a1_cpp;

      a1_cpp = js2cpp_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->appendRow(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: appendRows
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::appendRows
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QList_QStandardItem_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a1_cpp;

      a1_cpp = js2cpp_QList_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->appendRows(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: appendColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::appendColumn
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QList_QStandardItem_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a1_cpp;

      a1_cpp = js2cpp_QList_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                
                w->appendColumn(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: takeChild
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::takeChild
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
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
                QStandardItem* w = getWrapped();
                QStandardItem* res = 
                    
                w->takeChild(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: takeRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::takeRow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                QList<QStandardItem*> res = 
                    
                w->takeRow(
                  a1_cpp
    
                );
              
            // return type: QList<QStandardItem*>

            return cpp2js_QList_QStandardItem_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: takeColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::takeColumn
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItem* w = getWrapped();
                QList<QStandardItem*> res = 
                    
                w->takeColumn(
                  a1_cpp
    
                );
              
            // return type: QList<QStandardItem*>

            return cpp2js_QList_QStandardItem_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: sortChildren
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::sortChildren
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_Qt_SortOrder(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: order (Qt::SortOrder)
  
Qt::SortOrder a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AscendingOrder;
          }
          else {
            a2_cpp = js2cpp_Qt_SortOrder(handler, a2);
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
                QStandardItem* w = getWrapped();
                
                w->sortChildren(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sortChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::clone
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
                QStandardItem* w = getWrapped();
                QStandardItem* res = 
                    
                w->clone(
                  
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItem
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItem_Wrapper::type
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
                QStandardItem* w = getWrapped();
                int res = 
                    
                w->type(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DATASTREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstandarditemmodel_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QStandardItemModel
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_WrapperSingleton::tr
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
            
    void QStandardItemModel_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStandardItemModel_Wrapper>("org.qcad", 1, 0, "QStandardItemModel_Wrapper");
        qmlRegisterInterface<QStandardItemModel_Wrapper>("QStandardItemModel_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStandardItemModel_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStandardItemModel_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStandardItemModel_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStandardItemModel_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QStandardItemModel_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QStandardItemModel_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QStandardItemModel_WrapperSingleton * s = new QStandardItemModel_WrapperSingleton(handler);
        engine->globalObject().setProperty("QStandardItemModel_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QStandardItemModel.js";
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
    QStandardItemModel_Wrapper::QStandardItemModel_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStandardItemModel_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStandardItemModel_Wrapper::QStandardItemModel_Wrapper(RJSApi& h, QStandardItemModel* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStandardItemModel_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStandardItemModel_Wrapper"));
              //setObjectName("QStandardItemModel_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStandardItemModel_Wrapper::~QStandardItemModel_Wrapper() {
            //RDebug::decCounter(QString("QStandardItemModel_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStandardItemModel_Wrapper"));

            //qDebug() << "QStandardItemModel_Wrapper::~QStandardItemModel_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QStandardItemModel";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStandardItemModel_Wrapper::initConnections() {

          //setObjectName("QStandardItemModel_Wrapper");

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
    SIGNAL(headerDataChanged(Qt::Orientation, int, int)), 
    this, 
    SLOT(headerDataChangedEmitter(Qt::Orientation, int, int))
  );

  connect(
    getWrapped(), 
    SIGNAL(rowsInserted(const QModelIndex&, int, int)), 
    this, 
    SLOT(rowsInsertedEmitter(const QModelIndex&, int, int))
  );

  connect(
    getWrapped(), 
    SIGNAL(itemChanged(QStandardItem*)), 
    this, 
    SLOT(itemChangedEmitter(QStandardItem*))
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
  
    // Class: QStandardItemModel
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QStandardItemModel_Wrapper::QStandardItemModel_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QStandardItemModel_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStandardItemModel_Wrapper"));
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QObject_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rows (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: columns (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = nullptr;
          }
          else {
            a3_cpp = js2cpp_QObject_ptr(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStandardItemModel(
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
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStandardItemModel(
                a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for QStandardItemModel";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStandardItemModel
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::objectName
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setObjectName
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
                QStandardItemModel* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::isWidgetType
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::isWindowType
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::signalsBlocked
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::blockSignals
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::findChild
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::children
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
                QStandardItemModel* w = getWrapped();
                
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
            
    // Class: QStandardItemModel
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setParent
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
                QStandardItemModel* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::installEventFilter
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
                QStandardItemModel* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::removeEventFilter
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
                QStandardItemModel* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::dumpObjectTree
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
                QStandardItemModel* w = getWrapped();
                
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
                QStandardItemModel* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::dumpObjectInfo
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
                QStandardItemModel* w = getWrapped();
                
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
                QStandardItemModel* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setProperty
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::property
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::dynamicPropertyNames
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
                QStandardItemModel* w = getWrapped();
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
            
    // Class: QStandardItemModel
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::deleteLater
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
                QStandardItemModel* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: hasIndex
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::hasIndex
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

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = js2cpp_QModelIndex(handler, a3);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->hasIndex(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: sibling
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::sibling
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

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: idx (QModelIndex)
  
QModelIndex a3_cpp;

      a3_cpp = js2cpp_QModelIndex(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QModelIndex res = 
                    
                w->sibling(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QModelIndex

            return cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sibling";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: supportedDragActions
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::supportedDragActions
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
                QStandardItemModel* w = getWrapped();
                Qt::DropActions res = 
                    
                w->supportedDragActions(
                  
                );
              
            // return type: Qt::DropActions

            return cpp2js_Qt_DropActions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedDragActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: moveRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::moveRows
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_QModelIndex(handler, a4
  )

   && is_int(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceRow (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: count (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a4_cpp;

      a4_cpp = js2cpp_QModelIndex(handler, a4);
        
  // convert js parameter to cpp: destinationChild (int)
  
int a5_cpp;

      a5_cpp = js2cpp_int(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->moveRows(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: moveColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::moveColumns
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_QModelIndex(handler, a4
  )

   && is_int(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceColumn (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: count (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a4_cpp;

      a4_cpp = js2cpp_QModelIndex(handler, a4);
        
  // convert js parameter to cpp: destinationChild (int)
  
int a5_cpp;

      a5_cpp = js2cpp_int(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->moveColumns(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: removeRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::removeRow
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = js2cpp_QModelIndex(handler, a2);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->removeRow(
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

                  qWarning() << "no matching function variant found for removeRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: removeColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::removeColumn
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = js2cpp_QModelIndex(handler, a2);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->removeColumn(
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

                  qWarning() << "no matching function variant found for removeColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: moveRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::moveRow
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
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceRow (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a3_cpp;

      a3_cpp = js2cpp_QModelIndex(handler, a3);
        
  // convert js parameter to cpp: destinationChild (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->moveRow(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: moveColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::moveColumn
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
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceColumn (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a3_cpp;

      a3_cpp = js2cpp_QModelIndex(handler, a3);
        
  // convert js parameter to cpp: destinationChild (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->moveColumn(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: fetchMore
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::fetchMore
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->fetchMore(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for fetchMore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: canFetchMore
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::canFetchMore
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->canFetchMore(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canFetchMore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: buddy
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::buddy
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QModelIndex res = 
                    
                w->buddy(
                  a1_cpp
    
                );
              
            // return type: QModelIndex

            return cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for buddy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: span
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::span
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QSize res = 
                    
                w->span(
                  a1_cpp
    
                );
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for span";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: headerDataChanged
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QStandardItemModel_Wrapper::headerDataChangedEmitter(
                Qt::Orientation orientation, int first, int last
              ) {
                // convert cpp parameters to js:
                
  // parameter: orientation (Qt::Orientation)
  


  QJSValue a1_js = cpp2js_Qt_Orientation(
    handler, 
    orientation
  );

  // parameter: first (int)
  


  QJSValue a2_js = cpp2js_int(
    handler, 
    first
  );

  // parameter: last (int)
  


  QJSValue a3_js = cpp2js_int(
    handler, 
    last
  );


                emit headerDataChanged(
                  a1_js, a2_js, a3_js
                );
              }
            
    // Class: QStandardItemModel
    // Function: rowsInserted
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QStandardItemModel_Wrapper::rowsInsertedEmitter(
                const QModelIndex& parent, int first, int last
              ) {
                // convert cpp parameters to js:
                
  // parameter: parent (QModelIndex)
  


  QJSValue a1_js = cpp2js_QModelIndex(
    handler, 
    parent
  );

  // parameter: first (int)
  


  QJSValue a2_js = cpp2js_int(
    handler, 
    first
  );

  // parameter: last (int)
  


  QJSValue a3_js = cpp2js_int(
    handler, 
    last
  );


                emit rowsInserted(
                  a1_js, a2_js, a3_js
                );
              }
            
    // Class: QStandardItemModel
    // Function: submit
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::submit
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->submit(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for submit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: revert
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::revert
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
                QStandardItemModel* w = getWrapped();
                
                w->revert(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for revert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::index
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

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = js2cpp_QModelIndex(handler, a3);
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
                QStandardItemModel* w = getWrapped();
                QModelIndex res = 
                    
                w->index(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QModelIndex

            return cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for index";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::parent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: child (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QModelIndex res = 
                    
                w->parent(
                  a1_cpp
    
                );
              
            // return type: QModelIndex

            return cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: rowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::rowCount
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QModelIndex();
          }
          else {
            a1_cpp = js2cpp_QModelIndex(handler, a1);
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
                QStandardItemModel* w = getWrapped();
                int res = 
                    
                w->rowCount(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: columnCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::columnCount
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QModelIndex();
          }
          else {
            a1_cpp = js2cpp_QModelIndex(handler, a1);
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
                QStandardItemModel* w = getWrapped();
                int res = 
                    
                w->columnCount(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: hasChildren
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::hasChildren
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QModelIndex();
          }
          else {
            a1_cpp = js2cpp_QModelIndex(handler, a1);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->hasChildren(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::data
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
        is_QModelIndex(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: role (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::DisplayRole;
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
                QStandardItemModel* w = getWrapped();
                QVariant res = 
                    
                w->data(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for data";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setData
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
        is_QModelIndex(handler, a1
  )

   && is_QVariant(handler, a2
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: role (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::EditRole;
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->setData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: clearItemData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::clearItemData
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->clearItemData(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clearItemData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: headerData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::headerData
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

   && is_Qt_Orientation(handler, a2
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: section (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: orientation (Qt::Orientation)
  
Qt::Orientation a2_cpp;

      a2_cpp = js2cpp_Qt_Orientation(handler, a2);
        
  // convert js parameter to cpp: role (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::DisplayRole;
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
                QStandardItemModel* w = getWrapped();
                QVariant res = 
                    
                w->headerData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for headerData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setHeaderData
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setHeaderData
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
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_Qt_Orientation(handler, a2
  )

   && is_QVariant(handler, a3
  )

   && is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: section (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: orientation (Qt::Orientation)
  
Qt::Orientation a2_cpp;

      a2_cpp = js2cpp_Qt_Orientation(handler, a2);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a3_cpp;

      a3_cpp = js2cpp_QVariant(handler, a3);
        
  // convert js parameter to cpp: role (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::EditRole;
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->setHeaderData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setHeaderData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: insertRows
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::insertRows
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = js2cpp_QModelIndex(handler, a3);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->insertRows(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for insertRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: insertColumns
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::insertColumns
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = js2cpp_QModelIndex(handler, a3);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->insertColumns(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for insertColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: removeRows
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::removeRows
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = js2cpp_QModelIndex(handler, a3);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->removeRows(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: removeColumns
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::removeColumns
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = js2cpp_QModelIndex(handler, a3);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->removeColumns(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::flags
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                Qt::ItemFlags res = 
                    
                w->flags(
                  a1_cpp
    
                );
              
            // return type: Qt::ItemFlags

            return cpp2js_Qt_ItemFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: supportedDropActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::supportedDropActions
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
                QStandardItemModel* w = getWrapped();
                Qt::DropActions res = 
                    
                w->supportedDropActions(
                  
                );
              
            // return type: Qt::DropActions

            return cpp2js_Qt_DropActions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedDropActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::clear
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
                QStandardItemModel* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: sort
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::sort
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_Qt_SortOrder(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: order (Qt::SortOrder)
  
Qt::SortOrder a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AscendingOrder;
          }
          else {
            a2_cpp = js2cpp_Qt_SortOrder(handler, a2);
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
                QStandardItemModel* w = getWrapped();
                
                w->sort(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: itemFromIndex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::itemFromIndex
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->itemFromIndex(
                  a1_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for itemFromIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: indexFromItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::indexFromItem
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QStandardItem_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a1_cpp;

      a1_cpp = js2cpp_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QModelIndex res = 
                    
                w->indexFromItem(
                  a1_cpp
    
                );
              
            // return type: QModelIndex

            return cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for indexFromItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: item
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::item
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
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
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
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->item(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for item";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setItem
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setItem
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_QStandardItem_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a3_cpp;

      a3_cpp = js2cpp_QStandardItem_ptr(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setItem(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QStandardItem_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a2_cpp;

      a2_cpp = js2cpp_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setItem(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: invisibleRootItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::invisibleRootItem
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
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->invisibleRootItem(
                  
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for invisibleRootItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: horizontalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::horizontalHeaderItem
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->horizontalHeaderItem(
                  a1_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalHeaderItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setHorizontalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setHorizontalHeaderItem
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QStandardItem_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a2_cpp;

      a2_cpp = js2cpp_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setHorizontalHeaderItem(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalHeaderItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: verticalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::verticalHeaderItem
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->verticalHeaderItem(
                  a1_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalHeaderItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setVerticalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setVerticalHeaderItem
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QStandardItem_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a2_cpp;

      a2_cpp = js2cpp_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setVerticalHeaderItem(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalHeaderItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setHorizontalHeaderLabels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setHorizontalHeaderLabels
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
    
  // convert js parameter to cpp: labels (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setHorizontalHeaderLabels(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalHeaderLabels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setVerticalHeaderLabels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setVerticalHeaderLabels
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
    
  // convert js parameter to cpp: labels (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setVerticalHeaderLabels(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalHeaderLabels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setRowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setRowCount
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rows (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setRowCount(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setColumnCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setColumnCount
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: columns (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setColumnCount(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColumnCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: appendRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::appendRow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QList_QStandardItem_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a1_cpp;

      a1_cpp = js2cpp_QList_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->appendRow(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QStandardItem_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a1_cpp;

      a1_cpp = js2cpp_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->appendRow(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: appendColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::appendColumn
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QList_QStandardItem_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a1_cpp;

      a1_cpp = js2cpp_QList_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->appendColumn(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: insertRow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::insertRow
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QStandardItem_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a2_cpp;

      a2_cpp = js2cpp_QList_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->insertRow(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QStandardItem_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a2_cpp;

      a2_cpp = js2cpp_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->insertRow(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = js2cpp_QModelIndex(handler, a2);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->insertRow(
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

                  qWarning() << "no matching function variant found for insertRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: insertColumn
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::insertColumn
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QStandardItem_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: items (QList<QStandardItem*>)
  
QList<QStandardItem*> a2_cpp;

      a2_cpp = js2cpp_QList_QStandardItem_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->insertColumn(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = js2cpp_QModelIndex(handler, a2);
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
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->insertColumn(
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

                  qWarning() << "no matching function variant found for insertColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: takeItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::takeItem
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
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
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->takeItem(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: takeRow
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::takeRow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QList<QStandardItem*> res = 
                    
                w->takeRow(
                  a1_cpp
    
                );
              
            // return type: QList<QStandardItem*>

            return cpp2js_QList_QStandardItem_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: takeColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::takeColumn
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QList<QStandardItem*> res = 
                    
                w->takeColumn(
                  a1_cpp
    
                );
              
            // return type: QList<QStandardItem*>

            return cpp2js_QList_QStandardItem_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: takeHorizontalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::takeHorizontalHeaderItem
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->takeHorizontalHeaderItem(
                  a1_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeHorizontalHeaderItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: takeVerticalHeaderItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::takeVerticalHeaderItem
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                QStandardItem* res = 
                    
                w->takeVerticalHeaderItem(
                  a1_cpp
    
                );
              
            // return type: QStandardItem*

            return cpp2js_QStandardItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for takeVerticalHeaderItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setItemPrototype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setItemPrototype
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStandardItem_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: item (QStandardItem)
  

          // pointer:
          QStandardItem*
         a1_cpp;

      a1_cpp = js2cpp_QStandardItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setItemPrototype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItemPrototype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: findItems
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::findItems
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
        is_QString(handler, a1
  )

   && is_Qt_MatchFlags(handler, a2
    , true
  
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::MatchFlags)
  
Qt::MatchFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::MatchExactly;
          }
          else {
            a2_cpp = js2cpp_Qt_MatchFlags(handler, a2);
          }
        
  // convert js parameter to cpp: column (int)
  
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
                QStandardItemModel* w = getWrapped();
                QList<QStandardItem*> res = 
                    
                w->findItems(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<QStandardItem*>

            return cpp2js_QList_QStandardItem_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: sortRole
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::sortRole
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
                QStandardItemModel* w = getWrapped();
                int res = 
                    
                w->sortRole(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sortRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: setSortRole
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::setSortRole
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: role (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                
                w->setSortRole(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSortRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: mimeTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::mimeTypes
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
                QStandardItemModel* w = getWrapped();
                QStringList res = 
                    
                w->mimeTypes(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mimeTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: dropMimeData
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QStandardItemModel_Wrapper::dropMimeData
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QMimeData_ptr(handler, a1
    , true
  
  )

   && is_Qt_DropAction(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

   && is_QModelIndex(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QMimeData)
  

          // pointer:
          QMimeData*
         a1_cpp;

      a1_cpp = js2cpp_QMimeData_ptr(handler, a1);
        
  // convert js parameter to cpp: action (Qt::DropAction)
  
Qt::DropAction a2_cpp;

      a2_cpp = js2cpp_Qt_DropAction(handler, a2);
        
  // convert js parameter to cpp: row (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: column (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a5_cpp;

      a5_cpp = js2cpp_QModelIndex(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStandardItemModel* w = getWrapped();
                bool res = 
                    
                w->dropMimeData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dropMimeData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStandardItemModel
    // Function: itemChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QStandardItemModel_Wrapper::itemChangedEmitter(
                QStandardItem* item
              ) {
                // convert cpp parameters to js:
                
  // parameter: item (QStandardItem)
  


  QJSValue a1_js = cpp2js_QStandardItem(
    handler, 
    item
  );


                emit itemChanged(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  