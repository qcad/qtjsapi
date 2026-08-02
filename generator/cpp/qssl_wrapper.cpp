
  // Auto generated
  
  // include header:
  //#include "qsslwrapper.h"
  //#include "header_cpp.h"
  
    #include "qssl_wrapper.h"

  
    void QSsl_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSsl_Wrapper>("org.qcad", 1, 0, "QSsl_Wrapper");
        qmlRegisterInterface<QSsl_Wrapper>("QSsl_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // type is namespace, no scriptable type (RJSType_QSsl)
        

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSsl_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSsl_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSsl_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSsl_BaseJs", mob);
      
      QString fileName = ":generator/js/QSsl.js";
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
  

  // constructors:
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qssl_wrapper.cpp"
  
