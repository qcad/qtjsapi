

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qmessagebox_base.h"
  //#include "qmessagebox_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QMessageBox

    // constructors:
    
#if QT_CONFIG(textedit)

#endif

  // Class: QMessageBox
  // Function: 
  // Parameters: 6
  // preceding Parameters: -1

  // Class: QMessageBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: 6

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

#if QT_CONFIG(textedit)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QMessageBox_Base::resizeEvent(
      QResizeEvent* event
    ) {

      //qDebug() << "QMessageBox_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QResizeEvent(
    handler, 
    // non-copyable: true
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.resizeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QMessageBox::resizeEvent(
          event
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      