

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qlistview_base.h"
  //#include "qlistview_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QListView

    // constructors:
    
  // Class: QListView
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(draganddrop)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QListView_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QListView_Base::actionEvent()";

      //QJSValue f = self.prototype().property("actionEvent");
      QJSValue f = self.property("actionEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QActionEvent(
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
        QListView::actionEvent(
          event
        );
      }
    }

  void QListView_Base::setViewportMargins(
      int left, int top, int right, int bottom
    ) {

      //qDebug() << "QListView_Base::setViewportMargins()";

      //QJSValue f = self.prototype().property("setViewportMargins");
      QJSValue f = self.property("setViewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
left
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
top
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
right
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
bottom
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setViewportMargins.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::setViewportMargins(
          left, top, right, bottom
        );
      }
    }

  void QListView_Base::setViewportMargins(
      const QMargins& margins
    ) {

      //qDebug() << "QListView_Base::setViewportMargins()";

      //QJSValue f = self.prototype().property("setViewportMargins");
      QJSValue f = self.property("setViewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMargins(
    handler, 
    // non-copyable: false
margins
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setViewportMargins.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::setViewportMargins(
          margins
        );
      }
    }

  QMargins QListView_Base::viewportMargins(
      
    ) {

      //qDebug() << "QListView_Base::viewportMargins()";

      //QJSValue f = self.prototype().property("viewportMargins");
      QJSValue f = self.property("viewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.viewportMargins.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_QMargins(handler, res);
          
      }
      else {
        
          return
        QListView::viewportMargins(
          
        );
      }
    }

  bool QListView_Base::eventFilter(
      QObject* a1, QEvent* a2
    ) {

      //qDebug() << "QListView_Base::eventFilter()";

      //QJSValue f = self.prototype().property("eventFilter");
      QJSValue f = self.property("eventFilter");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QObject(
    handler, 
    // non-copyable: true
a1
  );


  args << RJSHelper::cpp2js_QEvent(
    handler, 
    // non-copyable: true
a2
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.eventFilter.apply(__self__, __args__);", "", 1, &trace);

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
        QListView::eventFilter(
          a1, a2
        );
      }
    }

  bool QListView_Base::viewportEvent(
      QEvent* a1
    ) {

      //qDebug() << "QListView_Base::viewportEvent()";

      //QJSValue f = self.prototype().property("viewportEvent");
      QJSValue f = self.property("viewportEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QEvent(
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
        QJSValue res = engine->evaluate("__self__.viewportEvent.apply(__self__, __args__);", "", 1, &trace);

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
        QListView::viewportEvent(
          a1
        );
      }
    }

  void QListView_Base::mousePressEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QListView_Base::mousePressEvent()";

      //QJSValue f = self.prototype().property("mousePressEvent");
      QJSValue f = self.property("mousePressEvent");
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
        QListView::mousePressEvent(
          a1
        );
      }
    }

  void QListView_Base::mouseDoubleClickEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QListView_Base::mouseDoubleClickEvent()";

      //QJSValue f = self.prototype().property("mouseDoubleClickEvent");
      QJSValue f = self.property("mouseDoubleClickEvent");
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
        QJSValue res = engine->evaluate("__self__.mouseDoubleClickEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::mouseDoubleClickEvent(
          a1
        );
      }
    }

  void QListView_Base::dragEnterEvent(
      QDragEnterEvent* a1
    ) {

      //qDebug() << "QListView_Base::dragEnterEvent()";

      //QJSValue f = self.prototype().property("dragEnterEvent");
      QJSValue f = self.property("dragEnterEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QDragEnterEvent(
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
        QJSValue res = engine->evaluate("__self__.dragEnterEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::dragEnterEvent(
          a1
        );
      }
    }

  void QListView_Base::keyPressEvent(
      QKeyEvent* a1
    ) {

      //qDebug() << "QListView_Base::keyPressEvent()";

      //QJSValue f = self.prototype().property("keyPressEvent");
      QJSValue f = self.property("keyPressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QKeyEvent(
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
        QJSValue res = engine->evaluate("__self__.keyPressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::keyPressEvent(
          a1
        );
      }
    }

  void QListView_Base::pressed(
      const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::pressed()";

      //QJSValue f = self.prototype().property("pressed");
      QJSValue f = self.property("pressed");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.pressed.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::pressed(
          index
        );
      }
    }

  void QListView_Base::clicked(
      const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::clicked()";

      //QJSValue f = self.prototype().property("clicked");
      QJSValue f = self.property("clicked");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.clicked.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::clicked(
          index
        );
      }
    }

  void QListView_Base::activated(
      const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::activated()";

      //QJSValue f = self.prototype().property("activated");
      QJSValue f = self.property("activated");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.activated.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::activated(
          index
        );
      }
    }

  void QListView_Base::entered(
      const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::entered()";

      //QJSValue f = self.prototype().property("entered");
      QJSValue f = self.property("entered");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.entered.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::entered(
          index
        );
      }
    }

  void QListView_Base::viewportEntered(
      
    ) {

      //qDebug() << "QListView_Base::viewportEntered()";

      //QJSValue f = self.prototype().property("viewportEntered");
      QJSValue f = self.property("viewportEntered");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.viewportEntered.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::viewportEntered(
          
        );
      }
    }

  void QListView_Base::iconSizeChanged(
      const QSize& size
    ) {

      //qDebug() << "QListView_Base::iconSizeChanged()";

      //QJSValue f = self.prototype().property("iconSizeChanged");
      QJSValue f = self.property("iconSizeChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QSize(
    handler, 
    // non-copyable: false
size
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.iconSizeChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::iconSizeChanged(
          size
        );
      }
    }

  bool QListView_Base::event(
      QEvent* e
    ) {

      //qDebug() << "QListView_Base::event()";

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
        QListView::event(
          e
        );
      }
    }

  void QListView_Base::scrollContentsBy(
      int dx, int dy
    ) {

      //qDebug() << "QListView_Base::scrollContentsBy()";

      //QJSValue f = self.prototype().property("scrollContentsBy");
      QJSValue f = self.property("scrollContentsBy");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
dx
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
dy
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.scrollContentsBy.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::scrollContentsBy(
          dx, dy
        );
      }
    }

  void QListView_Base::resizeContents(
      int width, int height
    ) {

      //qDebug() << "QListView_Base::resizeContents()";

      //QJSValue f = self.prototype().property("resizeContents");
      QJSValue f = self.property("resizeContents");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
width
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
height
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.resizeContents.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::resizeContents(
          width, height
        );
      }
    }

  QSize QListView_Base::contentsSize(
      
    ) {

      //qDebug() << "QListView_Base::contentsSize()";

      //QJSValue f = self.prototype().property("contentsSize");
      QJSValue f = self.property("contentsSize");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.contentsSize.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_QSize(handler, res);
          
      }
      else {
        
          return
        QListView::contentsSize(
          
        );
      }
    }

  void QListView_Base::dataChanged(
      const QModelIndex& topLeft, const QModelIndex& bottomRight, const QList<int>& roles
    ) {

      //qDebug() << "QListView_Base::dataChanged()";

      //QJSValue f = self.prototype().property("dataChanged");
      QJSValue f = self.property("dataChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
topLeft
  );


  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
bottomRight
  );


  args << RJSHelper::cpp2js_QList_int(
    handler, 
    // non-copyable: false
roles
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.dataChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::dataChanged(
          topLeft, bottomRight, roles
        );
      }
    }

  void QListView_Base::rowsInserted(
      const QModelIndex& parent, int start, int end
    ) {

      //qDebug() << "QListView_Base::rowsInserted()";

      //QJSValue f = self.prototype().property("rowsInserted");
      QJSValue f = self.property("rowsInserted");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
parent
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
start
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
end
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.rowsInserted.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::rowsInserted(
          parent, start, end
        );
      }
    }

  void QListView_Base::rowsAboutToBeRemoved(
      const QModelIndex& parent, int start, int end
    ) {

      //qDebug() << "QListView_Base::rowsAboutToBeRemoved()";

      //QJSValue f = self.prototype().property("rowsAboutToBeRemoved");
      QJSValue f = self.property("rowsAboutToBeRemoved");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
parent
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
start
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
end
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.rowsAboutToBeRemoved.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::rowsAboutToBeRemoved(
          parent, start, end
        );
      }
    }

  void QListView_Base::mouseMoveEvent(
      QMouseEvent* e
    ) {

      //qDebug() << "QListView_Base::mouseMoveEvent()";

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
        QListView::mouseMoveEvent(
          e
        );
      }
    }

  void QListView_Base::mouseReleaseEvent(
      QMouseEvent* e
    ) {

      //qDebug() << "QListView_Base::mouseReleaseEvent()";

      //QJSValue f = self.prototype().property("mouseReleaseEvent");
      QJSValue f = self.property("mouseReleaseEvent");
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
        QListView::mouseReleaseEvent(
          e
        );
      }
    }

  void QListView_Base::wheelEvent(
      QWheelEvent* e
    ) {

      //qDebug() << "QListView_Base::wheelEvent()";

      //QJSValue f = self.prototype().property("wheelEvent");
      QJSValue f = self.property("wheelEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QWheelEvent(
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
        QJSValue res = engine->evaluate("__self__.wheelEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::wheelEvent(
          e
        );
      }
    }

  void QListView_Base::resizeEvent(
      QResizeEvent* e
    ) {

      //qDebug() << "QListView_Base::resizeEvent()";

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
        QListView::resizeEvent(
          e
        );
      }
    }

  void QListView_Base::dropEvent(
      QDropEvent* e
    ) {

      //qDebug() << "QListView_Base::dropEvent()";

      //QJSValue f = self.prototype().property("dropEvent");
      QJSValue f = self.property("dropEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QDropEvent(
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
        QJSValue res = engine->evaluate("__self__.dropEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::dropEvent(
          e
        );
      }
    }

  void QListView_Base::startDrag(
      Qt::DropActions supportedActions
    ) {

      //qDebug() << "QListView_Base::startDrag()";

      //QJSValue f = self.prototype().property("startDrag");
      QJSValue f = self.property("startDrag");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_Qt_DropActions(
    handler, 
    // non-copyable: false
supportedActions
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.startDrag.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::startDrag(
          supportedActions
        );
      }
    }

  void QListView_Base::paintEvent(
      QPaintEvent* e
    ) {

      //qDebug() << "QListView_Base::paintEvent()";

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
        QListView::paintEvent(
          e
        );
      }
    }

  int QListView_Base::horizontalOffset(
      
    ) {

      //qDebug() << "QListView_Base::horizontalOffset()";

      //QJSValue f = self.prototype().property("horizontalOffset");
      QJSValue f = self.property("horizontalOffset");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.horizontalOffset.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_int(handler, res);
          
      }
      else {
        
          return
        QListView::horizontalOffset(
          
        );
      }
    }

  int QListView_Base::verticalOffset(
      
    ) {

      //qDebug() << "QListView_Base::verticalOffset()";

      //QJSValue f = self.prototype().property("verticalOffset");
      QJSValue f = self.property("verticalOffset");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.verticalOffset.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_int(handler, res);
          
      }
      else {
        
          return
        QListView::verticalOffset(
          
        );
      }
    }

  QRect QListView_Base::rectForIndex(
      const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::rectForIndex()";

      //QJSValue f = self.prototype().property("rectForIndex");
      QJSValue f = self.property("rectForIndex");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.rectForIndex.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_QRect(handler, res);
          
      }
      else {
        
          return
        QListView::rectForIndex(
          index
        );
      }
    }

  void QListView_Base::setPositionForIndex(
      const QPoint& position, const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::setPositionForIndex()";

      //QJSValue f = self.prototype().property("setPositionForIndex");
      QJSValue f = self.property("setPositionForIndex");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QPoint(
    handler, 
    // non-copyable: false
position
  );


  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setPositionForIndex.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::setPositionForIndex(
          position, index
        );
      }
    }

  void QListView_Base::updateGeometries(
      
    ) {

      //qDebug() << "QListView_Base::updateGeometries()";

      //QJSValue f = self.prototype().property("updateGeometries");
      QJSValue f = self.property("updateGeometries");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.updateGeometries.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::updateGeometries(
          
        );
      }
    }

  bool QListView_Base::isIndexHidden(
      const QModelIndex& index
    ) {

      //qDebug() << "QListView_Base::isIndexHidden()";

      //QJSValue f = self.prototype().property("isIndexHidden");
      QJSValue f = self.property("isIndexHidden");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.isIndexHidden.apply(__self__, __args__);", "", 1, &trace);

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
        QListView::isIndexHidden(
          index
        );
      }
    }

  void QListView_Base::currentChanged(
      const QModelIndex& current, const QModelIndex& previous
    ) {

      //qDebug() << "QListView_Base::currentChanged()";

      //QJSValue f = self.prototype().property("currentChanged");
      QJSValue f = self.property("currentChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
current
  );


  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
previous
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.currentChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QListView::currentChanged(
          current, previous
        );
      }
    }

  QSize QListView_Base::viewportSizeHint(
      
    ) {

      //qDebug() << "QListView_Base::viewportSizeHint()";

      //QJSValue f = self.prototype().property("viewportSizeHint");
      QJSValue f = self.property("viewportSizeHint");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.viewportSizeHint.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_QSize(handler, res);
          
      }
      else {
        
          return
        QListView::viewportSizeHint(
          
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      