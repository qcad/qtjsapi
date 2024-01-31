

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QHEADERVIEW_H_BASE
  #define QHEADERVIEW_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QStyleOptionHeader>
  
    #include <QQmlEngine>

    
        #include <QHeaderView>
      
    // Base class for QHeaderView
      class QHeaderView_Base : public QHeaderView {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QHeaderView
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QHeaderView_Base
        
      (

        
          RJSApi& _h
          
            ,
          Qt::Orientation orientation, QWidget* parent=nullptr
      )
      
        : QHeaderView(
          orientation, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifndef QT_NO_DATASTREAM

#endif

    // destructor:
    virtual ~QHeaderView_Base() { }

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
      QPaintEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* e
    ) {
      //qDebug() << "QHeaderView_Base::paintEventPublic()";
      QHeaderView::paintEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "QHeaderView_Base::mouseMoveEventPublic()";
      QHeaderView::mouseMoveEvent(
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
  