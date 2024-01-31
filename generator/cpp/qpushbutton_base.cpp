

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qpushbutton_base.h"
  //#include "qpushbutton_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QPushButton

    // constructors:
    
  // Class: QPushButton
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1

  // Class: QPushButton
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3

  // Class: QPushButton
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2

#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(menu)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QPushButton_Base::paintEvent(
      QPaintEvent* a1
    ) {

      //qDebug() << "QPushButton_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPaintEvent(
    handler, 
    // non-copyable: true
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.paintEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPushButton::paintEvent(
          a1
        );
      }
    }

  void QPushButton_Base::mouseMoveEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QPushButton_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
    handler, 
    // non-copyable: true
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseMoveEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPushButton::mouseMoveEvent(
          a1
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      