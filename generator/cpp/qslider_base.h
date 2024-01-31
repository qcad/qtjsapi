

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSLIDER_H_BASE
  #define QSLIDER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QStyleOptionSlider>
  
    #include <QQmlEngine>

    
        #include <QSlider>
      
    // Base class for QSlider
      class QSlider_Base : public QSlider {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QSlider
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QSlider_Base
        
      (

        
          RJSApi& _h
          
            ,
          Qt::Orientation orientation, QWidget* parent=nullptr
      )
      
        : QSlider(
          orientation, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QSlider
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QSlider_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QSlider(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QSlider_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* ev
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* ev
    ) {
      //qDebug() << "QSlider_Base::paintEventPublic()";
      QSlider::paintEvent(
        ev
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* ev
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* ev
    ) {
      //qDebug() << "QSlider_Base::mouseMoveEventPublic()";
      QSlider::mouseMoveEvent(
        ev
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
  