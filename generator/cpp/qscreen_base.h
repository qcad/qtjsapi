

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSCREEN_H_BASE
  #define QSCREEN_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QWindow>
  
    #include <QRect>
  
    #include <QPixmap>
  
    #include <QDebug>
  
    #include <QQmlEngine>

    
        #include <QScreen>
      
    // Base class for QScreen
      class QScreen_Base : public QScreen {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
    // destructor:
    virtual ~QScreen_Base() { }

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
  