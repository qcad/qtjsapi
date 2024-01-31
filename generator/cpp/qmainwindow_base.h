

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QMAINWINDOW_H_BASE
  #define QMAINWINDOW_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QDockWidget>
  
    #include <QMenuBar>
  
    #include <QStatusBar>
  
    #include <QToolBar>
  
    #include <QMenu>
  
    #include <QQmlEngine>

    
        #include <QMainWindow>
      
    // Base class for QMainWindow
      class QMainWindow_Base : public QMainWindow {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#if QT_CONFIG(dockwidget)

#if QT_CONFIG(tabbar)

#endif

#if QT_CONFIG(tabwidget)

#endif

#endif

#if QT_CONFIG(toolbar)

#endif

  // Class: QMainWindow
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QMainWindow_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr, Qt::WindowFlags flags=Qt::WindowFlags()
      )
      
        : QMainWindow(
          parent, flags
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(dockwidget)

#endif

#if QT_CONFIG(tabbar)

#endif

#if QT_CONFIG(tabwidget)

#endif

#if QT_CONFIG(menubar)

#endif

#if QT_CONFIG(statusbar)

#endif

#if QT_CONFIG(dockwidget)

#endif

#if QT_CONFIG(toolbar)

#endif

#if QT_CONFIG(dockwidget)

#if QT_CONFIG(tabbar)

#endif

#endif

#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(dockwidget)

#endif

#if QT_CONFIG(toolbar)

#endif

#if QT_CONFIG(dockwidget)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

    // destructor:
    virtual ~QMainWindow_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void contextMenuEvent(
      QContextMenuEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void contextMenuEventPublic(
      QContextMenuEvent* event
    ) {
      //qDebug() << "QMainWindow_Base::contextMenuEventPublic()";
      QMainWindow::contextMenuEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool event(
      QEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventPublic(
      QEvent* event
    ) {
      //qDebug() << "QMainWindow_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QMainWindow::event(
        event
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
  