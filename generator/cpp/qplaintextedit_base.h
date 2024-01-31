

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QPLAINTEXTEDIT_H_BASE
  #define QPLAINTEXTEDIT_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QTextDocument>
  
    #include <QMenu>
  
    #include <QMimeData>
  
    #include <QPagedPaintDevice>
  
    #include <QRegularExpression>
  
    #include <QQmlEngine>

    
        #include <QPlainTextEdit>
      
    // Base class for QPlainTextEdit
      class QPlainTextEdit_Base : public QPlainTextEdit {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QPlainTextEdit
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QPlainTextEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& text, QWidget* parent=nullptr
      )
      
        : QPlainTextEdit(
          text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QPlainTextEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QPlainTextEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QPlainTextEdit(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(regularexpression)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#ifndef QT_NO_CLIPBOARD

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

#if QT_CONFIG(wheelevent)

#endif

    // destructor:
    virtual ~QPlainTextEdit_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
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
      //qDebug() << "QPlainTextEdit_Base::resizeEventPublic()";
      QPlainTextEdit::resizeEvent(
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
      //qDebug() << "QPlainTextEdit_Base::paintEventPublic()";
      QPlainTextEdit::paintEvent(
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
      //qDebug() << "QPlainTextEdit_Base::mouseMoveEventPublic()";
      QPlainTextEdit::mouseMoveEvent(
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
  