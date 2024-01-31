

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QABSTRACTSLIDER_H_BASE
  #define QABSTRACTSLIDER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QQmlEngine>

    
        #include <QAbstractSlider>
      
    // Base class for QAbstractSlider
      class QAbstractSlider_Base : public QAbstractSlider {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QAbstractSlider
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QAbstractSlider_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QAbstractSlider(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(wheelevent)

#endif

    // destructor:
    virtual ~QAbstractSlider_Base() { }

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
  