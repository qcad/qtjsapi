

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTEXTBROWSER_H_BASE
  #define QTEXTBROWSER_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>

    
        #include <QTextBrowser>
      
    // Base class for QTextBrowser
      class QTextBrowser_Base : public QTextBrowser {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QTextBrowser
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QTextBrowser_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QTextBrowser(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QTextBrowser_Base() { }

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
      //qDebug() << "QTextBrowser_Base::actionEventPublic()";
      QTextBrowser::actionEvent(
        event
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
      //qDebug() << "QTextBrowser_Base::resizeEventPublic()";
      QTextBrowser::resizeEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* ev
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* ev
    ) {
      //qDebug() << "QTextBrowser_Base::mouseMoveEventPublic()";
      QTextBrowser::mouseMoveEvent(
        ev
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
      //qDebug() << "QTextBrowser_Base::paintEventPublic()";
      QTextBrowser::paintEvent(
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
  