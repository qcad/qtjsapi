

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSCROLLBAR_H_BASE
  #define QSCROLLBAR_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QStyleOptionSlider>
  
    #include <QQmlEngine>

    
        #include <QScrollBar>
      
    // Base class for QScrollBar
      class QScrollBar_Base : public QScrollBar {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QScrollBar
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QScrollBar_Base
        
      (

        
          RJSApi& _h
          
            ,
          Qt::Orientation a1, QWidget* parent=nullptr
      )
      
        : QScrollBar(
          a1, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QScrollBar
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QScrollBar_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QScrollBar(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(itemviews)

#endif

    // destructor:
    virtual ~QScrollBar_Base() { }

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
      QPaintEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* a1
    ) {
      //qDebug() << "QScrollBar_Base::paintEventPublic()";
      QScrollBar::paintEvent(
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
      //qDebug() << "QScrollBar_Base::mouseMoveEventPublic()";
      QScrollBar::mouseMoveEvent(
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
  