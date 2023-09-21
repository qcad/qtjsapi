

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QQUICKWIDGET_H_BASE
  #define QQUICKWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>
  
    #include <QQmlContext>
  
    #include <QQmlError>
  
    #include <QQuickItem>
  
    #include <QQmlComponent>
  
    #include <QQmlEngine>

    
        #include <QQuickWidget>
      
    // Base class for QQuickWidget
      class QQuickWidget_Base : public QQuickWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QQuickWidget
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QQuickWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QUrl& source, QWidget* parent=nullptr
      )
      
        : QQuickWidget(
          source, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QQuickWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QQuickWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QQuickWidget(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QQuickWidget_Base() { }

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
      //qDebug() << "QQuickWidget_Base::mousePressEventPublic()";
      QQuickWidget::mousePressEvent(
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
      //qDebug() << "QQuickWidget_Base::mouseReleaseEventPublic()";
      QQuickWidget::mouseReleaseEvent(
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
      //qDebug() << "QQuickWidget_Base::mouseMoveEventPublic()";
      QQuickWidget::mouseMoveEvent(
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
      //qDebug() << "QQuickWidget_Base::paintEventPublic()";
      QQuickWidget::paintEvent(
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
      //qDebug() << "QQuickWidget_Base::resizeEventPublic()";
      QQuickWidget::resizeEvent(
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
      //qDebug() << "QQuickWidget_Base::actionEventPublic()";
      QQuickWidget::actionEvent(
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
  