

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QPUSHBUTTON_H_BASE
  #define QPUSHBUTTON_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QMenu>
  
    #include <QStyleOptionButton>
  
    #include <QQmlEngine>

    
        #include <QPushButton>
      
    // Base class for QPushButton
      class QPushButton_Base : public QPushButton {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QPushButton
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QPushButton_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QIcon& icon, const QString& text, QWidget* parent=nullptr
      )
      
        : QPushButton(
          icon, text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QPushButton
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
QPushButton_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& text, QWidget* parent=nullptr
      )
      
        : QPushButton(
          text, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QPushButton
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QPushButton_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QPushButton(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(menu)

#endif

    // destructor:
    virtual ~QPushButton_Base() { }

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
      //qDebug() << "QPushButton_Base::mousePressEventPublic()";
      QPushButton::mousePressEvent(
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
      //qDebug() << "QPushButton_Base::mouseReleaseEventPublic()";
      QPushButton::mouseReleaseEvent(
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
      //qDebug() << "QPushButton_Base::resizeEventPublic()";
      QPushButton::resizeEvent(
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
      //qDebug() << "QPushButton_Base::actionEventPublic()";
      QPushButton::actionEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* a1
    ) {
      //qDebug() << "QPushButton_Base::paintEventPublic()";
      QPushButton::paintEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "QPushButton_Base::mouseMoveEventPublic()";
      QPushButton::mouseMoveEvent(
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
  