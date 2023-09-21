

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QABSTRACTITEMVIEW_H_BASE
  #define QABSTRACTITEMVIEW_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QMenu>
  
    #include <QDrag>
  
    #include <QEvent>
  
    #include <QQmlEngine>

    
        #include <QAbstractItemView>
      
    // Base class for QAbstractItemView
      class QAbstractItemView_Base : public QAbstractItemView {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QAbstractItemView_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
      //bool recFlag;

    };
    
  #endif
  