

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTEXTEDIT_H_BASE
  #define QTEXTEDIT_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QTextDocument>
  
    #include <QMenu>
  
    #include <QMimeData>
  
    #include <QRegularExpression>
  
    #include <QQmlEngine>

    
        #include <QTextEdit>
      
    // Base class for QTextEdit
      class QTextEdit_Base : public QTextEdit {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#if QT_CONFIG(textmarkdownreader)&&QT_CONFIG(textmarkdownwriter)

#endif

#ifndef QT_NO_TEXTHTMLPARSER

#endif

  // Class: QTextEdit
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QTextEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& text, QWidget* parent=nullptr
      )
      
        : QTextEdit(
          text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QTextEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QTextEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QTextEdit(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
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

    // destructor:
    virtual ~QTextEdit_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void actionEvent(
      QActionEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void actionEventPublic(
      QActionEvent* event
    ) {
      //qDebug() << "QTextEdit_Base::actionEventPublic()";
      QTextEdit::actionEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setViewportMargins(
      int left, int top, int right, int bottom
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setViewportMarginsPublic(
      int left, int top, int right, int bottom
    ) {
      //qDebug() << "QTextEdit_Base::setViewportMarginsPublic()";
      QTextEdit::setViewportMargins(
        left, top, right, bottom
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setViewportMargins(
      const QMargins& margins
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setViewportMarginsPublic(
      const QMargins& margins
    ) {
      //qDebug() << "QTextEdit_Base::setViewportMarginsPublic()";
      QTextEdit::setViewportMargins(
        margins
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QMargins viewportMargins(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QMargins viewportMarginsPublic(
      
    ) {
      //qDebug() << "QTextEdit_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTextEdit::viewportMargins(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool eventFilter(
      QObject* a1, QEvent* a2
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventFilterPublic(
      QObject* a1, QEvent* a2
    ) {
      //qDebug() << "QTextEdit_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTextEdit::eventFilter(
        a1, a2
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual bool viewportEvent(
      QEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual bool viewportEventPublic(
      QEvent* a1
    ) {
      //qDebug() << "QTextEdit_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTextEdit::viewportEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual QSize viewportSizeHint(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual QSize viewportSizeHintPublic(
      
    ) {
      //qDebug() << "QTextEdit_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTextEdit::viewportSizeHint(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void resizeEvent(
      QResizeEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void resizeEventPublic(
      QResizeEvent* e
    ) {
      //qDebug() << "QTextEdit_Base::resizeEventPublic()";
      QTextEdit::resizeEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void paintEvent(
      QPaintEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void paintEventPublic(
      QPaintEvent* e
    ) {
      //qDebug() << "QTextEdit_Base::paintEventPublic()";
      QTextEdit::paintEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "QTextEdit_Base::mouseMoveEventPublic()";
      QTextEdit::mouseMoveEvent(
        e
      );
    }
  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  