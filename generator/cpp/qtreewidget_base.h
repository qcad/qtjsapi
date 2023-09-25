

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTREEWIDGET_H_BASE
  #define QTREEWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QTreeWidget>
  
    #include <QQmlEngine>

    
        #include <QTreeWidgetItem>
      
    #include <QQmlEngine>

    
        #include <QTreeWidget>
      
    // Base class for QTreeWidget
      class QTreeWidget_Base : public QTreeWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QTreeWidget_Base() { }

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
  