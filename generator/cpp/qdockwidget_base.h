

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QDOCKWIDGET_H_BASE
  #define QDOCKWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QMainWindow>
  
    #include <QStyleOptionDockWidget>
  
    #include <QQmlEngine>

    
        #include <QDockWidget>
      
    // Base class for QDockWidget
      class QDockWidget_Base : public QDockWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QDockWidget
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QDockWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& title, QWidget* parent=nullptr, Qt::WindowFlags flags=Qt::WindowFlags()
      )
      
        : QDockWidget(
          title, parent, flags
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QDockWidget
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
QDockWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr, Qt::WindowFlags flags=Qt::WindowFlags()
      )
      
        : QDockWidget(
          parent, flags
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifndef QT_NO_ACTION

#endif

    // destructor:
    virtual ~QDockWidget_Base() { }

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
      //qDebug() << "QDockWidget_Base::mousePressEventPublic()";
      QDockWidget::mousePressEvent(
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
      //qDebug() << "QDockWidget_Base::mouseReleaseEventPublic()";
      QDockWidget::mouseReleaseEvent(
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
      //qDebug() << "QDockWidget_Base::actionEventPublic()";
      QDockWidget::actionEvent(
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
      //qDebug() << "QDockWidget_Base::paintEventPublic()";
      QDockWidget::paintEvent(
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
      //qDebug() << "QDockWidget_Base::mouseMoveEventPublic()";
      QDockWidget::mouseMoveEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void resizeEvent(
      QResizeEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void resizeEventPublic(
      QResizeEvent* event
    ) {
      //qDebug() << "QDockWidget_Base::resizeEventPublic()";
      QDockWidget::resizeEvent(
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
  