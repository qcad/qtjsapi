

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QLISTWIDGET_H_BASE
  #define QLISTWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QListWidget>
  
    #include <QQmlEngine>

    
        #include <QListWidgetItem>
      
    #include <QQmlEngine>

    
        #include <QListWidget>
      
    // Base class for QListWidget
      class QListWidget_Base : public QListWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QListWidget_Base() { }

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
  