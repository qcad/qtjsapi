

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qwidget_base.h"
  //#include "qwidget_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QWidget

    // constructors:
    
#ifndef QT_NO_CURSOR

#endif

#ifndef QT_NO_TOOLTIP

#endif

#if QT_CONFIG(statustip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#ifndef QT_NO_ACCESSIBILITY

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

  // Class: QWidget
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(tooltip)

#endif

#if QT_CONFIG(statustip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#ifndef QT_NO_ACCESSIBILITY

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifdef Q_QDOC

#endif

#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(graphicseffect)

#endif

#ifndef QT_NO_GESTURES

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifndef QT_NO_TOOLTIP

#endif

#if QT_CONFIG(statustip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#ifndef QT_NO_ACCESSIBILITY

#endif

#ifndef QT_NO_CURSOR

#endif

#ifndef QT_NO_SHORTCUT

#endif

#if QT_CONFIG(graphicsview)

#endif

#ifndef QT_NO_ACTION

#if QT_VERSION>=QT_VERSION_CHECK(6,0,0)

#else

#endif

#endif

#ifdef QT_KEYPAD_NAVIGATION

#endif

#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(tabletevent)

#endif

#ifndef QT_NO_ACTION

#endif

#if QT_CONFIG(draganddrop)

#endif

#if QT_VERSION>=QT_VERSION_CHECK(6,0,0)

#else

#endif

#ifndef QT_NO_GESTURES

#endif

#ifdef Q_OS_MAC

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QWidget_Base::mousePressEvent(
      QMouseEvent* event
    ) {

      //qDebug() << "QWidget_Base::mousePressEvent()";

      //QJSValue f = self.prototype().property("mousePressEvent");
      QJSValue f = self.property("mousePressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QJSValue res = engine->evaluate("__self__.mousePressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QWidget::mousePressEvent(
          event
        );
      }
    }

  void QWidget_Base::mouseReleaseEvent(
      QMouseEvent* event
    ) {

      //qDebug() << "QWidget_Base::mouseReleaseEvent()";

      //QJSValue f = self.prototype().property("mouseReleaseEvent");
      QJSValue f = self.property("mouseReleaseEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QJSValue res = engine->evaluate("__self__.mouseReleaseEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QWidget::mouseReleaseEvent(
          event
        );
      }
    }

  void QWidget_Base::mouseMoveEvent(
      QMouseEvent* event
    ) {

      //qDebug() << "QWidget_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QWidget::mouseMoveEvent(
          event
        );
      }
    }

  void QWidget_Base::paintEvent(
      QPaintEvent* event
    ) {

      //qDebug() << "QWidget_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QPaintEvent(
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
        QWidget::paintEvent(
          event
        );
      }
    }

  void QWidget_Base::resizeEvent(
      QResizeEvent* event
    ) {

      //qDebug() << "QWidget_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QResizeEvent(
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
        QWidget::resizeEvent(
          event
        );
      }
    }

  void QWidget_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QWidget_Base::actionEvent()";

      //QJSValue f = self.prototype().property("actionEvent");
      QJSValue f = self.property("actionEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QActionEvent(
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
        QJSValue res = engine->evaluate("__self__.actionEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QWidget::actionEvent(
          event
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      