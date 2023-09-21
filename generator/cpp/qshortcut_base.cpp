

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qshortcut_base.h"
  //#include "qshortcut_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QShortcut

    // constructors:
    
  // Class: QShortcut
  // Function: 
  // Parameters: 5
  // preceding Parameters: -1

  // Class: QShortcut
  // Function: 
  // Parameters: 1
  // preceding Parameters: 5

#ifdef Q_CLANG_QDOC

#else

#endif

#if QT_DEPRECATED_SINCE(6,0)

#ifdef Q_CLANG_QDOC

#else

#endif

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      bool QShortcut_Base::event(
      QEvent* e
    ) {

      //qDebug() << "QShortcut_Base::event()";

      //QJSValue f = self.prototype().property("event");
      QJSValue f = self.property("event");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QEvent(
    handler, 
    // non-copyable: true
e
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.event.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        QShortcut::event(
          e
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      