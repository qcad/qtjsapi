

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QWINDOW_H_BASE
  #define QWINDOW_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QExposeEvent>
  
    #include <QPaintEvent>
  
    #include <QFocusEvent>
  
    #include <QMoveEvent>
  
    #include <QResizeEvent>
  
    #include <QShowEvent>
  
    #include <QHideEvent>
  
    #include <QCloseEvent>
  
    #include <QKeyEvent>
  
    #include <QMouseEvent>
  
    #include <QWheelEvent>
  
    #include <QTouchEvent>
  
    #include <QTabletEvent>
  
    #include <QBackingStore>
  
    #include <QScreen>
  
    #include <QAccessibleInterface>
  
    #include <QDebug>
  
    #include <QQmlEngine>

    
        #include <QWindow>
      
    // Base class for QWindow
      class QWindow_Base : public QWindow {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#ifdef Q_QDOC

#else

#endif

  // Class: QWindow
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QWindow_Base
        
      (

        
          RJSApi& _h
          
            ,
          QScreen* screen=nullptr
      )
      
        : QWindow(
          screen
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(tabletevent)

#endif

    // destructor:
    virtual ~QWindow_Base() { }

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
      QResizeEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void resizeEventPublic(
      QResizeEvent* a1
    ) {
      //qDebug() << "QWindow_Base::resizeEventPublic()";
      QWindow::resizeEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void paintEvent(
      QPaintEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void paintEventPublic(
      QPaintEvent* a1
    ) {
      //qDebug() << "QWindow_Base::paintEventPublic()";
      QWindow::paintEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "QWindow_Base::mouseMoveEventPublic()";
      QWindow::mouseMoveEvent(
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
  