

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QLAYOUTITEM_H_BASE
  #define QLAYOUTITEM_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QLayout>
  
    #include <QLayoutItem>
  
    #include <QSpacerItem>
  
    #include <QWidget>
  
    #include <QSize>
  
    #include <QQmlEngine>

    
        #include <QLayoutItem>
      
    // Base class for QLayoutItem
      class QLayoutItem_Base : public QLayoutItem {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QLayoutItem_Base() { }

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
    
    #include <QQmlEngine>

    
        #include <QSpacerItem>
      
    #include <QQmlEngine>

    
        #include <QWidgetItem>
      
  #endif
  