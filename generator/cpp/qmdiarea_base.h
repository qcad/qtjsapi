

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QMDIAREA_H_BASE
  #define QMDIAREA_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QMdiSubWindow>
  
    #include <QQmlEngine>

    
        #include <QMdiArea>
      
    // Base class for QMdiArea
      class QMdiArea_Base : public QMdiArea {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QMdiArea
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QMdiArea_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QMdiArea(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(tabbar)

#endif

#if QT_CONFIG(tabwidget)

#endif

#if QT_CONFIG(tabbar)

#endif

#if QT_CONFIG(tabwidget)

#endif

    // destructor:
    virtual ~QMdiArea_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

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
  