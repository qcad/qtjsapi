

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QPRINTDIALOG_H_BASE
  #define QPRINTDIALOG_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QPushButton>
  
    #include <QPrinter>
  
    #include <QQmlEngine>

    
        #include <QPrintDialog>
      
    // Base class for QPrintDialog
      class QPrintDialog_Base : public QPrintDialog {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QPrintDialog
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QPrintDialog_Base
        
      (

        
          RJSApi& _h
          
            ,
          QPrinter* printer, QWidget* parent=nullptr
      )
      
        : QPrintDialog(
          printer, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QPrintDialog
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QPrintDialog_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QPrintDialog(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if defined(Q_OS_UNIX)&&!defined(Q_OS_MAC)

#endif

#if defined(Q_OS_UNIX)||defined(Q_OS_WIN)

#endif

#ifdef Q_QDOC

#endif

#if defined(Q_OS_UNIX)&&!defined(Q_OS_MAC)

#if QT_CONFIG(messagebox)

#endif

#endif

    // destructor:
    virtual ~QPrintDialog_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mousePressEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mousePressEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QPrintDialog_Base::mousePressEventPublic()";
      QPrintDialog::mousePressEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseReleaseEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseReleaseEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QPrintDialog_Base::mouseReleaseEventPublic()";
      QPrintDialog::mouseReleaseEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QPrintDialog_Base::mouseMoveEventPublic()";
      QPrintDialog::mouseMoveEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void paintEvent(
      QPaintEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void paintEventPublic(
      QPaintEvent* event
    ) {
      //qDebug() << "QPrintDialog_Base::paintEventPublic()";
      QPrintDialog::paintEvent(
        event
      );
    }
  
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
      //qDebug() << "QPrintDialog_Base::actionEventPublic()";
      QPrintDialog::actionEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* a1
    ) {
      //qDebug() << "QPrintDialog_Base::resizeEventPublic()";
      QPrintDialog::resizeEvent(
        a1
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
  