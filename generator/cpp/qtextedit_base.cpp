

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qtextedit_base.h"
  //#include "qtextedit_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QTextEdit

    // constructors:
    
#if QT_CONFIG(textmarkdownreader)&&QT_CONFIG(textmarkdownwriter)

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

  // Class: QTextEdit
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

  // Class: QTextEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2

#if QT_CONFIG(textmarkdownreader)&&QT_CONFIG(textmarkdownwriter)

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

#if QT_CONFIG(regularexpression)

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

#if QT_CONFIG(textmarkdownwriter)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

#if QT_CONFIG(textmarkdownreader)

#endif

#ifndef QT_NO_CLIPBOARD

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(cursor)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QTextEdit_Base::resizeEvent(
      QResizeEvent* e
    ) {

      //qDebug() << "QTextEdit_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QResizeEvent(
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
        QTextEdit::resizeEvent(
          e
        );
      }
    }

  void QTextEdit_Base::paintEvent(
      QPaintEvent* e
    ) {

      //qDebug() << "QTextEdit_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPaintEvent(
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
        QTextEdit::paintEvent(
          e
        );
      }
    }

  void QTextEdit_Base::mouseMoveEvent(
      QMouseEvent* e
    ) {

      //qDebug() << "QTextEdit_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
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
        QTextEdit::mouseMoveEvent(
          e
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      