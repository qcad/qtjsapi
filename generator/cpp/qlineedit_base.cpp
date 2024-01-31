

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qlineedit_base.h"
  //#include "qlineedit_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QLineEdit

    // constructors:
    
  // Class: QLineEdit
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

  // Class: QLineEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2

#ifndef QT_NO_VALIDATOR

#endif

#if QT_CONFIG(completer)

#endif

#if QT_CONFIG(action)

#endif

#ifndef QT_NO_CLIPBOARD

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#ifdef QT_KEYPAD_NAVIGATION

#endif

#if QT_CONFIG(completer)

#endif

#ifdef QT_KEYPAD_NAVIGATION

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QLineEdit_Base::mouseMoveEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QLineEdit_Base::mouseMoveEvent()";

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
        QLineEdit::mouseMoveEvent(
          a1
        );
      }
    }

  void QLineEdit_Base::paintEvent(
      QPaintEvent* a1
    ) {

      //qDebug() << "QLineEdit_Base::paintEvent()";

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
        QLineEdit::paintEvent(
          a1
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      